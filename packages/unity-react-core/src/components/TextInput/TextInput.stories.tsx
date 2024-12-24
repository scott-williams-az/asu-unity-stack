import React from "react";

import { TextInput, propDefaults } from "./TextInput";

export default {
  title: "Components/Form/Text Input",
  component: TextInput,
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    // displaySize: { control: { type: "radio" } },
  },
  args: {
    ...propDefaults,
    id: "input-id",
    label: "Input Label",
    placeholder: "Input Placeholder",
  },
  decorators: [
    Story => (
      <form className="uds-form">
        <Story />
      </form>
    ),
  ],
};

const textInputTemplate = args => <TextInput {...args} />;

export const BasicInput = {
  render: textInputTemplate.bind({}),
};

export const RequiredInput = {
  render: textInputTemplate.bind({}),
  args: {
    required: true,
  },
};
