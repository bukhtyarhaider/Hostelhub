import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  BookingApplication,
  BookingApplicationDetails,
  Hostel,
  HostelNotice,
  Reservation,
  Room,
  SignUpForm,
  UpdateProfileParams,
  UserProfile,
  Warden,
} from "../types/types";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const signUp = async (userData: SignUpForm) => {
  const { fullName, email, password, phoneNumber, gender } = userData;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user: User = userCredential.user;

    await updateProfile(user, {
      displayName: fullName,
    });

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      fullName,
      email,
      createdAt: Timestamp.now(),
      phoneNumber,
      gender,
    });

    return user;
  } catch (error: any) {
    console.error("Error during signup:", error);
    throw new Error(error.code || error.message);
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during sign-in.");
    }
  }
};

export const observeAuthState = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during sign-out.");
    }
  }
};

export const uploadImage = async (file: File, path: string) => {
  try {
    const imageRef = ref(storage, path);
    const snapshot = await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to upload profile image: " + error.message);
    } else {
      throw new Error(
        "Failed to upload profile image: An unexpected error occurred"
      );
    }
  }
};

export const _updateProfile = async ({
  fullName,
  phoneNumber,
  address,
  state,
  status,
  photoURL,
  dateOfBirth,
}: UpdateProfileParams): Promise<string> => {
  try {
    const user = auth.currentUser;
    if (user) {
      await updateProfile(user, { displayName: fullName, photoURL });

      await setDoc(
        doc(db, "users", user.uid),
        {
          phoneNumber: phoneNumber,
          address: address,
          state: state,
          photoURL: photoURL,
          dateOfBirth: dateOfBirth,
          status: status,
        },
        { merge: true }
      );

      return "User profile updated successfully.";
    } else {
      throw new Error("No user is currently signed in.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getProfile = async (): Promise<UserProfile> => {
  const user = auth.currentUser;

  if (user) {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return {
        fullName: user.displayName ?? "",
        email: user.email ?? "",
        photoURL: user.photoURL ?? "",
        phoneNumber: userData?.phoneNumber ?? "",
        currentState: userData?.state ?? "",
        currentAddress: userData?.address ?? "",
        dateOfBirth: userData?.dateOfBirth ?? "",
        currentStatus: userData?.status ?? "",
        gender: userData?.status ?? "",
      };
    } else {
      throw new Error("User data not found.");
    }
  } else {
    throw new Error("No user is currently signed in.");
  }
};

export const fetchHostel = async (): Promise<Hostel[]> => {
  try {
    const hostelsRef = collection(db, "hostels");
    const snapshot = await getDocs(hostelsRef);

    const hostels = await Promise.all(
      snapshot.docs.map(async (hostel) => {
        const hostelData: Hostel = {
          id: hostel.id,
          name: hostel.data()?.name ?? "",
          email: hostel.data()?.email ?? "",
          location: hostel.data()?.location ?? "",
          contactNumber: hostel.data()?.contactNumber ?? "",
          type: hostel.data()?.type ?? "",
          description: hostel.data()?.description ?? "",
          images: hostel.data()?.images ?? "",
          rooms: [],
          gender: hostel.data()?.gender ?? "",
          warden: {
            wardenId: "",
            email: "",
            fullName: "",
            phoneNumber: "",
          },
        };

        const roomsRef = collection(db, `hostels/${hostel.id}/rooms`);
        const roomsSnapshot = await getDocs(roomsRef);

        hostelData.rooms = roomsSnapshot.docs.map((roomDoc) => {
          const roomData = roomDoc.data();
          return {
            id: roomDoc.id,
            roomNumber: roomData.roomNumber ?? 0,
            price: roomData.price ?? "",
            type: roomData.type ?? "",
            numberOfBeds: roomData.numberOfBeds ?? 0,
            washroom: roomData.washroom ?? 0,
            rent: roomData.rent ?? 0,
            seatsAvailable: roomData.seatsAvailable ?? 0,
          } as unknown as Room;
        });

        // Fetch warden data from wardens collection using hostel ID
        const wardensRef = collection(db, "wardens");
        const wardenQuery = query(
          wardensRef,
          where("hostelId", "==", hostel.id)
        );
        const wardenSnapshot = await getDocs(wardenQuery);

        const wardenDoc = wardenSnapshot.docs[0];
        if (wardenDoc) {
          const wardenData = wardenDoc.data();
          hostelData.warden = {
            id: wardenDoc.id,
            wardenId: wardenData.wardenId ?? "",
            email: wardenData.email ?? "",
            fullName: wardenData.fullName ?? "",
            phoneNumber: wardenData.phoneNumber ?? "",
            photoURL: wardenData.photoURL ?? "",
          } as Warden;
        }

        return hostelData;
      })
    );

    return hostels;
  } catch (error: any) {
    console.error("Error fetching Hostels:", error);
    throw new Error(error.message);
  }
};

export const bookingApplication = async (
  applicationData: BookingApplicationDetails
) => {
  const {
    fullName,
    email,
    phoneNumber,
    hostelName,
    hostelType,
    hostelImage,
    hostelLocation,
    hostelId,
    roomNumber,
    roomType,
    hostelRent,
    stayDuration,
    startDate,
    endDate,
    cnicFront,
    cnicBack,
    studentId,
    roomId,
  } = applicationData;

  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("No user is currently signed in.");
  }

  // Check if the user already has a pending application for the same room in the same hostel
  const applicationsRef = collection(db, "bookingApplications");
  const queryConstraint = query(
    applicationsRef,
    where("userId", "==", currentUser.uid),
    where("status", "==", "pending"),
    where("hostel.id", "==", hostelId),
    where("booking.roomNumber", "==", roomNumber)
  );
  const snapshot = await getDocs(queryConstraint);

  if (!snapshot.empty) {
    throw new Error("You already have a pending application for this room.");
  }

  // Firebase Firestore generates a new document reference with a unique ID
  const newApplicationRef = doc(collection(db, "bookingApplications"));

  const cnicFrontPath = cnicFront
    ? await uploadImage(
        cnicFront,
        `bookingApplication/${newApplicationRef.id}/cnicFront`
      )
    : null;

  const cnicBackPath = cnicBack
    ? await uploadImage(
        cnicBack,
        `bookingApplication/${newApplicationRef.id}/cnicBack`
      )
    : null;

  const studentIdCardPath = studentId
    ? await uploadImage(
        studentId,
        `bookingApplication/${newApplicationRef.id}/studentId`
      )
    : null;

  await setDoc(newApplicationRef, {
    id: newApplicationRef.id, // Document ID is automatically generated by Firestore
    userId: currentUser.uid, // Keeping track of which user created the application
    fullName,
    email,
    phoneNumber,
    documents: {
      cnicFront: cnicFrontPath,
      cnicBack: cnicBackPath,
      studentId: studentIdCardPath,
    },
    hostel: {
      name: hostelName,
      type: hostelType,
      id: hostelId,
      location: hostelLocation,
      image: hostelImage,
    },
    booking: {
      roomId,
      roomNumber,
      roomType,
      hostelRent,
      stay: {
        duration: stayDuration,
        startDate,
        endDate,
      },
    },
    createdAt: Timestamp.now(),
    status: "pending",
  });

  return "Booking application is successfully submitted.";
};

export const fetchMyBookingApplications = async (): Promise<
  BookingApplication[]
> => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("No user is currently signed in.");
  }

  const applicationsRef = collection(db, "bookingApplications");

  // Query to fetch booking applications of the current user
  const userApplicationsQuery = query(
    applicationsRef,
    where("userId", "==", currentUser.uid)
  );

  const snapshot = await getDocs(userApplicationsQuery);

  const applications: BookingApplication[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<BookingApplication, "id">),
  }));

  return applications;
};

