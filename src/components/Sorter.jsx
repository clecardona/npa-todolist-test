import React from "react";
import Button from "./shared/Button";
import sort from "../assets/icns/sort.svg";

export default function Sorter({ hook }) {
  const [sorting, setSorting] = hook;

  return (
    <section className="section-sort">
      <img src={sort} alt="sort" />
      <Button
        type={`btn-sort${sorting === "title" ? "-active" : ""}`}
        onClick={() => {
          setSorting("title");
        }}
      >
        A-Z
      </Button>
      <Button
        type={`btn-sort${sorting === "timestamp" ? "-active" : ""}`}
        onClick={() => {
          setSorting("timestamp");
        }}
      >
        Date
      </Button>
    </section>
  );
}
