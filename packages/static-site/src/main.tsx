import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App.tsx";
import "~/index.css";

import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import Pages from "~/pages/index";
import { configRoutes } from "~/routes/config2";
import { Page } from "vite-plugin-virtual-mpa";
import { getBaseUrl } from "~/utils/baseUrl";

/**
 * Create duplicate routes for paths ending with "/" and "/index.html"
 * @param {Page[]} c
 * @returns {RouteObject[]}
 */
const createRoutesFromConfig = (c: Page[]) => {
  const r: RouteObject[] = [];
  c.forEach(({data}) => {
    const Component = Pages[data?.componentName];
    r.push({
      path: data?.path,
      element: <Component />,
      children: [
        {
          path: `${ data?.path }index.html`,
          index: true,
          element: <Component />,
        }

      ]
    });

  });
  console.log(r)
  return r;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: createRoutesFromConfig(configRoutes as Page[]),
  },
], { basename: getBaseUrl() });

console.log(router)


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
