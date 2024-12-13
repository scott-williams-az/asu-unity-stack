import React, { useEffect } from "react";
import { allCookieConsentJS } from "../../../src/js/cookie-consent";

export default {
  title: "Molecules/Cookie Consent",
  decorators: [
    (storyFn, context) => {
      useEffect(() => {
        setTimeout(() => {
          context.globals.shouldReload = true;
        }, 100);
        return () => {
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
export const MaxWidthCookieConsent = () => {
  useEffect(() => {
    allCookieConsentJS();
    const loadCSS = async () => {
      const cssModule = await import("../../../src/css/cookie-consent.css", {
      assert: { type: 'css' }
      });
      document.adoptedStyleSheets = [cssModule.default];
    };
    loadCSS();
  }, []);

  return (
    <div></div>
  );
}
