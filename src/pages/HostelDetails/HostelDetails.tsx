import styles from "./HostelDetails.module.scss";
import { Tabs } from "antd";
import CustomGallery from "./components/CustomGallery/CustomGallery";
import DetailsTable from "./components/DetailsTable/DetailsTable";
import HowToBook from "./components/HowToBook/HowToBook";
import {
  adCardsData,
  AdCard as AdCardItem,
  hostelDetailsDescriptionData,
  hostelDetailsTableData,
  howToBookData,
} from "../../content";
import AdCard from "../../components/AdCard/AdCard";
import { useState } from "react";

const HostelDetails = ({ authUser }) => {
  const [filteredData, setFilteredData] = useState<AdCardItem[]>(adCardsData);
  const tabsMenuData = [
    {
      label: "Details & Description",
      key: "1",
      children: (
        <>
          <DetailsTable
            tableData={hostelDetailsTableData}
            authUser={authUser}
          />
          <div className={styles.description}>
            <h2>{hostelDetailsDescriptionData.title}</h2>
            {hostelDetailsDescriptionData.description.map((data) => (
              <p>{data}</p>
            ))}
          </div>
        </>
      ),
    },
    {
      label: "How To Book",
      key: "3",
      children: <HowToBook howToBookData={howToBookData} />,
    },
  ];
  return (
    <>
      <div className={styles.hostelDetailsContainer}>
        <CustomGallery
          title={"Downing Hostel"}
          subTitle={"Student Accommodation"}
          images={[
            "https://picsum.photos/200",
            "https://picsum.photos/240",
            "https://picsum.photos/230",
            "https://picsum.photos/220",
          ]}
        />

        <Tabs defaultActiveKey="1" items={tabsMenuData} />
      </div>

      <h2 className={styles.heading}>More Hostels Like This</h2>

      <div className={styles.cardsContainer}>
        {filteredData.slice(0, 2).map((item, index) => (
          <div key={index}>
            <AdCard
              title={item.title}
              description={item.description}
              image={item.image}
              location={item.location}
              onShowDetails={() => {}}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HostelDetails;
