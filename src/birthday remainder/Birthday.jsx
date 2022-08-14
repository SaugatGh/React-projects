import React, { useState } from "react";
import "./birthday.css"
import List from "./List";
import data from "./data";
const Birthday = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <main>
        <section className="container">
          <h3>{people.length} birthday today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>
            Clear all
          </button>
        </section>
      </main>
    </div>
  );
};

export default Birthday;
