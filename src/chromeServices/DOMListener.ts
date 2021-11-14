import { ChromeMessage, Sender } from "../types";

const messagesFromReactAppListener = (
  message: ChromeMessage,
  sender,
  response
) => {
  if (
    sender.id === chrome.runtime.id &&
    message.from === Sender.React &&
    message.color
  ) {
    document.body.style.backgroundColor = message.color.toLowerCase();
  }
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
