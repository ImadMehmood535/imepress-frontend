import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
