import React, { useState } from "react";
import { Steps, message } from "antd";
import styles from "./HostelApplication.module.scss";
import BookingDetails from "./BookingDetails/BookingDetails";
import CustomButton from "../../components/CustomButton/CustomButton";
import Documents from "./Documents/Documents";
import ReviewConfirm from "./ReviewConfirm/ReviewConfirm";
import ApplicationSent from "./ApplicationSent/ApplicationSent";

const { Step } = Steps;

const initialFormData = {
  fullName: "John Doe",
  email: "LcH0O@example.com",
  phoneNumber: "1234567890",
  hostelName: "Downing Hostel",
  hostelType: "Student Accommodation",
  hostelId: "142",
  roomNumber: "DH-04",
  roomType: "Single Room",
  hostelRent: "1000",
  stayDuration: "3-months",
  startDate: null,
  endDate: null,
  cnicFront: null,
  cnicBack: null,
  studentId: null,
};

const HostelApplication: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    {
      title: "Booking Details",
      content: (
        <BookingDetails
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      ),
    },
    {
      title: "Documents",
      content: (
        <Documents
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      title: "Review & Confirm",
      content: <ReviewConfirm formData={formData} />,
    },
  ];

  const validateForm = () => {
    let tempErrors: any = {};

    if (current === 0) {
      if (!formData.startDate) tempErrors.startDate = "Start date is required";
      if (!formData.endDate) tempErrors.endDate = "End date is required";
    } else if (current === 1) {
      if (!formData.cnicFront)
        tempErrors.cnicFront = "CNIC front side is required";
      if (!formData.cnicBack)
        tempErrors.cnicBack = "CNIC back side is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const next = () => {
    if (validateForm()) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    message.success("Application Submitted!");
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <div className={styles.hostelApplicationContainer}>
          <h2 className={styles.heading}>Hostel Application</h2>

          <div className={styles.stepper}>
            <Steps current={current} progressDot>
              {steps.map((item, index) => (
                <Step key={index} title={item.title} />
              ))}
            </Steps>
          </div>

          <div className={styles.stepsContent}>{steps[current].content}</div>

          <div className={styles.stepsAction}>
            {current > 0 && (
              <CustomButton
                title="Previous"
                variant="filled"
                size="medium"
                extraWidth
                onClick={() => prev()}
              />
            )}
            {current === steps.length - 1 && (
              <CustomButton
                title="Submit"
                variant="filled"
                size="medium"
                extraWidth
                onClick={() => handleSubmit()}
              />
            )}
            {current < steps.length - 1 && (
              <CustomButton
                title="Next"
                variant="outline"
                size="medium"
                extraWidth
                onClick={() => next()}
              />
            )}
          </div>
        </div>
      ) : (
        <ApplicationSent />
      )}
    </>
  );
};

export default HostelApplication;
