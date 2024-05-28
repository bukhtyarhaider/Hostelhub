import { AuthUser } from "./components/Navbar/NavbarProps";
import "./main.scss";
import Home from "./pages/Home/Home";
import { arrowRight, logoutIcon } from "./assets";
import NavBar from "./components/Navbar/Navbar";
import { navItems } from "./content";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

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
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const showSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const showRegisterModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <div className="app-container">
      <NavBar
        navItems={navItems}
        authUser={undefined}
        profileMenu={menuItem}
        onResgister={() => {
          showRegisterModal();
        }}
        onSignIn={() => {
          showSignInModal();
        }}
      />
      <Home />
      <Footer />
      <Login
        isSignInModalOpen={isSignInModalOpen}
        showSignInModal={showSignInModal}
        showRegisterModal={showRegisterModal}
      />
      <Register
        isSignInModalOpen={isRegisterModalOpen}
        showRegisterModal={showRegisterModal}
        showSignInModal={showSignInModal}
      />
    </div>
  );
}

export default App;
