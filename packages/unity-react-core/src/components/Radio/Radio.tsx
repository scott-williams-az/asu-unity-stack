import React, { ReactElement } from "react";

export enum CustomPropType {
  GR = "Graduate",
  UG = "Undergraduate",
}

export interface RadioProps {
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

export const Radio: React.FC<RadioProps> = ({
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
