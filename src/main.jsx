import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import pages
import { App } from "./App";
// import styles
import "./styles/global/global.css";
// import route
import router from "./routes/CombineRoute";
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
