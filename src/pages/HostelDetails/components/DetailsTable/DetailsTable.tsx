import styles from "./DetailsTable.module.scss";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import { DataType } from "./DetailsTableProps";
import { useNavigate } from "react-router-dom";

const DetailsTable = ({ tableData, authUser }) => {
  const navigate = useNavigate();
  const columns: TableColumnsType<DataType> = [
    { title: "Room Number", dataIndex: "roomNumber", key: "roomNumber" },
    { title: "Room Type", dataIndex: "roomType", key: "roomType" },
    { title: "Number of Beds", dataIndex: "numberOfBeds", key: "numberOfBeds" },
    { title: "Washroom", dataIndex: "washroom", key: "washroom" },
    {
      title: "Seats Available",
      dataIndex: "seatsAvailable",
      key: "seatsAvailable",
    },
    {
      title: "Room Price/Seat",
      dataIndex: "roomPricePerSeat",
      key: "roomPricePerSeat",
    },
  ];

  if (authUser) {
    columns.push({
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (data) => (
        <CustomButton
          onClick={() => applyForHostel(data)}
          title={"Apply"}
          variant={"filled"}
          size={"small"}
        />
      ),
    });
  }

  const applyForHostel = (data) => {
    navigate(`/hostel-application`);
  };

  return (
    <div className={styles.detailsTableContainer}>
      <Table columns={columns} dataSource={tableData} bordered />
    </div>
  );
};

export default DetailsTable;
