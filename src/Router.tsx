import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import HostelDetails from "./pages/HostelDetails/HostelDetails";
import { User } from "./types/types";
import MyHostel from "./pages/MyHostel/MyHostel";

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
          index
          element={<HostelDetails authUser={authUser ?? undefined} />}
        />
        <Route
          path="/my-hostel"
          element={<MyHostel />}
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default Router;
