import React, { useEffect, useLayoutEffect } from "react";

import { Select } from "./Select";

export default {
  title: "Components/Form/Select",
  component: Select,
  decorators: [
    (storyFn, context) => {
      useEffect(() => {
        // document.querySelector("body")?.classList.add("bg-gray-2");
        setTimeout(() => {
          context.globals.shouldReload = true;
        }, 100);
        return () => {
          // document.querySelector("body")?.classList.remove("bg-gray-2");
          if (context.globals.shouldReload) {
            window.location.reload();
          }
        };
      }, []);
      return storyFn();
    },
  ],
};

const defaultProps = {
  title: "Header",
  children: "Content",
};

const selectTemplate = args => <Select {...args} />;

export const Overview = {
  render: selectTemplate.bind({}),
  name: "Story 1",
  args: {
    ...defaultProps,
  },
};

export const Story2 = {
  render: args => {
    return (
      <div>
        <Select {...args} />
      </div>
    );
  },
  args: {
    ...defaultProps,
    children: <p>paragraph</p>,
  },
};
