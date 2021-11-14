import "./App.css";

import { ChromeMessage, Sender } from "./types";

import Button from "./components/Button";
import React from "react";
import logo from "./logo.svg";

function App() {
  const [color, setColor] = React.useState("");
  const [responseFromContent, setResponseFromContent] = React.useState("");

  React.useEffect(() => {
    colorChangeMessage(color);
  });

  const colorChangeMessage = (color: String) => {
    const message: ChromeMessage = {
      from: Sender.React,
      color: color,
    };

    const queryInfo: chrome.tabs.QueryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const currentTabId = tabs[0].id || 0;
        chrome.tabs.sendMessage(currentTabId, message, (response) => {
          setResponseFromContent(response);
        });
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          border="none"
          color="red"
          height="30px"
          onClick={() => setColor("red")}
          radius="5px"
          width="30px"
        />
        <Button
          border="none"
          color="green"
          height="30px"
          onClick={() => setColor("green")}
          radius="5px"
          width="30px"
        />
      </header>
    </div>
  );
}

export default App;
