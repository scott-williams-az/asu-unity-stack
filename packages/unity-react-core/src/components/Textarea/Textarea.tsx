import React, { ReactElement } from "react";

export enum CustomPropType {
  GR = "Graduate",
  UG = "Undergraduate",
}

export interface TextareaProps {
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

export const Textarea: React.FC<TextareaProps> = ({
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
