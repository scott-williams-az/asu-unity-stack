import React, { ReactElement } from "react";

import { dataLayerRender } from "../../../../../shared/utils/datalayer-render";
import {
  gridLinksNumColumns,
  gridLinksTextColor,
  gridLinksTextColorClassName,
} from "./GridLinksConstants";

const gaDefaultObject = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
};

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
   * Use external. True adds data-ga* attributes to HTML. False (default)
   * enables internal React-based data layer handling.
   */
  useExternal?: boolean;
  /**
   * The element where we will position the dialog beside.
   */
  children?: ReactElement | ReactElement[] | string;
}

export const GridLinks: React.FC<GridLinksProps> = ({
  gridLinkItems,
  numColumns,
  textColor,
  useExternal = false,
  children,
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
          gridLinkItems.map(item => (
            <a
              key={item.label + item.href}
              href={item.href}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...dataLayerRender(
                {
                  ...gaDefaultObject,
                  text: item.label,
                  section: `grid links ${item.label}`,
                },
                useExternal
              )}
            >
              <span className={`fa fa-fw ${item.icon}`} />
              {item.label}
            </a>
          ))}
      </div>
      <div>{children}</div>
    </>
  );
};
