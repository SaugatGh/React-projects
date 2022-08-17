import React from "react";
import "./index.css";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

const Index = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default Index;
