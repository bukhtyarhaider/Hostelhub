import { User } from "firebase/auth";
import { Hostel } from "../../../../types/types";

export interface DetailsTableProps {
  tableData: Hostel;
  authUser: User | undefined;
}
