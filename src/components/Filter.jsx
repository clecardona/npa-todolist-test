import React from "react";
import Button from "./shared/Button";
import eye from "../assets/icns/eye.svg";
import eyeSlash from "../assets/icns/eye-slash.svg";

export default function Filter({ active, setActive }) {
  return (
    <section className="section-filter">
      <Button type="btn btn-sort btn-icon" onClick={() => setActive(!active)}>
        <img src={!active ? eye : eyeSlash} alt="eye" />
        {!active ? "View" : "Hide"} tasks done
      </Button>
    </section>
  );
}
