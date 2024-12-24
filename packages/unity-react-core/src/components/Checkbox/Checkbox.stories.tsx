import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
};

const defaultProps = {
  title: "Header",
  children: "Content",
}

const checkboxTemplate = args => <Checkbox {...args} />;

export const Overview = {
  render: checkboxTemplate.bind({}),
  name: "Story 1",
  args: {
    ...defaultProps,
  }
};

export const Story2 = {
  render: args => {
    return <div>
        <Checkbox {...args} />
      </div>
  },
  args: {
    ...defaultProps,
    children: <p>paragraph</p>
  }
};
