/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import React, { ComponentProps } from "react";

import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

export const displaySizes = ["sm", "md", "lg"] as const;

export interface TextInputProps extends ComponentProps<"input"> {
  id: string;
  label: string;
  /**
   * The size of the input field Defaults to "md"
   */
  displaySize?: (typeof displaySizes)[number];
}

const defaultGaEvent = {
  text: "blur",
  name: "onclick",
  event: "form",
  action: "click",
  region: "main content",
  section: "text label",
};

export const propDefaults: TextInputProps = {
  id: undefined,
  label: undefined,
  placeholder: undefined,
  displaySize: "md",
  required: false,
  disabled: false,
};

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  displaySize,
  ...rest
} = propDefaults) => {
  return (
    <div className="form-group">
      <label
        className={cx({ "uds-field-required": rest.required })}
        htmlFor={id}
      >
        {rest.required && (
          <span
            title="Required"
            className="fa fa-icon fa-circle uds-field-required"
          />
        )}
        {label}
      </label>
      <GaEventWrapper gaData={defaultGaEvent} prefix="input">
        <input
          type="text"
          className={cx("form-control", {
            "form-control-sm": displaySize === "sm",
            "form-control-lg": displaySize === "lg",
          })}
          name={id}
          id={id}
          {...rest}
        />
      </GaEventWrapper>
    </div>
  );
};
