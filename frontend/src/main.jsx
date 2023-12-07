// App.js
import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CardDetail from "./pages/CardDetail";
import HomeContent from "./pages/HomeContent";
import App from "./App";
import PutPages from "./pages/PutPages";
import Menu from "./pages/Menu";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeContent />,
        loader: () => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/offres`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/offres/:id",
        element: <CardDetail />,
        loader: ({ params }) => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/offres/${params.id}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/putUser/:id",
        element: <PutPages />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
