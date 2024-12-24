import React from "react";
import { Form } from "./Form";

export default {
  title: "Components/Form/Form",
  component: Form,
};

const defaultProps = {
  title: "Header",
  children: "Content",
}

const formTemplate = args => <Form {...args} />;

export const Overview = {
  render: formTemplate.bind({}),
  name: "Story 1",
  args: {
    ...defaultProps,
  }
};

export const Story2 = {
  render: args => {
    return <div>
        <Form {...args} />
      </div>
  },
  args: {
    ...defaultProps,
    children: <p>paragraph</p>
  }
};
