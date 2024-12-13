import React, { useEffect } from "react";
import { allCookieConsentJS } from "../../../src/js/cookie-consent";
import "../../../src/css/cookie-consent.css";

export default {
  title: "Molecules/Cookie Consent",
  // Forces reload of the story to keep css and js from persisting between stories
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
  }, []);

  return (
    <div></div>
  );
}
