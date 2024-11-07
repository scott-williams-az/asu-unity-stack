// @ts-check
import { trackGAEvent } from "../services/googleAnalytics";

export function dataLayerRender(gaObject, useExternal) {
  if (useExternal) {
    return {
      "data-ga": gaObject.text,
      "data-ga-name": gaObject.name,
      "data-ga-event": gaObject.event,
      "data-ga-action": gaObject.action,
      "data-ga-type": gaObject.type,
      "data-ga-region": gaObject.region,
      "data-ga-section": gaObject.section,
      "data-ga-component": "",
    }
  } else {
    return {
      onClick: (e) => {
        trackGAEvent(gaObject);
      },
    };
  }
}
