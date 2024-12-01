import styles from "./HostelDetails.module.scss";
import { Tabs } from "antd";
import CustomGallery from "./components/CustomGallery/CustomGallery";
import DetailsTable from "./components/DetailsTable/DetailsTable";
import HowToBook from "./components/HowToBook/HowToBook";

import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HostelDetailsProps } from "./HostelDetailsProps";
import { howToBookData } from "../../content";

const HostelDetails: React.FC<HostelDetailsProps> = ({ authUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const hostelDetails = location.state?.hostelDetails;

  if (!hostelDetails) {
    navigate("/");
  }

  useEffect(() => {}, [id]);

  const tabsMenuData = [
    {
      label: "Details & Description",
      key: "1",
      children: (
        <>
          <DetailsTable tableData={hostelDetails} authUser={authUser} />
          <div className={styles.description}>
            <h2>Description</h2>
            <p>{hostelDetails?.description}</p>
          </div>
        </>
      ),
    },
    {
      label: "How To Book",
      key: "2",
      children: <HowToBook howToBookData={howToBookData} />,
    },
  ];

  return (
    <>
      <div className={styles.hostelDetailsContainer}>
        <CustomGallery
          title={hostelDetails?.name ?? ""}
          subTitle={`${hostelDetails?.type ?? "Student"} Hostel`}
          images={hostelDetails?.images ?? []}
          location={hostelDetails?.location ?? ""}
          wardenProfile={{
            profileImageUrl: hostelDetails.warden.photoURL ?? "",
            name: hostelDetails.warden.fullName ?? "",
          }}
        />

        <Tabs defaultActiveKey="1" items={tabsMenuData} />
      </div>
    </>
  );
};

export default HostelDetails;
