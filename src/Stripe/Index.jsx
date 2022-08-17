import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Submenu from "./Submenu";
import Sidebar from "./Sidebar";

const Index = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
};

export default Index;
