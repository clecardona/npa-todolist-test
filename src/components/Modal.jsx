import React, { useState } from "react";
import reactDom from "react-dom";
import Button from "./shared/Button";
import FormItem from "./shared/FormItem";
import form from "../assets/form.json";
import { addTask } from "../utils/task";

export default function Modal({ isOpen, onClose, setReload }) {
  const [todo, setTodo] = useState("");

  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        {todo}
        <form
          onSubmit={() => {
            addTask(todo);
          }}
        >
          <FormItem
            settings={form[0].settings}
            hook={[todo, setTodo]}
            isValid={true}
          />

          <section className="section-buttons">
            <Button type="btn btn-ghost btn-140" onClick={onClose}>
              Close
            </Button>
            <input
              className="btn btn-main btn-140"
              type="submit"
              value=" Add a Task"
            />
          </section>
        </form>
      </div>
    </>,
    document.getElementById("modal")
  );
}
