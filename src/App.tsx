import { AuthUser } from "./components/Navbar/NavbarProps";

import "./main.scss";
import Home from "./pages/Home/Home";
import { arrowRight, logoutIcon } from "./assets";
import NavBar from "./components/Navbar/Navbar";
import { navItems } from "./content";
import Footer from "./components/Footer/Footer";

const menuItem = [
  {
    to: "/profile",
    label: "Profile",
    iconSrc: arrowRight,
    onClick: () => {
      console.log("Profile");
    },
  },
  {
    to: "/login",
    label: "Logout",
    iconSrc: logoutIcon,
    onClick: () => {
      console.log("logout");
    },
  },
];

const authUser: AuthUser = {
  name: "user",
  image: "https://picsum.photos/200",
};

function App() {
  return (
    <div className="app-container">
      <NavBar
        navItems={navItems}
        authUser={authUser ?? undefined}
        profileMenu={menuItem}
        onResgister={() => {}}
        onSignIn={() => {}}
      />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
