import React, { useState } from "react";
import Values from "values.js";
import "./index.css";
import SingleColor from "./SingleColor";

const Index = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  

  const handleSubmit = (e) => {
    e.preventDefault();
    try { // These 10 are the size of 10% of color size upto 100% . giving the color weight according to percentage
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((colour, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...colour}
              index={index}
              hexColor={colour.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default Index;
