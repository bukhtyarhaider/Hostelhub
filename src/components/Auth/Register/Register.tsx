import React, { useState } from "react";
import styles from "../Auth.module.scss";
import { Button, Col, message, Modal, Row } from "antd";
import CustomInput from "../../CustomInput/CustomInput";
import { RegisterProps } from "./RegisterProps";
import { signUp } from "../../../services/firebase";
import ClipLoader from "react-spinners/ClipLoader";

const Register: React.FC<RegisterProps> = ({
  isSignInModalOpen,
  showRegisterModal,
  showSignInModal,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>(""); // Added state for gender
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validate = () => {
    let newErrors = "";

    if (!name) newErrors = "Name is required";
    if (!email) {
      newErrors = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors = "Email is invalid";
    }
    if (!password) newErrors = "Password is required";
    if (!confirmPassword) {
      newErrors = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors = "Passwords do not match";
    }
    if (!gender) newErrors = "Gender is required"; // Added gender validation

    if (!phone) newErrors = "Phone is required";

    return newErrors;
  };

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors("");
      setIsLoading(true);
      try {
        await signUp({ fullName: name, email, password, phone, gender }); // Added gender to signUp
        setName("");
        setEmail("");
        setPhone("");
        setGender(""); // Reset gender
        setPassword("");
        setConfirmPassword("");

        message.success("Successfully signed up!");
        showRegisterModal();
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred during signup. Please try again later.";
        message.error(`Signup failed: ${errorMessage}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Modal
      title=""
      open={isSignInModalOpen}
      onCancel={showRegisterModal}
      centered
      footer={null}
      closable={false}
    >
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Register</h2>
        <p className={styles.description}>
          Welcome! Please enter your details to create an account.
        </p>

        <form onSubmit={isLoading ? () => {} : onRegister}>
          <CustomInput
            type="text"
            name="name"
            value={name}
            label="Full Name"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <CustomInput
            type="email"
            name="email"
            value={email}
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <CustomInput
            type="text"
            name="phone"
            value={phone}
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <div className={styles.selectContainer}>
            <label>Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Row gutter={16}>
            <Col span={12}>
              <CustomInput
                type="password"
                name="password"
                value={password}
                label="Password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
            <Col span={12}>
              <CustomInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                label="Confirm Password"
                placeholder="Enter confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Col>
          </Row>

          <div className={styles.errorMessage}>{errors}</div>
          <div className={styles.buttons}>
            <Button type="primary" htmlType="submit">
              {isLoading ? <ClipLoader size="25" color="white" /> : "Register"}
            </Button>
            <Button onClick={showRegisterModal}>Cancel</Button>
          </div>

          <div className={styles.switchWrapper}>
            <p>Already have an account?</p>
            <div
              className={styles.button}
              onClick={() => {
                showSignInModal();
                showRegisterModal();
              }}
            >
              Sign In
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Register;
