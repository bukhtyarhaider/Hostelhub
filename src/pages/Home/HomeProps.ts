import { User } from "firebase/auth";

export interface HomeProps {
  authUser: User | null;
  toggleRegisterModal: () => void;
  toggleSignInModal: () => void;
}
