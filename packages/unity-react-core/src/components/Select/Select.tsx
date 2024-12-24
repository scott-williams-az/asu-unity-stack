import React, { ReactElement, useEffect, useLayoutEffect } from "react";

export enum CustomPropType {
  GR = "Graduate",
  UG = "Undergraduate",
}

export interface SelectProps {
  /**
   * Title or heading.
   */
  title?: string;
  /**
   * Custom prop.
   */
  customProp?: CustomPropType;
  /**
   * The element where we will position the dialog beside.
   */
  children: ReactElement | ReactElement[] | string;
}

export const Select: React.FC<SelectProps> = ({
  title = "Default Heading",
  customProp = CustomPropType.GR,
  children,
}) => {

  return (
    <div>
      {title}
      {customProp}
      {children}
    </div>
  );
};