export const makeReservation = async (application: BookingApplication) => {
  try {
    const reservationRef = doc(collection(db, "reservations"), application.id);

    // Fetch warden details using hostelId
    const wardensRef = collection(db, "wardens");
    const wardenQuery = query(
      wardensRef,
      where("hostelId", "==", application.hostel.id)
    );
    const wardenSnapshot = await getDocs(wardenQuery);

    let wardenDetails = {};
    if (!wardenSnapshot.empty) {
      const wardenDoc = wardenSnapshot.docs[0];
      wardenDetails = wardenDoc.data();
    }

    // Fetch the room details to check availability and decrease seats
    const roomRef = doc(
      db,
      `hostels/${application.hostel.id}/rooms`,
      application.booking.roomId
    );
    const roomDoc = await getDoc(roomRef);

    if (!roomDoc.exists()) {
      throw new Error("Room not found.");
    }

    const roomData = roomDoc.data();
    const seatsAvailable = roomData.seatsAvailable;

    if (seatsAvailable <= 0) {
      throw new Error("No seats available in this room.");
    }

    // Decrease seats available by one
    await setDoc(
      roomRef,
      { seatsAvailable: seatsAvailable - 1 },
      { merge: true }
    );

    const reservationHolder = {
      fullName: application.fullName,
      userId: application.userId,
      email: application.email,
      phoneNumber: application.phoneNumber,
    };

    // Create the reservation
    const data = {
      reservationHolder: reservationHolder,
      reservationDetails: application.booking,
      hostel: application.hostel,
      wardenDetails: wardenDetails,
      createdAt: Timestamp.now(),
    };

    await setDoc(reservationRef, data);

    const bookingApplicationRef = doc(
      db,
      "bookingApplications",
      application.id
    );
    await updateDoc(bookingApplicationRef, { status: "reserved" });

    return "Reservation successfully created.";
  } catch (error: any) {
    console.error("Error creating reservation:", error);
    throw new Error(error.message || "Failed to create reservation.");
  }
};

