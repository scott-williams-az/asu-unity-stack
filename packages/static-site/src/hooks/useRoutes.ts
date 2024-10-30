import { useState } from "react";

const pathJoin = (...parts:string[]): string => {
  const sep = "/";
  return parts.join(sep).replace(new RegExp(sep+'{1,}', 'g'), sep)
};

const basePath = window.location.pathname.split("/").slice(0, -1).join("/");

export const routerUrl = {
  HOME: pathJoin(basePath, "/"),
  DATALAYERGUIDE: pathJoin(basePath, "gtm-datalayer/index.html"),
  HEADERGUIDE: pathJoin(basePath, "asuheader/index.html"),
};

export const useRoutes = () => {
  const [routes] = useState(routerUrl);
  return routes;
}
