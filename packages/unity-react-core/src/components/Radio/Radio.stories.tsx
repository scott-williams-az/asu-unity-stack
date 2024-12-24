import React from "react";
import { Radio } from "./Radio";

export default {
  title: "Components/Form/Radio",
  component: Radio,
};

const defaultProps = {
  title: "Header",
  children: "Content",
}

const radioTemplate = args => <Radio {...args} />;

export const Overview = {
  render: radioTemplate.bind({}),
  name: "Story 1",
  args: {
    ...defaultProps,
  }
};

export const Story2 = {
  render: args => {
    return <div>
        <Radio {...args} />
      </div>
  },
  args: {
    ...defaultProps,
    children: <p>paragraph</p>
  }
};
