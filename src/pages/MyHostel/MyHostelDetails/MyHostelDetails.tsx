import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";
import { infoIcon } from "../../../assets";
import { Flex, message, Progress } from "antd";
import styles from "./MyHostelDetails.module.scss";
import {
  fetchCurrentUserReservation,
  observeAuthState,
} from "../../../services/firebase";
import { Loader } from "../../../components/Loader/Loader";
import { Reservation } from "../../../types/types";
import NotFound from "../../../components/NotFound/NotFound";

const MyHostelDetails = () => {
  const [reservationData, setReservationData] = useState<Reservation>();
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
        const data = (await fetchCurrentUserReservation()) as Reservation;
        if (isMounted) setReservationData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          message.error(`Error fetching reservation: ${error.message}`);
        } else {
          message.error(
            "Failed to fetch reservation data due to an unknown error."
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

  if (loading) {
    return (
      <div className={styles.myHostelDetailsContainer}>
        <Loader />
      </div>
    );
  }

  if (!reservationData) {
    return (
      <div className={styles.myHostelDetailsContainer}>
        <NotFound
          title={"No reservation found"}
          message={"No Hostel is reserved yet."}
        />
      </div>
    );
  }

  const { hostel, reservationDetails, wardenDetails, reservationHolder } =
    reservationData;
  // Calculate total days of reservation
  const startDate = new Date(reservationDetails.stay.startDate);
  const endDate = new Date(reservationDetails.stay.endDate);
  const currentDate = new Date();

  const totalDays = differenceInDays(endDate, startDate);
  const spentDays = differenceInDays(currentDate, startDate);
  const remainingDays = differenceInDays(endDate, currentDate);
  const daysUntilStart = differenceInDays(startDate, currentDate);

  // Calculate the percentage of days spent
  const percent = ((spentDays / totalDays) * 100).toFixed(2);
  // Check if the reservation has started
  const hasStarted = currentDate >= startDate;

  return (
    <div className={styles.myHostelDetailsContainer}>
      <h3 className={styles.title}>{hostel.name}</h3>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Reservation Holder Details</h4>
          <div className={styles.detail}>
            <h5>Reservation Holder Name:</h5>
            <p>{reservationHolder.fullName}</p>
          </div>
          <div className={styles.detail}>
            <h5>Reservation Holder Email:</h5>
            <p>{reservationHolder.email}</p>
          </div>
          <div className={styles.detail}>
            <h5>Reservation Holder Phone Number:</h5>
            <p>{reservationHolder.phoneNumber}</p>
          </div>
          <div className={styles.detail}>
            <h5>Start Date:</h5>
            <p>{reservationDetails.stay.startDate}</p>
          </div>
          <div className={styles.detail}>
            <h5>End Date:</h5>
            <p>{reservationDetails.stay.endDate}</p>
          </div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Reservation Overview</h4>
          <div className={styles.notice}>
            <div className={styles.iconWrapper}>
              <img src={infoIcon} alt="Info Icon" />
            </div>
            <div className={styles.contentWrapper}>
              <h2>Important:</h2>
              <p>
                {`Your profile details have been used for your reservation at “${hostel.name}”. These details can't be changed manually by your user portal. Contact your warden if you wish to change anything`}
              </p>
            </div>
          </div>
          <div className={styles.daysDetails}>
            <div className={styles.daysHeader}>
              <h2>Days</h2>
              <h2>
                {spentDays} of {totalDays} Days
              </h2>
            </div>
            <Flex vertical gap="small">
              <Progress
                strokeLinecap="butt"
                percent={Number(percent)}
                showInfo={false}
              />
            </Flex>
            {!hasStarted ? (
              <p className={styles.daysDescription}>
                Your reservation will start in {daysUntilStart} days.
              </p>
            ) : remainingDays >= 0 ? (
              <p className={styles.daysDescription}>
                {remainingDays} days remaining until your reservation ends.
              </p>
            ) : (
              <p className={styles.daysDescription}>
                Your reservation is over. Contact admin to renew.
              </p>
            )}
          </div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Hostel Details</h4>
          <div className={styles.detail}>
            <h5>Hostel Name:</h5>
            <p>{hostel.name}</p>
          </div>
          <div className={styles.detail}>
            <h5>Hostel Location:</h5>
            <p>{hostel.location}</p>
          </div>
          <div className={styles.detail}>
            <h5>Warden Name:</h5>
            <p>{wardenDetails.fullName}</p>
          </div>
          <div className={styles.detail}>
            <h5>Warden Email:</h5>
            <p>{wardenDetails.email}</p>
          </div>
          <div className={styles.detail}>
            <h5>Warden Number:</h5>
            <p>{wardenDetails.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHostelDetails;
