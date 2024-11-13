import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import HostelRequestsCard from "./HostelRequestsCard/HostelRequestsCard";
import styles from "./MyRequests.module.scss";
import {
  fetchMyBookingApplications,
  observeAuthState,
} from "../../services/firebase";
import { BookingApplication } from "../../types/types";
import { message } from "antd";
import { Loader } from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";

const MyRequests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<BookingApplication[] | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = observeAuthState(async (user) => {
      if (user) {
        await fetchData();
      } else {
        message.error("You need to sign in to view this page.");
      }
    });

    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedRequests = await fetchMyBookingApplications();
        if (isMounted) {
          setRequests(fetchedRequests);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          message.error(`Error fetching requests: ${error.message}`);
        } else {
          message.error(
            "Failed to fetch my requests data due to an unknown error."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  return (
    <div className={styles.myRequestsContainer}>
      <div className={styles.hostelRequestsContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Hostel Requests</h2>
          <CustomButton
            title={"Search More Hostels"}
            variant={"filled"}
            size={"medium"}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className={styles.cardsContainer}>
          {requests && requests?.length > 0 ? (
            requests.map((data, index) => (
              <div key={index} className={styles.card}>
                <HostelRequestsCard applicationData={data} />
              </div>
            ))
          ) : (
            <NotFound
              title="No Hostel Requests Found"
              message="After applying to any post, you will see the hostel requests here. Try applying to a room and come back to check your results."
            />
          )}
        </div>
      </div>
      <Loader hide={!loading} />
    </div>
  );
};

export default MyRequests;
