import React from "react";
import { Textarea } from "./Textarea";

export default {
  title: "Components/Form/Textarea",
  component: Textarea,
};

const defaultProps = {
  title: "Header",
  children: "Content",
}

const textareaTemplate = args => <Textarea {...args} />;

export const Overview = {
  render: textareaTemplate.bind({}),
  name: "Story 1",
  args: {
    ...defaultProps,
  }
};
