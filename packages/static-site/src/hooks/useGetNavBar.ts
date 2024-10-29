import type { NavTreeProps } from "@asu/component-header/dist/main.d.ts";
import { useNavigate, useLocation } from "react-router-dom";
const basePath = import.meta.env.VITE_APP_BASE_PATH;

const pathJoin = (...parts:string[]): string => {
  const sep = "/";
  return parts.join(sep).replace(new RegExp(sep+'{1,}', 'g'), sep)
};
export const routerUrl = {
  HOME: basePath,
  DATALAYERGUIDE: pathJoin(basePath, "gtm-datalayer", "index.html"),
  HEADERGUIDE: pathJoin(basePath, "asuheader", "index.html"),
};

function useGetNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navTree:NavTreeProps[] = [
    {
      id: 0,
      onClick: () => navigate(routerUrl.HOME),
      text: "Home",
      type: "icon-home",
      selected: location.pathname === routerUrl.HOME,
    },
    {
      id: 1,
      onClick: () => navigate(routerUrl.HEADERGUIDE),
      text: "ASU Header",
      selected: location.pathname === routerUrl.HEADERGUIDE,
    },
    {
      id: 2,
      onClick: () => navigate(routerUrl.DATALAYERGUIDE),
      text: "GTM and data layer guide",
      selected: location.pathname === routerUrl.DATALAYERGUIDE,
    },
  ];

  return navTree;
}

export default useGetNavBar;
