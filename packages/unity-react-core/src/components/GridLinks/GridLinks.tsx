import React, { ReactElement } from "react";
import {
  gridLinksNumColumns,
  gridLinksTextColor,
  gridLinksTextColorClassName,
} from "./GridLinksConstants";

export interface GridLinksProps {
  /**
   * Grid link items.
   */
  gridLinkItems: Array<{ label: string; icon: string; href: string }>;
  /**
   * Number of columns.
   */
  numColumns?: gridLinksNumColumns;
  /**
   * Text color.
   */
  textColor?: gridLinksTextColor;
  /**
   * The element where we will position the dialog beside.
   */
  children?: ReactElement | ReactElement[] | string;
}

export const GridLinks: React.FC<GridLinksProps> = ({
  children,
  numColumns,
  textColor,
  gridLinkItems,
}) => {
  return (
    <>
      <div
        className={[
          "uds-grid-links",
          numColumns,
          gridLinksTextColorClassName[textColor],
        ].join(" ")}
      >
        {gridLinkItems &&
          gridLinkItems.map((item, index) => (
            <a key={index} href={item.href}>
              <span className={`fa fa-fw ${item.icon}`}></span>
              {item.label}
            </a>
          ))}
      </div>
      <div>{children}</div>
    </>
  );
};
