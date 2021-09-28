import React, { useState } from "react";
//Local imports
import Button from "./shared/Button";
import Modal from "./Modal";
import { clearList } from "../utils/task";

export default function SectionButtons({ setReload }) {
  const [isOpen, setIsOpen] = useState(false);

  function clear() {
    clearList();
    setReload();
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
