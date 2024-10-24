import { User } from "firebase/auth";
import { Room } from "../../../../types/types";

export interface DetailsTableProps {
  tableData: Room[];
  authUser: User | undefined;
}
