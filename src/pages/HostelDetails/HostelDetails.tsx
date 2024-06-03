import styles from "./HostelDetails.module.scss";
import { Tabs } from "antd";
import CustomGallery from "./components/CustomGallery/CustomGallery";
import DetailsTable from "./components/DetailsTable/DetailsTable";
import HowToBook from "./components/HowToBook/HowToBook";
import {
  adCardsData,
  AdCard as IAdCard,
  hostelDetailsDescriptionData,
  hostelDetailsTableData,
  howToBookData,
} from "../../content";
import AdCard from "../../components/AdCard/AdCard";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HostelDetails = ({ authUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const getSimilarHostels = (
    hostelId: string | undefined,
    hostelData: IAdCard[]
  ): IAdCard[] => {
    if (!hostelId) {
      return [];
    }

    const targetHostel = hostelData.find(
      (hostel) => hostel.id.toString() === hostelId
    );

    if (!targetHostel) {
      return [];
    }

    // Extract the city name from the location (assumes the format is "Area, City")
    const targetCity = targetHostel.location.split(", ").pop();

    // Filter hostels with the same location but different ID
    // TODO : Filter the data bases of Type and
    const similarHostels = hostelData.filter(
      (hostel) =>
        hostel.location.split(", ").pop() === targetCity &&
        hostel.id.toString() !== hostelId
    );

    return similarHostels;
  };

  const [similarData, setSimilarData] = useState<IAdCard[]>([]);

  useEffect(() => {
    const similarHostels = getSimilarHostels(id?.toString(), adCardsData);
    setSimilarData(similarHostels);
  }, [id]);

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
            {hostelDetailsDescriptionData.description.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
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

      {similarData.length > 0 && (
        <>
          <h2 className={styles.heading}>More Hostels Like This</h2>

          <div className={styles.cardsContainer}>
            {similarData.slice(0, 2).map((item, index) => (
              <div key={index}>
                <AdCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  location={item.location}
                  onShowDetails={() => {
                    navigate(`/hostel-details/${item.id}`);
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default HostelDetails;
