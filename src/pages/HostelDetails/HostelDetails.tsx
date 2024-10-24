import styles from "./HostelDetails.module.scss";
import { Tabs } from "antd";
import CustomGallery from "./components/CustomGallery/CustomGallery";
import DetailsTable from "./components/DetailsTable/DetailsTable";
import HowToBook from "./components/HowToBook/HowToBook";
import { adCardsData, AdCard as IAdCard, howToBookData } from "../../content";
import AdCard from "../../components/AdCard/AdCard";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HostelDetailsProps } from "./HostelDetailsProps";

const HostelDetails: React.FC<HostelDetailsProps> = ({ authUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const hostelDetails = location.state?.hostelDetails;

  console.log(hostelDetails);

  if (!hostelDetails) {
    console.log(hostelDetails);
    navigate("/");
  }

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
          <DetailsTable tableData={hostelDetails?.rooms} authUser={authUser} />
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
