import React, { useState } from "react";
import Button from "./shared/Button";
import welcomeImg from "../assets/img/welcome.svg";
import { addTask } from "../utils/task";
import Modal from "./Modal";

export default function Welcome({ setReload }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-welcome">
      <img src={welcomeImg} alt="welcome" />

      <h2>Welcome!</h2>
      <p>
        Une to-do list est un procédé qui se veut simple et efficace pour gérer
        les tâches d'un projet. Ces tâches peuvent être indépendantes ou devoir,
        au contraire, être accomplies dans un certain ordre. Un chef de projet
        informatique y notera par exemple les bogues à corriger et les dates de
        début et de fin de problème. Un dispatcher (autre exemple) y notera les
        tâches à réaliser au sein de son quart.
      </p>
      <Button type="btn btn-main btn-300" onClick={() => setIsOpen(true)}>
        Add a Task
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setReload={setReload}
      />
    </section>
  );
}
