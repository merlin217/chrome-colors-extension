import { ChromeMessage, Palette, Sender } from "../types";

import { injectStyle } from "./injectStyle.js";

const messagesFromReactAppListener = (
  message: ChromeMessage,
  sender,
  response
) => {
  if (
    sender.id === chrome.runtime.id &&
    message.from === Sender.React &&
    message.palette
  ) {
    injectStyle(message.palette);
  }
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
