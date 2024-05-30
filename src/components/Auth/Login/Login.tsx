import React, { useState } from "react";
import styles from "../Auth.module.scss";
import { Modal, Button } from "antd";
import CustomInput from "../../CustomInput/CustomInput";
import { Link } from "react-router-dom";
import { LoginProps } from "./LoginProps";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // onSignIn Handle sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Modal
      open={isSignInModalOpen}
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

        <form onSubmit={onSignIn}>
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

          <div className={styles.buttons}>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
            <Button onClick={showSignInModal}>Cancel</Button>
          </div>

          <div className={styles.switchWrapper}>
            <p>Don’t have an account?</p>
            <Button
              type="link"
              onClick={() => {
                showSignInModal();
                showRegisterModal();
              }}
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
