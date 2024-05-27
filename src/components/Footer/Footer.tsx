import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { socialIcons } from "../../content";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <img src={logo} />
          </div>
        </div>
        <div className={styles.socialIconsContainer}>
          {socialIcons.map((social, index) => (
            <div key={index} className={styles.iconWrapper}>
              <Link to={social.url}>
                <img src={social.icon} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 hostel.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
