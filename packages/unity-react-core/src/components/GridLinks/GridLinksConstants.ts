export enum gridLinksNumColumns {
  TWO_COLUMNS = "two-columns",
  THREE_COLUMNS = "three-columns",
  FOUR_COLUMNS = "four-columns",
}

export enum gridLinksTextColor {
  NONE = "none",
  TEXT_GOLD = "gold",
  TEXT_WHITE = "white",
}
export const gridLinksTextColorClassName = {
  [gridLinksTextColor.NONE]: "",
  [gridLinksTextColor.TEXT_GOLD]: "text-gold",
  [gridLinksTextColor.TEXT_WHITE]: "text-white",
};

export enum gridLinksBgColor {
  NONE = "none",
  BG_GRAY_1 = "gray 1",
  BG_GRAY_7 = "gray 7",
}

export const gridLinksBgColorClassName = {
  [gridLinksBgColor.NONE]: "",
  [gridLinksBgColor.BG_GRAY_1]: "bg-gray-1",
  [gridLinksBgColor.BG_GRAY_7]: "bg-gray-7",
};
