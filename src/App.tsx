import { useState } from "react";
import "./App.css";
import Text from "./Components/Text";
import Buttons from "./Components/Button";
import Border from "./Components/Border";
import QuestList from "./Components/QuestList";
import CarComponent from "./Components/CarComponent";

function App() {
  return (
    <>
      {/* <Text>
        <h2>All my Cards</h2>
        <p>This is some text</p>
      </Text>
      <Buttons>
        <button>Click me</button>
        <button>Click me</button>
      </Buttons> */}
      {/* <Border> Hey, I represent the JSX children! </Border> */}
      {/* <QuestList /> */}
      <CarComponent />
    </>
  );
}

export default App;
