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
    if (name === "stayDuration") {
      setFormData({ ...formData, startDate: "", endDate: "", [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDateChange = (name: string, date: any, dateString: string) => {
    if (dateString) {
      const startMoment = moment(dateString);
      let endDate;

      switch (formData.stayDuration) {
        case "1-month":
          endDate = startMoment.clone().add(1, "month");
          break;
        case "3-months":
          endDate = startMoment.clone().add(3, "months");
          break;
        case "6-months":
          endDate = startMoment.clone().add(6, "months");
          break;
        default:
          return;
      }

      setFormData({
        ...formData,
        startDate: startMoment.format("YYYY-MM-DD"),
        endDate: endDate.format("YYYY-MM-DD"),
      });
    }
  };

  return (
    <div className={styles.bookingDetailsContainer}>
      <h3 className={styles.heading}>Booking Details</h3>

      <form className={styles.form}>
        {["hostelName", "hostelType", "hostelId", "roomNumber"].map((field) => (
          <div className={styles.inputContainer} key={field}>
            <label>{field.replace(/([A-Z])/g, " $1")}</label>
            <div className={styles.input}>
              <CustomInput
                type="text"
                name={field}
                placeholder={field === "hostelId" ? "142" : "Downing Hostel"}
                label=""
                disabled
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}

        <div className={styles.inputContainer}>
          <label>Room Type</label>
          <div className={styles.input}>
            <Select
              value={formData.roomType}
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
              value={formData.stayDuration}
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
                handleDateChange("startDate", date, dateString[0])
              }
              placeholder="Select Date of Your Arrival"
              value={formData.startDate ? moment(formData.startDate) : null}
              disabledDate={(current) =>
                current && current < moment().startOf("day")
              }
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
              disabled
              style={{ width: "100%" }}
              onChange={(date, dateString) =>
                handleDateChange("endDate", date, dateString[0])
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
