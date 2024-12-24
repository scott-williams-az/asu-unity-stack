import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { CustomPropType, Radio, RadioProps } from "./Radio";

const defaultProps: RadioProps = {
  title: "Header",
  customProp: CustomPropType.GR,
  children: "Content",
};

const renderComponent = (props:RadioProps) => {
  return render(<Radio {...props} />);
};

describe("Radio tests", () => {
  let component:RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
