import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { routerUrl } from "./hooks/useGetNavBar.ts";
import { HeaderGuide } from "./pages/HeaderGuide.tsx";
import { DataLayerGuide } from "./pages/DataLayerGuide.tsx";


const router = createBrowserRouter([
  {
    path: `${routerUrl.HOME}`,
    element: <App />,
    children: [
      {
        path: routerUrl.HOME,
        element: <Home />,
      },
      {
        path: routerUrl.HEADERGUIDE,
        element: <HeaderGuide/>,
      },
      {
        path: routerUrl.DATALAYERGUIDE,
        element: <DataLayerGuide/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
