// @ts-check
import { trackGAEvent } from "../services/googleAnalytics";

const convertToDataAttr = (d, cb) => ({
  "data-ga": d.text,
  "data-ga-name": d.name,
  "data-ga-event": d.event,
  "data-ga-action": d.action,
  "data-ga-type": d.type,
  "data-ga-region": d.region,
  "data-ga-section": d.section,
  "data-ga-component": d.component,
  "onClick": (typeof cb === "function") ? cb : undefined,
});

const convertToClickHandler = (d, cb) => ({
  onClick: e => {
    trackGAEvent(d);
    if(typeof cb === "function") {
      cb();
    }
  }
});

export function dataLayerRender(gaObject, useExternal, callback) {
  return useExternal
  ? convertToDataAttr(gaObject, callback)
  : convertToClickHandler(gaObject, callback);
}
