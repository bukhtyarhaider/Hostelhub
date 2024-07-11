import React from "react";
import { DatePicker, Select } from "antd";
import styles from "./BookingDetails.module.scss";
import CustomInput from "../../../components/CustomInput/CustomInput";
import moment from "moment";

const { Option } = Select;

interface BookingDetailsProps {
  formData: any;
  setFormData: (data: any) => void;
  errors: any;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({
  formData,
  setFormData,
  errors,
}) => {
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
    <div className={styles.bookingDetailsContainer}>
      <h3 className={styles.heading}>Booking Details</h3>

      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Hostel Name</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="hostelName"
              placeholder="Downing Hostel"
              label=""
              disabled
              value={formData.hostelName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Hostel Type</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="hostelType"
              placeholder="Student Accommodation"
              label=""
              disabled
              value={formData.hostelType}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Hostel ID</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="hostelId"
              placeholder="142"
              label=""
              disabled
              value={formData.hostelId}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Room Number</label>
          <div className={styles.input}>
            <CustomInput
              type="text"
              name="roomNumber"
              placeholder="DH-04"
              label=""
              disabled
              value={formData.roomNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Room Type</label>
          <div className={styles.input}>
            <Select
              defaultValue={formData.roomType}
              style={{ width: "100%" }}
              onChange={(value) => handleSelectChange("roomType", value)}
              disabled
            >
              <Option value="Single Room">Single Room</Option>
              <Option value="Double Room">Double Room</Option>
            </Select>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Stay Duration</label>
          <div className={styles.input}>
            <Select
              defaultValue={formData.stayDuration}
              style={{ width: "100%" }}
              onChange={(value) => handleSelectChange("stayDuration", value)}
            >
              <Option value="1-month">1-month</Option>
              <Option value="3-months">3-months</Option>
              <Option value="6-months">6-months</Option>
            </Select>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Start Date</label>
          <div className={styles.input}>
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) =>
                handleDateChange("startDate", date, dateString)
              }
              placeholder="Select Date of Your Arrival"
              value={formData.startDate ? moment(formData.startDate) : null}
            />
            {errors.startDate && (
              <div className={styles.error}>{errors.startDate}</div>
            )}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>End Date</label>
          <div className={styles.input}>
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) =>
                handleDateChange("endDate", date, dateString)
              }
              placeholder="Select Date of Your Departure"
              value={formData.endDate ? moment(formData.endDate) : null}
            />
            {errors.endDate && (
              <div className={styles.error}>{errors.endDate}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingDetails;
