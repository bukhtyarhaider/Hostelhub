import { Link, useNavigate } from "react-router-dom";
import { successIcon } from "../../../assets";
import CustomButton from "../../../components/CustomButton/CustomButton";
import styles from "./ApplicationSent.module.scss";

const ApplicationSent = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.applicationSentContainer}>
      <div className={styles.content}>
        <img src={successIcon} alt="Success" className={styles.icon} />
        <h2>Congratulations! Application Sent</h2>
        <p>
          We’ll inform you as soon as any decision comes against this
          application.
          <br />
          You can check{" "}
          <Link to="/my-requests" className={styles.link}>
            “My Requests”
          </Link>{" "}
          for more details
        </p>
        <CustomButton
          title={"Go Back To Search"}
          variant={"filled"}
          size={"medium"}
          onClick={() => {
            navigate("/search");
          }}
        />
      </div>
    </div>
  );
};

export default ApplicationSent;
