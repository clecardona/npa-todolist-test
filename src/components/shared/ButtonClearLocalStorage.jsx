import React from "react";

export default function ButtonClearLocalStorage({ hook }) {
  const [reload, setReload] = hook;
  return (
    <button
      className="btn btn-float"
      onClick={() => {
        localStorage.clear();
        setReload(!reload);
      }}
    >
      Clear localSorage
    </button>
  );
}
