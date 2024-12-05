import { trackGAEvent } from "@shared";
import React, { ReactElement } from "react";

import { useBaseSpecificFramework } from "./useBaseSpecificFramework";

export type GaEventType = {
  text: string;
  name: string;
  event: string;
  action: string;
  type: string;
  region: string;
  section: string;
  component?: string;
};

export interface GaEventWrapper {
  gaData: GaEventType;
  children: ReactElement;
}
// TODO: Add environment variable passed in by storybook to remove the possibilty of adding code meant for bootstrap in react
export const GaEventWrapper: React.FC<GaEventWrapper> = ({
  gaData,
  children: child,
}) => {
  const { isReact } = useBaseSpecificFramework();
  const { onClick: initialOnClick, ...props } = child.props;

  if (isReact) {
    return React.cloneElement(child, {
      ...props,
      onClick: e => {
        trackGAEvent(gaData);
        if (initialOnClick) {
          return initialOnClick(e);
        }
        return true;
      },
    });
  }
  return React.cloneElement(child, {
    ...props,
    "onClick": initialOnClick,
    "data-ga": gaData.text,
    "data-ga-name": gaData.name,
    "data-ga-event": gaData.event,
    "data-ga-action": gaData.action,
    "data-ga-type": gaData.type,
    "data-ga-region": gaData.region,
    "data-ga-section": gaData.section,
    "data-ga-component": gaData.component,
  });
};
