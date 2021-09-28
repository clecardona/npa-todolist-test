//External imports // good naming, but use "NPM Packages" as the name
import { useState } from "react";
import React from "react";

//Local imports
import "./styles/base.sass";
import List from "./components/List";
import WelcomeScreen from "./components/WelcomeScreen";
import SectionButtons from "./components/SectionButtons ";
import Footer from "./components/Footer";

export default function App() {
  // States
  const [todos, setTodos] = useState([]);
  // Const

  const data = ["hello", "world"];

  // Functions

  return (
    <div className="App">
      {data.length === 0 ? (
        <WelcomeScreen />
      ) : (
        <>
          <main>
            <List todos={todos} />
            <SectionButtons />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
