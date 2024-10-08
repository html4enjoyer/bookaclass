import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Lessons from "./Lessons";
import App from "./App";
import Contact from "./Contact";
import Home from "./Home";
import Teachers from "./Teachers";

const router = createBrowserRouter([
  {
    element: (
      
    <App />
    ),
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "lessons",
        element: (
          <Lessons />
        ),
      },
      {
        path: "contact",
        element: (
          <Contact />
        ),
      },
      {
        path: "teachers",
        element: (
          <Teachers />
        ),
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>

  <RouterProvider router={router} />
  </StrictMode>
);