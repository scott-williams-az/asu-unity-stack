import React, { useEffect } from "react";
import { allCookieConsentJS } from "../../../src/js/cookie-consent-full-screen.js";
import "../../../src/css/cookie-consent-full-screen.css";

import { fullLayoutDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Molecules/Cookie Consent",
  decorators: [ fullLayoutDecorator ],
  parameters: { controls: { disable: true } },
};
export const FullScreenBannerCookieConsent = () => {
  useEffect(() => {
    allCookieConsentJS();
  }, []);

  return (
    <div id="full-screen"></div>
  );
}
