import { DatePicker, message, Select } from "antd";
import styles from "./Profile.module.scss";
import CustomInput from "../../components/CustomInput/CustomInput";
import moment from "moment";
import { useEffect, useState } from "react";
import { cameraIcon } from "../../assets";
import {
  _updateProfile,
  getProfile,
  observeAuthState,
  uploadImage,
} from "../../services/firebase";
import { UserProfile } from "../../types/types";
import { Loader } from "../../components/Loader/Loader";

const { Option } = Select;

const Profile = () => {
  const [userData, setUserData] = useState<UserProfile | null>();
  const [errors, setErrors] = useState<any>({});
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        setIsLoading(true);
        const data = await getProfile();
        if (isMounted) {
          setUserData(data);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          message.error(`Failed to fetch profile data: ${error.message}`);
        } else {
          message.error(
            "Failed to fetch profile data due to an unknown error."
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    return () => {
      isMounted = false;
      unsubscribe(); // Clean up the subscription
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));

    setUserData((prevData) => ({
      ...prevData!,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: "",
    }));

    setUserData((prevData) => ({
      ...prevData!,
      [name]: value,
    }));
  };

  const handleDateChange = (name: string, date: any, dateString: string) => {
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: "",
    }));

    setUserData((prevData) => ({
      ...prevData!,
      [name]: dateString,
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (!userData?.fullName) {
      newErrors.fullName = "Full Name is required";
    }

    if (!userData?.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData?.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!userData?.phoneNumber) {
      newErrors.phoneNumber = "Contact Number is required";
    } else if (!/^\+?\d{10,13}$/.test(userData?.phoneNumber)) {
      newErrors.phoneNumber = "Contact Number is invalid";
    }

    if (!userData?.currentAddress) {
      newErrors.currentAddress = "Current Address is required";
    }

    if (!userData?.currentState) {
      newErrors.currentState = "Current State is required";
    }

    return newErrors;
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
      try {
        let profileImageUrl = "";

        if (profileImage) {
          profileImageUrl = await uploadImage(
            profileImage,
            `profilePictures/${userData?.email}`
          );
        } else {
          profileImageUrl = userData?.photoURL ?? "";
        }
        if (userData) {
          await _updateProfile({
            fullName: userData?.fullName,
            phoneNumber: userData?.phoneNumber,
            address: userData?.currentAddress,
            state: userData?.currentState,
            status: userData?.currentStatus,
            photoURL: profileImageUrl,
            dateOfBirth: userData?.dateOfBirth,
          });

          message.success("Profile Updatted!");
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          message.error(`Failed to update profile: ${error.message}`);
        } else {
          message.error("Failed to update profile due to an unknown error.");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.heading}>User Profile</h2>

      <div className={styles.profilePictureContainer}>
        <img
          src={
            profileImage
              ? URL.createObjectURL(profileImage)
              : userData?.photoURL
          }
          className={styles.profilePicture}
        />
        <div className={styles.cameraIcon}>
          <label htmlFor="profileImage">
            <img
              src={cameraIcon}
              alt="Camera Icon"
              style={{ cursor: "pointer" }}
            />
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onImageChange}
          />
        </div>
      </div>

      <h3 className={styles.subHeading}>User Information</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label>Full Name</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="fullName"
              placeholder="Full Name"
              label=""
              value={userData?.fullName ?? ""}
              onChange={handleChange}
            />
            {errors.fullName && (
              <div className={styles.error}>{errors.fullName}</div>
            )}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Date of Birth</label>
          <div className={styles.input}>
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                const dateStr = Array.isArray(dateString)
                  ? dateString[0]
                  : dateString;
                handleDateChange("dateOfBirth", date, dateStr);
              }}
              placeholder="Select Date of Birth"
              value={
                userData?.dateOfBirth
                  ? moment(userData?.dateOfBirth, "DD-MM-YYYY")
                  : null
              }
              format="DD-MM-YYYY"
            />
            {errors.dateOfBirth && (
              <div className={styles.error}>{errors.dateOfBirth}</div>
            )}
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
              disabled={true}
              value={userData?.email ?? ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Current Status</label>
          <div className={styles.input}>
            <Select
              defaultValue={"Student"}
              value={userData?.currentStatus}
              style={{ width: "100%" }}
              onChange={(value) => handleSelectChange("currentStatus", value)}
            >
              <Option value="Student">Student</Option>
              <Option value="Employed">Employed</Option>
              <Option value="Unemployed">Unemployed</Option>
            </Select>
          </div>
          {errors.currentStatus && (
            <div className={styles.error}>{errors.currentStatus}</div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label>Contact Number</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="phoneNumber"
              placeholder="Contact Number"
              label=""
              value={userData?.phoneNumber ?? ""}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <div className={styles.error}>{errors.phoneNumber}</div>
            )}
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
              value={userData?.currentAddress ?? ""}
              onChange={handleChange}
            />
            {errors.currentAddress && (
              <div className={styles.error}>{errors.currentAddress}</div>
            )}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Current State</label>
          <div className={styles.input}>
            <Select
              defaultValue={"Punjab"}
              value={userData?.currentState}
              style={{ width: "100%" }}
              onChange={(value) => handleSelectChange("currentState", value)}
            >
              <Option value="Punjab">Punjab</Option>
              <Option value="Sindh">Sindh</Option>
              <Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Option>
              <Option value="Balochistan">Balochistan</Option>
            </Select>
            {errors.currentState && (
              <div className={styles.error}>{errors.currentState}</div>
            )}
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
      <Loader hide={!isLoading} />
    </div>
  );
};

export default Profile;
