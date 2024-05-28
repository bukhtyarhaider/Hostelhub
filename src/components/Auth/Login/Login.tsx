import React from "react";
import styles from "../Auth.module.scss";
import { Modal } from "antd";
import CustomInput from "../../CustomInput/CustomInput";
import { Link } from "react-router-dom";

interface LoginProps {
  isSignInModalOpen: boolean;
  showSignInModal: () => void;
  showRegisterModal: () => void;
}

/**
 * Login component renders a login modal.
 *
 * @param {LoginProps} props - The props object.
 * @returns {JSX.Element} The rendered Login component.
 */
const Login: React.FC<LoginProps> = ({
  isSignInModalOpen,
  showSignInModal,
  showRegisterModal,
}) => {
  return (
    <Modal
      title=""
      open={isSignInModalOpen}
      onOk={showSignInModal}
      onCancel={showSignInModal}
      centered
      footer={null}
      closable={false}
    >
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Sign in to your account</h2>
        <p className={styles.description}>
          Welcome back! Please enter your details.
        </p>

        <form>
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

          <div className={styles.checks}>
            <div className={styles.remember}>
              <label>
                <input type="checkbox" />
                Remember for 30 days
              </label>
            </div>
            <div className={styles.forgot}>
              <Link to={"/"}>Forgot password</Link>
            </div>
          </div>

          <CustomInput
            type="submit"
            name="submit"
            value="Sign in"
            onSubmit={() => {}}
          />

          <CustomInput
            type="submit"
            name="cancel"
            value="Cancel"
            onClick={(e) => {
              e.preventDefault();
              showSignInModal();
            }}
          />

          <div className={styles.swithWrapper}>
            <p>Don’t have an account?</p>
            <div
              className={styles.button}
              onClick={() => {
                showSignInModal();
                showRegisterModal();
              }}
            >
              Register
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
