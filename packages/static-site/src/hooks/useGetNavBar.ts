import { NavTreeProps } from "@asu/component-header";
import { useNavigate, useLocation } from "react-router-dom";
import { routerUrl } from "./useRoutes";



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
