import { useState } from "react";
import "./App.css";
import Text from "./Components/Text";
import Buttons from "./Components/Button";

function App() {
  return (
    <>
      <Text>
        <h2>All my Cards</h2>
        <p>This is some text</p>
      </Text>
      <Buttons>
        <button>Click me</button>
      </Buttons>
    </>
  );
}

export default App;
