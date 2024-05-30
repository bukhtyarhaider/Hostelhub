import { AuthUser } from "./components/Navbar/NavbarProps";

import "./main.scss";
import Home from "./pages/Home/Home";
import { arrowRight, logoutIcon } from "./assets";
import NavBar from "./components/Navbar/Navbar";
import { navItems } from "./content";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Router from "./Router";
import { useEffect } from "react";

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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
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
                onResgister={() => {}}
                onSignIn={() => {}}
              />
              <Router authUser={authUser} />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
