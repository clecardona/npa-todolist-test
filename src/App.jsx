// NPM Packages
import React, { useState } from "react";

// Style import
import "./styles/base.sass";

// Components import
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import ListDone from "./components/ListDone";
import ListTodo from "./components/ListTodo";
import Sorter from "./components/Sorter";
import SectionButtons from "./components/SectionButtons";
import WelcomeScreen from "./components/WelcomeScreen";
// Shared Components import
import ButtonClearLocalStorage from "./components/shared/ButtonClearLocalStorage";

export default function App() {
  // Const
  const rawData = localStorage.getItem("tasks");

  // States
  const [reload, setReload] = useState(false);
  const [sorting, setSorting] = useState("timestamp");
  const [viewDone, setViewDone] = useState(false);

  if (rawData === null || undefined) {
    return <WelcomeScreen hook={[reload, setReload]} />;
  } else {
    return (
      <div className="App">
        <ButtonClearLocalStorage hook={[reload, setReload]} />
        <main>
          <h1>My Todo List</h1>
          <Sorter hook={[sorting, setSorting]} />
          <ListTodo sorting={sorting} hook={[reload, setReload]} />
          <SectionButtons hook={[reload, setReload]} />
          <Filter hook={[viewDone, setViewDone]} />
          {viewDone && (
            <ListDone sorting={sorting} hook={[reload, setReload]} />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}
