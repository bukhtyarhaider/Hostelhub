import styles from "./DetailsTable.module.scss";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import { DetailsTableProps } from "./DetailsTableProps";
import { useNavigate } from "react-router-dom";
import { Room } from "../../../../types/types";

const DetailsTable: React.FC<DetailsTableProps> = ({ tableData, authUser }) => {
  const navigate = useNavigate();
  const columns: TableColumnsType<Room> = [
    { title: "Room Number", dataIndex: "roomNumber", key: "roomNumber" },
    { title: "Room Type", dataIndex: "type", key: "type" },
    { title: "Number of Beds", dataIndex: "numberOfBeds", key: "numberOfBeds" },
    { title: "Washroom", dataIndex: "washroom", key: "washroom" },
    {
      title: "Seats Available",
      dataIndex: "seatsAvailable",
      key: "seatsAvailable",
    },
    {
      title: "Room Price/Seat",
      dataIndex: "price",
      key: "price",
    },
  ];

  if (authUser) {
    columns.push({
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (room: Room) => (
        <CustomButton
          onClick={() => applyForHostel(room)}
          title={"Apply"}
          variant={"filled"}
          size={"small"}
        />
      ),
    });
  }

  const applyForHostel = (room: Room) => {
    const applicationDetails = {
      fullName: authUser?.displayName,
      email: authUser?.email,
      phoneNumber: authUser?.phoneNumber,
      hostelName: tableData.name,
      hostelType: tableData.type,
      hostelId: tableData.id,
      roomNumber: room.roomNumber,
      roomType: room.type,
      hostelRent: room.price,
    };

    navigate(`/hostel-application`, {
      state: {
        applicationDetails: applicationDetails,
      },
    });
  };

  return (
    <div className={styles.detailsTableContainer}>
      <Table columns={columns} dataSource={tableData?.rooms} bordered />
    </div>
  );
};

export default DetailsTable;
