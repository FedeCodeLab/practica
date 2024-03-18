import { useState, useEffect } from "react";
import ChitChat from "./components/chitChat/ChitChat";
import ChitChat2 from "./components/chitChat/ChitChat2";
import { Card } from "./components/card/Card";
import { Card2 } from "./components/card/Card2";
import Question from "./components/question/Question";
import Shoes from "./components/Shoes/Shoes";
import Header from "./components/header/Header";
import Header2 from "./components/header/Header2";
import Video from "./components/video/Video";
import Form from "./components/form/Form";

function App() {
  const [dark, setDark] = useState(false);
  const toggle = () => {
    setDark(!dark);
  };

  return (
    <main className={dark ? "min-h-screen dark" : "min-h-screen light"}>
      <p>hola</p>
      <Header />
      <Header2 />

      <div className="container relative">
        <button onClick={toggle}>Dark Mode</button>
        <ChitChat />
        <ChitChat2 />
        <Card />
        <Card2 />
        <Question />
        <Shoes />
        <Video />
        <Form />
      </div>
    </main>
  );
}

export default App;
