import React from "react";
import phone from "./Images/phone.svg";

import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastrucure for the internet</h1> 
          <p>Millions of companies of all sizes-from startups to Foutune 500-use Stripe's software and APIs to accept payments, send payouts, and amange their busuiness online.</p>
          <button className="btn">Start Now</button>
          </article>
        <article className="hero-images">
          <img src={phone} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;








