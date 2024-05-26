import { useState } from "react";
import { Drawer, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.scss";
import { logo } from "../../assets";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { NavBarProps } from "./NavbarProps";

const NavBar: React.FC<NavBarProps> = ({ navItems, authUser }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <Link to="/" onClick={() => setSelectedIndex(-1)}>
            <img src={logo} />
          </Link>
        </div>
      </div>

      {authUser && (
        <div className={styles.menuContainer}>
          <ul>
            {navItems?.map((label, index) => (
              <li key={label.name} onClick={() => setSelectedIndex(index)}>
                <Link
                  to={label.url}
                  className={selectedIndex == index ? styles.active : ""}
                >
                  {label.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {authUser ? (
        <div className={styles.profile}>
          <div className={styles.profilePicWrapper}>
            <img src={authUser.image || "https://picsum.photos/200"} />
          </div>

          <Dropdown
            menu={{
              items: authUser.menu,
              selectable: true,
            }}
          >
            <div className={styles.nameWrapper}>
              <p>{authUser.name}</p>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      ) : (
        <div className={styles.buttons}>
          <CustomButton title="Sign In" variant="outline" size="medium" />
          <CustomButton title="Register" variant="outline" size="medium" />
        </div>
      )}

      <div className={styles.menuIcon} onClick={toggleDrawer}>
        <span className={styles.menuBar1}></span>
        <span className={styles.menuBar2}></span>
        <span className={styles.menuBar3}></span>
      </div>

      <Drawer
        title={<img src={logo} />}
        closable={true}
        onClose={toggleDrawer}
        open={openDrawer}
        placement="top"
      >
        {authUser ? (
          <div className={styles.mobileView}>
            <div className={styles.profileMobileView}>
              <div className={styles.profilePicWrapper}>
                <img src="https://picsum.photos/200" />
              </div>

              <Dropdown
                menu={{
                  items: authUser.menu,
                  selectable: true,
                }}
              >
                <div className={styles.nameWrapper}>
                  <p>{authUser.name}</p>
                  <DownOutlined />
                </div>
              </Dropdown>
            </div>
            <div className={styles.menuContainerMobile}>
              <ul>
                {navItems?.map((label, index) => (
                  <Link
                    key={label.name}
                    to={label.url}
                    className={selectedIndex == index ? styles.active : ""}
                  >
                    <li
                      onClick={() => {
                        setSelectedIndex(index);
                        toggleDrawer();
                      }}
                    >
                      {label.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className={styles.buttons}>
            <CustomButton title="Sign In" variant="outline" size="medium" />
            <CustomButton title="Register" variant="outline" size="medium" />
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default NavBar;
