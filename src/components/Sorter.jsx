import React from "react";
import Button from "./shared/Button";

export default function Sorter({ sorting, setSorting }) {
  //const [isActive, setIsActive] = useState(false);

  return (
    <section className="section-sort">
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
