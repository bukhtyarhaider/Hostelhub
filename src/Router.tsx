import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import HostelDetails from "./pages/HostelDetails/HostelDetails";

const Router: React.FC = ({ authUser }) => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/hostel-details/:id"
          index
          element={<HostelDetails authUser={authUser ?? undefined} />}
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default Router;
