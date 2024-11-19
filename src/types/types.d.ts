export type BookingApplicationStatus = "pending" | "approved" | "rejected";

export interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export interface UpdateProfileParams {
  fullName: string;
  phoneNumber: string;
  address: string;
  gender: string;
  state: string;
  status: string;
  photoURL: string;
  dateOfBirth: string;
}

export interface UserProfile {
  photoURL: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  currentStatus: string;
  gender: string;
  phoneNumber: string;
  currentAddress: string;
  currentState: string;
}

export interface Hostel {
  warden: Warden;
  id: string;
  name: string;
  email: string;
  location: string;
  contactNumber: string;
  type: "Student" | "Staff" | "Vistor";
  description: string;
  images: string[];
  rooms?: Room[];
}

export interface Room {
  id?: string;
  roomNumber: string;
  type: "Single Room" | "Double Room" | "Shared Room" | "Bunker Room";
  numberOfBeds: number;
  washroom: number;
  seatsAvailable: number;
  price: number;
}

export interface Warden {
  key?: string;
  id?: string;
  wardenId: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  photoURL?: string;
}

export interface BookingApplicationDetails {
  roomId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  hostelImage: string;
  hostelLocation: string;
  hostelName: string;
  hostelType: string;
  hostelId: string;
  roomNumber: string;
  roomType: string;
  hostelRent: string;
  stayDuration: string;
  startDate: Date | null;
  endDate: Date | null;
  cnicFront: File | null;
  cnicBack: File | null;
  studentId: File | null;
}

interface BookingApplication {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  documents: {
    cnicFront: string;
    cnicBack: string;
    studentId: string;
  };
  hostel: {
    name: string;
    type: string;
    id: string;
    location: string;
    image: string;
  };
  booking: {
    roomId: string;
    roomNumber: string;
    roomType: string;
    hostelRent: string;
    stay: {
      duration: string;
      startDate: string;
      endDate: string;
    };
  };
  createdAt: Timestamp;
  status: BookingApplicationStatus;
}

interface ReservationHolder {
  fullName: string;
  userId: string;
  email: string;
  phoneNumber: string;
}

interface StayDetails {
  duration: string;
  startDate: string;
  endDate: string;
}

interface BookingDetails {
  roomId: string;
  roomNumber: string;
  roomType: string;
  hostelRent: string;
  stay: StayDetails;
}

interface ReservedHostel {
  id: string;
  name: string;
  type: string;
  location: string;
  image: string;
}

interface WardenDetails {
  wardenId: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  photoURL?: string;
}

export interface Reservation {
  reservationHolder: ReservationHolder;
  reservationDetails: BookingDetails;
  hostel: ReservedHostel;
  wardenDetails: WardenDetails;
  createdAt: Timestamp;
}
export interface HostelNotice {
  id: string;
  wardenId: string;
  hostelId: string;
  title: string;
  body: string;
  date: string;
  viewed: boolean;
}
