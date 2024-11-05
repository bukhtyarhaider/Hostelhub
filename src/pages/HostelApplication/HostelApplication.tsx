import React, { useEffect, useState } from "react";
import { Steps, message } from "antd";
import styles from "./HostelApplication.module.scss";
import BookingDetails from "./BookingDetails/BookingDetails";
import CustomButton from "../../components/CustomButton/CustomButton";
import Documents from "./Documents/Documents";
import ReviewConfirm from "./ReviewConfirm/ReviewConfirm";
import ApplicationSent from "./ApplicationSent/ApplicationSent";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { bookAHostel } from "../../services/firebase";
import { BookingApplicationDetails } from "../../types/types";

const { Step } = Steps;

const HostelApplication: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const applicationDetails: any = location.state?.applicationDetails;

  const initialFormData: BookingApplicationDetails = {
    fullName: applicationDetails?.fullName ?? "",
    email: applicationDetails?.email ?? "",
    phoneNumber: applicationDetails?.phoneNumber ?? "",
    hostelName: applicationDetails?.hostelName ?? "",
    hostelType: applicationDetails?.hostelType ?? "",
    hostelId: applicationDetails?.hostelId ?? "",
    roomNumber: applicationDetails?.roomNumber ?? "",
    roomType: applicationDetails?.roomType ?? "",
    hostelRent: applicationDetails?.hostelRent ?? "",
    stayDuration: "3-months",
    startDate: null,
    endDate: null,
    cnicFront: null,
    cnicBack: null,
    studentId: null,
  };

  const [current, setCurrent] = useState(0);
  const [formData, setFormData] =
    useState<BookingApplicationDetails>(initialFormData);
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!applicationDetails) {
      navigate("/");
    }
  }, [applicationDetails, navigate]);

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

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await bookAHostel(formData);
      console.log(response);
      message.success("Application Submitted!");
    } catch (error) {
      console.error("Error uploading user data and images:", error);
      message.error(`Error: ${error}`);
    } finally {
      setSubmitted(true);
      setIsLoading(false);
    }

    navigate("/");
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
                onClick={() => {
                  handleSubmit();
                }}
              />
            )}
            {current < steps.length - 1 && (
              <CustomButton
                title="Next"
                variant="outline"
                size="medium"
                extraWidth
                onClick={() => {
                  next();
                }}
              />
            )}
          </div>
          {<Loader hide={!isLoading} />}
        </div>
      ) : (
        <ApplicationSent />
      )}
    </>
  );
};

export default HostelApplication;
