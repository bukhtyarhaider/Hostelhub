import { AuthUser } from "./components/Navbar/NavbarProps";
import "./main.scss";
import Home from "./pages/Home/Home";
import { arrowRight, logoutIcon } from "./assets";
import NavBar from "./components/Navbar/Navbar";
import { navItems } from "./content";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Router from "./Router";
import { useEffect, useState } from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import HostelRequestsCard from "./pages/MyRequests/HostelRequestsCard/HostelRequestsCard";
import MyRequests from "./pages/MyRequests/MyRequests";

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

// TODO : Temporary AuthUser
export const authUser: AuthUser = {
  name: "user",
  image: "https://picsum.photos/200",
};

function App() {
  const { pathname } = useLocation();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const toggleRegisterModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <NavBar
                navItems={navItems}
                authUser={authUser ?? undefined}
                profileMenu={menuItem}
                onResgister={() => {
                  toggleRegisterModal();
                }}
                onSignIn={() => {
                  toggleSignInModal();
                }}
              />
              <Router
                authUser={authUser ?? undefined}
                toggleRegisterModal={toggleRegisterModal}
                toggleSignInModal={toggleSignInModal}
              />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>

      <Login
        isSignInModalOpen={isSignInModalOpen}
        showSignInModal={toggleSignInModal}
        showRegisterModal={toggleRegisterModal}
      />
      <Register
        isSignInModalOpen={isRegisterModalOpen}
        showRegisterModal={toggleRegisterModal}
        showSignInModal={toggleSignInModal}
      />
    </div>
  );
}

export default App;
