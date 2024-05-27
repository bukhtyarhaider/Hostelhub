import { Link } from "react-router-dom";
import { AuthUser } from "./components/Navbar/NavbarProps";
import styles from "./components/Navbar/Navbar.module.scss";
import "./main.scss";
import Home from "./pages/Home/Home";
import { arrowRight, logoutIcon } from "./assets";
import NavBar from "./components/Navbar/Navbar";
import { navItems } from "./content";
import Footer from "./components/Footer/Footer";

const user: AuthUser = {
  name: "user",
  image: "https://picsum.photos/200",
  menu: [
    {
      label: (
        <Link to="/profile" className={styles.profileItem}>
          <p>Profile</p>
          <img src={arrowRight} onContextMenu={(e) => e.preventDefault()} />
        </Link>
      ),
      onclick: () => {},
      key: "0",
    },
    {
      label: (
        <Link to="/login" className={styles.profileItem}>
          <p>Logout</p>
          <img src={logoutIcon} onContextMenu={(e) => e.preventDefault()} />
        </Link>
      ),
      onclick: () => {},
      key: "2",
    },
  ],
};

function App() {
  return (
    <div className="app-container">
      <NavBar navItems={navItems} authUser={user} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
