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
