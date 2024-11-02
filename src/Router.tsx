import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import HostelDetails from "./pages/HostelDetails/HostelDetails";
import { User } from "./types/types";
import HostelApplication from "./pages/HostelApplication/HostelApplication";
import MyHostel from "./pages/MyHostel/MyHostel";
import MyRequests from "./pages/MyRequests/MyRequests";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";

interface RouterProps {
  authUser?: User;
  toggleRegisterModal: () => void;
  toggleSignInModal: () => void;
}

const Router: React.FC<RouterProps> = ({
  authUser,
  toggleRegisterModal,
  toggleSignInModal,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Home
              authUser={authUser ?? undefined}
              toggleRegisterModal={toggleRegisterModal}
              toggleSignInModal={toggleSignInModal}
            />
          }
        />
        <Route
          path="/hostel-details/:id"
          element={<HostelDetails authUser={authUser ?? undefined} />}
        />
        <Route
          path="/hostel-application"
          element={<HostelApplication authUser={authUser ?? undefined} />}
        />

        <Route path="/my-hostel" element={<MyHostel />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default Router;
