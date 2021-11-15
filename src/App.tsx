import React from "react";
import "./style/style.css";
import Button from "./components/Button";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        
        <ToggleButton/>

        <div className="btn-themes">
          <Button
            color={"#889200"}
            text={"Theme 1"}
          //onclick={}      // function call to set theme 1
          />
          <Button
            color={"#76b08e"}
            text={"Theme 2"}
          //onclick={}      // function call to set theme 2
          />
          <Button
            color={"gray"}
            text={"Theme 3"}
          //onclick={}      // function call to set theme 3
          />
          <Button
            color={"purple"}
            text={"Theme 4"}
          //onclick={}      // function call to set theme 4
          />
        </div>
      </div>
    </div>
  );
}

export default App;
