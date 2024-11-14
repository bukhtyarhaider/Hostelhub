import { useState, useEffect } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import styles from "./MyHostelNotices.module.scss";
import { HostelNotice } from "../../../types/types";
import {
  fetchHostelNotices,
  markNoticeAsRead,
  observeAuthState,
} from "../../../services/firebase";
import { message } from "antd";
import "react-quill/dist/quill.snow.css";
import { Loader } from "../../../components/Loader/Loader";
import NotFound from "../../../components/NotFound/NotFound";

interface NoticeDetailProps {
  data: HostelNotice;
  onBack: () => void;
}

const NoticeDetail = ({ data, onBack }: NoticeDetailProps) => {
  return (
    <div className={styles.noticeDetail}>
      <div className={styles.backBtnContainer}>
        <CustomButton
          onClick={onBack}
          title={"Back"}
          variant={"filled"}
          size={"small"}
        />
      </div>
      <h6 className={styles.title}>{data.title}</h6>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
      <br />
      <p className={styles.date}> {new Date(data.date).toLocaleDateString()}</p>
    </div>
  );
};

const MyHostelNotices = () => {
  const [notices, setNotices] = useState<HostelNotice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<HostelNotice | null>(
    null
  );
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
        const fetchedNotices: HostelNotice[] = await fetchHostelNotices();
        if (isMounted) setNotices(fetchedNotices);
      } catch (error: unknown) {
        if (error instanceof Error) {
          message.error(`Error fetching hostel notices: ${error.message}`);
        } else {
          message.error(
            "Failed to fetch hostel notices due to an unknown error."
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

  const handleReadClick = (notice: HostelNotice) => {
    setSelectedNotice(notice);
    if (!notice.viewed) handleMarkAsRead(notice.id);
  };

  const handleBackClick = () => {
    setSelectedNotice(null);
  };

  const handleMarkAsRead = async (noticeId: string) => {
    try {
      await markNoticeAsRead(noticeId);
      message.success(`Notice marked as read successfully.`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(`${error}`);
      }
    }
  };

  if (!notices) {
    return (
      <div className={styles.myHostelNoticesContainer}>
        <NotFound
          title={"Notice Unavailable"}
          message={"The warden has not submitted any hostel notices yet."}
        />
      </div>
    );
  }

  return (
    <div className={styles.myHostelNoticesContainer}>
      {selectedNotice ? (
        <NoticeDetail data={selectedNotice} onBack={handleBackClick} />
      ) : (
        notices.map((notice) => (
          <div className={styles.noticeCard} key={notice.id}>
            <div className={styles.cardHeader}>
              <h6 className={styles.cardTitle}>{notice.title}</h6>
              {notice.viewed === false && (
                <div className={styles.alert}>New</div>
              )}
            </div>
            <div className={styles.cardBody}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${notice.body.slice(
                    0,
                    notice.body.length / 3
                  )}......`,
                }}
              />
              <br />
              <p className={styles.date}>
                {new Date(notice.date).toLocaleDateString()}
              </p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.buttons}>
                <CustomButton
                  title={notice.viewed ? "Opened" : "Mark As Read"}
                  variant={"outline"}
                  size={"medium"}
                  disabled={notice.viewed}
                  onClick={() => {
                    handleMarkAsRead(notice.id);
                  }}
                />
                <CustomButton
                  onClick={() => handleReadClick(notice)}
                  title={"Read"}
                  variant={"filled"}
                  size={"medium"}
                />
              </div>
            </div>
          </div>
        ))
      )}
      <Loader hide={!loading} />
    </div>
  );
};

export default MyHostelNotices;
