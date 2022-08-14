import React from "react";
import "./index.css";
import Review from "./Review"

const Index = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review  />
      </section>
    </main>
  );
};

export default Index;
