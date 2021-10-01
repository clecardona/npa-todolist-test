import React, { useState } from "react";
//Local imports
import Button from "./shared/Button";
import Modal from "./Modal";
import { clearList } from "../utils/task";

export default function SectionButtons({ hook }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reload, setReload] = hook;

  function clear() {
    clearList();
    setReload(!reload);
  }

  return (
    <section className="section-buttons">
      <Button type="btn-main btn-140" onClick={() => setIsOpen(true)}>
        Add a Task
      </Button>
      <Button type="btn-ghost btn-140" onClick={clear}>
        Clear List
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
