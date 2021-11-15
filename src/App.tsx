import "./style/style.css";

import { ChromeMessage, Palette, Sender } from "./types";

import Button from "./components/Button";
import Header from "./components/Header";
import React from "react";

// import ToggleButton from "./components/ToggleButton";

function App() {
  const [palette, setPalette] = React.useState<Palette>();
  // const [toggle, setToggle] = React.useState(false);
  const [responseFromContent, setResponseFromContent] = React.useState("");

  React.useEffect(() => {
    // if (toggle) {
    //   colorChangeMessage(palettes[4]);
    // } else if (palette) {
    // }
    colorChangeMessage(palette!);
  });

  const colorChangeMessage = (palette: Palette) => {
    const message: ChromeMessage = {
      from: Sender.React,
      palette: palette,
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

  // const onToggle = () => {
  //   if (!toggle) {
  //     setToggle(true);
  //   } else {
  //     setPalette(palette);
  //     setToggle(false);
  //   }
  // };

  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <ToggleButton
          onChange={() => {
            onToggle();
          }}
          defaultChecked={toggle}
        /> */}

        <div className="btn-themes">
          <Button
            color={"#502e4d"}
            text={"Protanopia & Deuteranopia"}
            onClick={() => setPalette(palettes[0])}
          />
          <Button
            color={"#303e4e"}
            text={"Ochin"}
            onClick={() => setPalette(palettes[1])}
          />
          <Button
            color={"#502e4d"}
            text={"Titranopia"}
            onClick={() => setPalette(palettes[2])}
          />
          <Button
            color={"#007e84"}
            text={"Monument"}
            onClick={() => setPalette(palettes[3])}
          />
        </div>
      </div>
    </div>
  );
}

// Pre-set palette colours
const palettes = [
  {
    name: "Protanopia & Deuteranopia",
    background: ["#502e4d", "#8d5789"],
    text: ["#ffffff", "#cccccc"],
    button: ["#889200"],
    highlight: ["#cfff00"],
  },

  {
    name: "Ochin",
    background: ["#303e4e", "#6497ca"],
    text: ["#ffffff", "#d3e1f0"],
    button: ["#76b08e"],
    highlight: ["#87d95a"],
  },

  {
    name: "Titranopia",
    background: ["#502e4d", "#8d5789"],
    text: ["#ffffff", "#cccccc"],
    button: ["#e04b00"],
    highlight: ["#03d29e"],
  },

  {
    name: "Monument",
    background: ["#007e84", "#f99f60"],
    text: ["#ffffff", "#cccccc"],
    button: ["#f45239"],
    highlight: ["#f99f60"],
  },

  {
    name: "None",
    background: ["transparent"],
    text: ["inherit"],
    button: ["inherit"],
    highlight: ["inherit"],
  },
];

export default App;
