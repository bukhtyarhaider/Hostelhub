import CustomInput from "../CustomInput/CustomInput";
import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.imgContainer}>
        <h2>Let’s Find Your Next Home</h2>
        <div className={styles.fieldsWrapper}>
          <CustomInput
            type={"text"}
            value={""}
            label={""}
            placeholder="Hostel Name"
            onChange={() => {}}
          />
          <CustomInput
            type={"text"}
            value={""}
            label={""}
            placeholder="Hostel Name"
            onChange={() => {}}
          />
          <CustomInput
            type={"text"}
            value={""}
            label={""}
            placeholder="Hostel Name"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
