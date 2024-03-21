import { useState } from "react";
import "./App.css";
import Text from "./Components/Text";
import Buttons from "./Components/Button";
import Border from "./Components/Border";

function App() {
  return (
    <>
      <Text>
        <h2>All my Cards</h2>
        <p>This is some text</p>
      </Text>
      <Buttons>
        <button>Click me</button>
        <button>Click me</button>
      </Buttons>

      <Border> Hey, I represent the JSX children! </Border>
    </>
  );
}

export default App;
