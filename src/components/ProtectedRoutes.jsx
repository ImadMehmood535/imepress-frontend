import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../store/user";

const ProtectedRoutes = () => {
  const { user } = useUserStore();

  return !user?.authorized ? <Navigate to="/log-in" replace /> : <Outlet />;
};

export default ProtectedRoutes;
