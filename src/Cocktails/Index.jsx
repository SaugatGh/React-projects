import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";

const MainLayout = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Component />
    </React.Fragment>
  );
};

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainLayout component={Home} />} />
        <Route exact path="about/" element={<MainLayout component={About} />} />
        <Route
          exact
          path="/cocktail/:id"
          element={<MainLayout component={SingleCocktail} />}
        />
        <Route exact path="*" element={<Error component={Error} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
