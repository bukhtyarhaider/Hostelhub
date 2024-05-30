import React from "react";
import styles from "../Auth.module.scss";
import { Button, Modal } from "antd";
import CustomInput from "../../CustomInput/CustomInput";

interface RegisterProps {
  isSignInModalOpen: boolean;
  showSignInModal: () => void;
  showRegisterModal: () => void;
}

const Register: React.FC<RegisterProps> = ({
  isSignInModalOpen,
  showRegisterModal,
  showSignInModal,
}) => {
  return (
    <Modal
      title=""
      open={isSignInModalOpen}
      onOk={showRegisterModal}
      onCancel={showRegisterModal}
      centered
      footer={null}
      closable={false}
    >
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Register</h2>
        <p className={styles.description}>
          Welcome back! Please enter your details.
        </p>

        <form>
          <CustomInput
            type="text"
            name="name"
            value={""}
            label="Full Name"
            placeholder="Enter your full name"
            onChange={() => {}}
          />
          <CustomInput
            type="text"
            name="email"
            value={""}
            label="Email"
            placeholder="Enter your email"
            onChange={() => {}}
          />
          <CustomInput
            type="password"
            name="password"
            value={""}
            label="Password"
            placeholder="Enter your password"
            onChange={() => {}}
          />
          <CustomInput
            type="password"
            name="password"
            value={""}
            label="Confirm Password"
            placeholder="Enter your confirm password"
            onChange={() => {}}
          />

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
