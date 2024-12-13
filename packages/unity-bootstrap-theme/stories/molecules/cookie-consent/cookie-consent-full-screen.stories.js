import React, { useEffect } from "react";
import { allCookieConsentJS } from "../../../src/js/cookie-consent-full-screen.js";

export default {
  title: "Molecules/Cookie Consent",
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
    const loadCSS = async () => {
      const cssModule = await import("../../../src/css/cookie-consent-full-screen.css", {
      assert: { type: 'css' }
      });
      document.adoptedStyleSheets = [cssModule.default];
    };
    loadCSS();
  }, []);

  return (
    <div id="full-screen"></div>
  );
}
