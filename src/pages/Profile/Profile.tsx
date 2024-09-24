import { DatePicker, Select } from "antd";
import styles from "./Profile.module.scss";
import CustomInput from "../../components/CustomInput/CustomInput";
import moment from "moment";
import { useState } from "react";
import { avatar, cameraIcon } from "../../assets";

const { Option } = Select;

const initialFormData = {
  fullName: "Naomi Doe",
  dateOfBirth: "14-11-2000",
  email: "naomi@gmail.com",
  currentStatus: "Student",
  phoneNumber: "+92 123-4567890",
  currentAddress: "123, Downing street, China town.",
  currentState: "Punjab",
};

const Profile = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (name: string, date: any, dateString: string) => {
    setFormData({ ...formData, [name]: dateString });
  };

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.heading}>User Profile</h2>

      <div className={styles.profilePictureContainer}>
        <img
          src={avatar}
          alt="Profile"
          className={styles.profilePicture}
        />
        <div className={styles.cameraIcon}>
          <img src={cameraIcon} alt="Camera Icon" />
        </div>
      </div>

      <h3 className={styles.subHeading}>User Information</h3>

      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Full Name</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="fullName"
              placeholder="Full Name"
              label=""
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Date of Birth</label>
          <div className={styles.input}>
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) =>
                handleDateChange("dateOfBirth", date, dateString)
              }
              placeholder="Select Date of Birth"
              value={formData.dateOfBirth ? moment(formData.dateOfBirth, 'DD-MM-YYYY') : null}
              format="DD-MM-YYYY"
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Email</label>
          <div className={styles.input}>
            <CustomInput
              type="email"
              name="email"
              placeholder="Email"
              label=""
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Current Status</label>
          <div className={styles.input}>
            <Select
              defaultValue={formData.currentStatus}
              style={{ width: "100%" }}
              onChange={(value) => handleSelectChange("currentStatus", value)}
            >
              <Option value="Student">Student</Option>
              <Option value="Employed">Employed</Option>
              <Option value="Unemployed">Unemployed</Option>
            </Select>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Contact Number</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="phoneNumber"
              placeholder="Contact Number"
              label=""
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Current Address</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="currentAddress"
              placeholder="Current Address"
              label=""
              value={formData.currentAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Current State</label>
          <div className={styles.input}>
            <Select
              defaultValue={formData.currentState}
              style={{ width: "100%" }}
              onChange={(value) => handleSelectChange("currentState", value)}
            >
              <Option value="Punjab">Punjab</Option>
              <Option value="Sindh">Sindh</Option>
              <Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Option>
              <Option value="Balochistan">Balochistan</Option>
            </Select>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" className={styles.backButton}>
            Back
          </button>
          <button type="submit" className={styles.saveButton}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
