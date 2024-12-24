import React, { PropsWithChildren } from "react";

import { Button } from "../Button/Button";

export type FormProps = PropsWithChildren<unknown>;

export const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <form className="uds-form">
      {children}
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
    </form>
  );
};
