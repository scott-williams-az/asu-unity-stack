// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiError, RfiLabel } from "./controls-helpers";

const RfiRadioGroup = ({ name, id, options, label, onBlur }) => {
  return (
    <Field as="div" name={name}>
      {({
        field,
        // eslint-disable-next-line no-unused-vars
        form: { touched, errors },
        meta,
      }) => {
        const isError = meta.error;
        return (
          <fieldset>
            <RfiLabel label={label} name={name} id={id} />
            <RfiError isError={isError} metaError={meta.error} />
            {options.map(option => (
              <div
                className="form-check"
                key={option.key ? option.key : option.value}
              >
                <Field
                  type="radio"
                  id={name + option.key}
                  {...field}
                  value={option.value}
                  onChange={e => {
                    field.onChange?.(e);
                    onBlur?.(e);
                  }}
                />{" "}
                <label htmlFor={name + option.key} className="form-check-label">
                  {option.text}
                </label>
              </div>
            ))}
          </fieldset>
        );
      }}
    </Field>
  );
};

RfiRadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBlur: PropTypes.func,
};

export { RfiRadioGroup };
