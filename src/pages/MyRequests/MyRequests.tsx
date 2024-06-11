import AdCard from "../../components/AdCard/AdCard";
import CustomButton from "../../components/CustomButton/CustomButton";
import { adCardsData, hostelRequestsData } from "../../content";
import HostelRequestsCard from "./HostelRequestsCard/HostelRequestsCard";
import styles from "./MyRequests.module.scss";

const MyRequests = () => {
  return (
    <div className={styles.myRequestsContainer}>
      <div className={styles.hostelRequestsContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Hostel Requests</h2>
          <CustomButton
            title={"Search More Hostels"}
            variant={"filled"}
            size={"medium"}
            onClick={() => {}}
          />
        </div>

        <div className={styles.cardsContainer}>
          {hostelRequestsData.map((data) => (
            <div className={styles.card}>
              <HostelRequestsCard
                image={data.image}
                title={data.title}
                location={data.location}
                type={data.type}
                price={data.price}
                status={data.status}
                decisionDetails={data.decisionDetails}
              />
            </div>
          ))}
        </div>
      </div>

      <h2 className={styles.heading}>More Hostels Like This</h2>

      <div className={styles.cardsContainer}>
        {adCardsData.slice(0, 2).map((item, index) => (
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
    </div>
  );
};

export default MyRequests;
