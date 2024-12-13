import React, { useEffect } from "react";
import { allCookieConsentJS } from "../../../src/js/cookie-consent-full-screen.js";
import "../../../src/css/cookie-consent-full-screen.css";

export default {
  title: "Molecules/Cookie Consent",
  // Forces reload of the story to keep css and js from persisting between stories
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
