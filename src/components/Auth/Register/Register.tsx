import React, { useState } from "react";
import styles from "../Auth.module.scss";
import { Button, Modal } from "antd";
import CustomInput from "../../CustomInput/CustomInput";
import { RegisterProps } from "./RegisterProps";

const Register: React.FC<RegisterProps> = ({
  isSignInModalOpen,
  showRegisterModal,
  showSignInModal,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string>("");

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

    return newErrors;
  };

  const onRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors("");
      // TODO:  Handle registration logic here
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

        <form onSubmit={onRegister}>
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
            type="password"
            name="password"
            value={password}
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <CustomInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            placeholder="Enter your confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className={styles.errorMessage}>{errors}</div>
          <div className={styles.buttons}>
            <Button type="primary" htmlType="submit">
              Register
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
