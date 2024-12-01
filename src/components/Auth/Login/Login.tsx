import React, { useState } from "react";
import styles from "../Auth.module.scss";
import { Modal, Button, message } from "antd";
import CustomInput from "../../CustomInput/CustomInput";
import { Link } from "react-router-dom";
import { LoginProps } from "./LoginProps";
import { signIn } from "../../../services/firebase";
import { ClipLoader } from "react-spinners";

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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validate = () => {
    let newErrors = "";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors = "Email is invalid";

    if (password.length < 8) newErrors = "Password length is less then 8";

    return newErrors;
  };

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      setErrors("");
      setIsLoading(true);
      try {
        await signIn(email, password);
        setEmail("");
        setPassword("");
        showSignInModal();
        message.success("Successfully signed up!");
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

          <div className={styles.errorMessage}>{errors}</div>

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
              {isLoading ? <ClipLoader size="25" color="white" /> : "Sign in"}
            </Button>
            <Button onClick={showSignInModal}>Cancel</Button>
          </div>

          <div className={styles.switchWrapper}>
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
