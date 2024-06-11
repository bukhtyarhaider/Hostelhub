import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import HostelDetails from "./pages/HostelDetails/HostelDetails";
import MyRequests from "./pages/MyRequests/MyRequests";

const Router: React.FC = ({
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
          index
          element={<HostelDetails authUser={authUser ?? undefined} />}
        />
        <Route path="/my-requests" index element={<MyRequests />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default Router;
