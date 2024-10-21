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
import { observeAuthState } from "./services/firebase";
import { User } from "firebase/auth";

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

function App() {
  const { pathname } = useLocation();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const unsubscribe = observeAuthState((user) => {
      setAuthUser(user);
    });

    return () => unsubscribe();
  }, []);

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
                authUser={authUser}
                profileMenu={menuItem}
                onResgister={() => {
                  toggleRegisterModal();
                }}
                onSignIn={() => {
                  toggleSignInModal();
                }}
              />
              <Router
                authUser={authUser}
                toggleRegisterModal={toggleRegisterModal}
                toggleSignInModal={toggleSignInModal}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <Home
              authUser={authUser}
              toggleRegisterModal={toggleRegisterModal}
              toggleSignInModal={toggleSignInModal}
            />
          }
        />
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
