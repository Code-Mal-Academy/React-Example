import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Error from "./routes/error";
import UserPage from "./routes/user";
import NameSearchPage from "./routes/name";
import Layout from "./layout/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/user/:id",
        element: <UserPage />,
      },
      {
        path: "/search",
        element: <NameSearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
