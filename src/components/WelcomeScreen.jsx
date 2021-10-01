import React, { useState } from "react";
import Button from "./shared/Button";
import welcomeImg from "../assets/img/welcome.svg";
import Modal from "./Modal";

export default function Welcome({ hook }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reload, setReload] = hook;

  return (
    <section className="section-welcome">
      <img src={welcomeImg} alt="welcome" />

      <h2>Welcome!</h2>
      <p>
        Organize your daily routines with Todolist. Have peace of mind by adding
        all your tasks to your to-do list (wherever you are or whatever device
        you use). Todolist gives you the confidence that everything’s organized
        and accounted for, so you can make progress on the things that are
        important to you.
      </p>
      <Button type="btn btn-main btn-300" onClick={() => setIsOpen(true)}>
        Add a Task
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setReload={() => setReload(!reload)}
      />
    </section>
  );
}
