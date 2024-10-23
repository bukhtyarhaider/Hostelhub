export interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export interface UpdateProfileParams {
  fullName: string;
  phoneNumber: string;
  address: string;
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
  phoneNumber: string;
  currentAddress: string;
  currentState: string;
}

export interface Hostel {
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
  roomNumber: string;
  type: "Single Room" | "Double Room" | "Shared Room" | "Bunker Room";
  numberOfBeds: number;
  washroom: number;
  seatsAvailable: number;
  price: number;
}
