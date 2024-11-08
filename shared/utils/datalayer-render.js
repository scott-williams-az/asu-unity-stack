// @ts-check
import { trackGAEvent } from "../services/googleAnalytics";

const convertToDataAttr = d => ({
  "data-ga": d.text,
  "data-ga-name": d.name,
  "data-ga-event": d.event,
  "data-ga-action": d.action,
  "data-ga-type": d.type,
  "data-ga-region": d.region,
  "data-ga-section": d.section,
  "data-ga-component": d.component,
});

const convertToClickHandler = d => ({ onClick: e => trackGAEvent(d) });

export function dataLayerRender(gaObject, useExternal) {
  return useExternal
    ? convertToDataAttr(gaObject)
    : convertToClickHandler(gaObject);
}
