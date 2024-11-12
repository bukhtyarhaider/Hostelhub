import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import HostelDetails from "./pages/HostelDetails/HostelDetails";
import HostelApplication from "./pages/HostelApplication/HostelApplication";
import MyHostel from "./pages/MyHostel/MyHostel";
import MyRequests from "./pages/MyRequests/MyRequests";
import Profile from "./pages/Profile/Profile";
import { User } from "firebase/auth";

interface RouterProps {
  authUser?: User | null;
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
              authUser={authUser ?? null}
              toggleRegisterModal={toggleRegisterModal}
              toggleSignInModal={toggleSignInModal}
            />
          }
        />
        <Route
          path="/hostel-details"
          element={<HostelDetails authUser={authUser ?? null} />}
        />
        <Route path="/hostel-application" element={<HostelApplication />} />

        <Route path="/my-hostel" element={<MyHostel />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default Router;
