import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./About";
import App from "./App";
import Contact from "./Contact";
import Home from "./Home";

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
        path: "about",
        element: (
          <About />
        ),
      },
      {
        path: "contact",
        element: (
          <Contact />
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