export const fetchCurrentUserReservation = async (): Promise<Reservation> => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("No user is currently signed in.");
  }

  try {
    // Query to fetch the current user's reservation
    const reservationsRef = collection(db, "reservations");
    const userReservationQuery = query(
      reservationsRef,
      where("reservationHolder.userId", "==", currentUser.uid)
    );

    const reservationSnapshot = await getDocs(userReservationQuery);

    if (reservationSnapshot.empty) {
      throw new Error("No reservation found for the current user.");
    }

    const reservationDoc = reservationSnapshot.docs[0];
    const reservationData = reservationDoc.data();

    const roomRef = doc(
      db,
      `hostels/${reservationData.hostel.id}/rooms`,
      reservationData.reservationDetails.roomId
    );
    const roomDoc = await getDoc(roomRef);

    if (roomDoc.exists()) {
      reservationData.roomDetails = roomDoc.data();
    }
    return reservationData as Reservation;
  } catch (error: any) {
    console.error("Error fetching reservation:", error);
    throw new Error(error.message || "Failed to fetch reservation.");
  }
};

export const fetchHostelNotices = async () => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error("No user is currently signed in.");
    }

    const reservationsRef = collection(db, "reservations");
    const queryReservations = query(
      reservationsRef,
      where("reservationHolder.userId", "==", currentUser.uid)
    );
    const reservationSnapshot = await getDocs(queryReservations);

    console.log(reservationSnapshot.docs[0].data());

    if (reservationSnapshot.empty) {
      throw new Error("No reservations found for the current user.");
    }

    const reservation = reservationSnapshot.docs[0].data();
    if (!reservation.hostel.id) {
      throw new Error("No hostel ID found in the reservation.");
    }
    const hostelId = reservation.hostel.id;

    const noticesRef = collection(db, "notices");
    const queryNotices = query(noticesRef, where("hostelId", "==", hostelId));
    const noticesSnapshot = await getDocs(queryNotices);

    if (noticesSnapshot.empty) {
      console.log("No notices found for this hostel.");
      return []; // Returning empty array if no notices found
    }

    return noticesSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as HostelNotice)
    );
  } catch (error: any) {
    console.error("Error fetching hostel notices:", error);
    throw new Error(error.message || "Failed to fetch hostel notices.");
  }
};

export const markNoticeAsRead = async (noticeId: string) => {
  try {
    const noticeRef = doc(db, "notices", noticeId);
    await updateDoc(noticeRef, {
      viewed: true,
    });
  } catch (error: any) {
    console.error("Error updating notice:", error);
    throw new Error(error.message || "Error updating notice");
  }
};
