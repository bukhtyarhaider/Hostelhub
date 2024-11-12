import { User } from "../../types/types";

export interface HomeProps {
  authUser: User;
  toggleRegisterModal: () => void;
  toggleSignInModal: () => void;
}
