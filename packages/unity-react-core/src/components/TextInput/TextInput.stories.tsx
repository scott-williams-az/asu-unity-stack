import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { TextInput, propDefaults } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  tags: ["form", "input"],
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
export default meta;

type Story = StoryObj<typeof TextInput>;

export const BasicInput: Story = {
  args: {
    required: false,
  },
  tags: [""],
};

export const RequiredInput: Story = {
  args: {
    required: true,
  },
};
