/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";

const Panel = props => {
  return (
    <div
      class={cx(
        props.class,
        css`
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 0.3rem;
          border: 1px solid #dee2e6;
        `
      )}
    >
      {props.children}
    </div>
  );
};

export { Panel };
