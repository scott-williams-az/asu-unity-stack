import React from "react";

import { GridLinks, GridLinksProps } from "./GridLinks";
import {
  gridLinksNumColumns,
  gridLinksTextColor,
  gridLinksBgColor,
  gridLinksBgColorClassName,
} from "./GridLinksConstants";

export default {
  title: "Components/Grid Links",
  component: GridLinks,
};

const gridLinkItems = [
  {
    label: "First-year student",
    icon: "fa-university",
    href: "https://example.com",
  },
  {
    label: "Online student",
    icon: "fa-desktop",
    href: "https://example.com",
  },
  {
    label: "Transfer student",
    icon: "fa-lightbulb",
    href: "https://example.com",
  },
  {
    label: "Veteran student",
    icon: "fa-user-graduate",
    href: "https://example.com",
  },
  {
    label: "Graduate student",
    icon: "fa-graduation-cap",
    href: "https://example.com",
  },
  {
    label: "Universal Learner",
    icon: "fa-rocket",
    href: "https://example.com",
  },
  {
    label: "International student",
    icon: "fa-globe-americas",
    href: "https://example.com",
  },
  {
    label: "Non-degree student",
    icon: "fa-users",
    href: "https://example.com",
  },
];

const defaultStoryProps = {
  numColumns: gridLinksNumColumns.TWO_COLUMNS,
  textColor: gridLinksTextColor.NONE,
  gridLinkItems: gridLinkItems,
  // children: "Content to be displayed",
  // bgColor is used story section wrapper, not in component.
  bgColor: gridLinksBgColor.NONE,
};

const defaultBgColor = gridLinksBgColor.NONE;

const gridLinksTemplate = ({ bgColor, ...args }) => (
  <section className={gridLinksBgColorClassName[bgColor]}>
    <GridLinks {...(args as GridLinksProps)} />
  </section>
);

export const Overview = {
  render: gridLinksTemplate.bind({}),
  name: "GridLinks",
  args: {
    ...defaultStoryProps,
  },
};
