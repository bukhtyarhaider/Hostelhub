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
  where,
} from "firebase/firestore";
import {
  Hostel,
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
  const { fullName, email, password } = userData;

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
