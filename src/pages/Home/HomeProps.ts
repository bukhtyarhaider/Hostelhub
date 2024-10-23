import { User } from "firebase/auth";

export interface HomeProps {
  authUser: User;
  toggleRegisterModal: () => void;
  toggleSignInModal: () => void;
}
