import "./main.scss";
import Home from "./pages/Home/Home";
import { arrowRight, logoutIcon } from "./assets";
import NavBar from "./components/Navbar/Navbar";
import { navItems, navItemsAsGuest } from "./content";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Router from "./Router";
import { useEffect, useState } from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import { observeAuthState, signOutUser } from "./services/firebase";
import { User } from "firebase/auth";
import { message } from "antd";

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
    onClick: async () => {
      try {
        await signOutUser();
        message.success("Successfully logged out!");
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred during logout. Please try again later.";
        message.error(`Signup failed: ${errorMessage}`);
      } finally {
      }
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
                navItemsAsGuest={navItemsAsGuest}
                authUser={authUser ?? null}
                profileMenu={menuItem}
                onResgister={() => {
                  toggleRegisterModal();
                }}
                onSignIn={() => {
                  toggleSignInModal();
                }}
              />
              <Router
                authUser={authUser ?? null}
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
