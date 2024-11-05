import { Page } from "vite-plugin-virtual-mpa";

export enum PageName {
  HOME = "HOME",
  HEADERGUIDE = "HEADERGUIDE",
  DATALAYERGUIDE = "DATALAYERGUIDE",
}

export const PagePaths: Record<PageName, string> = {
  [PageName.HOME]: "/",
  [PageName.HEADERGUIDE]: "/asuheader/",
  [PageName.DATALAYERGUIDE]: "/gtm-datalayer/",
} as const;

export const configRoutes: Page[] = [
  {
    name: "home",
    filename: "index.html",
    template: "src/index.html",
    data: {
      title: "Unity Design Kit",
      componentName: PageName.HOME,
      path: PagePaths[PageName.HOME],
      navLabel: "Home",
      type: "icon-home",
    },
  },
  {
    name: "asuheader",
    filename: "asuheader/index.html",
    template: "src/template/index.html",
    data: {
      componentName: PageName.HEADERGUIDE,
      path: PagePaths[PageName.HEADERGUIDE],
      title: "ASU Header Guide",
      navLabel: "ASU Header",
    },
  },
  {
    name: "gtm-datalayer",
    filename: "gtm-datalayer/index.html",
    template: "src/template/index.html",
    data: {
      componentName: PageName.DATALAYERGUIDE,
      path: PagePaths[PageName.DATALAYERGUIDE],
      title: "Google Tag Manager (GTM) and data layer",
      navLabel: "GTM and data layer guide",
    },
  },
];
