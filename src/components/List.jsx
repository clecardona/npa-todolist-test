//External imports
import React, { useState } from "react";

// Local imports

export default function List({ todos }) {
  // States

  //Methods

  return (
    <>
      <section className="shopping_list">
        <>
          <h1>My Todo-List</h1>
          <SortMenu />
          <div className="list-container">
            <ul></ul>
          </div>
        </>

        <ButtonsMenu />
      </section>
    </>
  );
}
