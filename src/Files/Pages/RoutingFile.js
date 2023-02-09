import React from "react";
import { Route, Routes } from "react-router-dom";
import Bollywood from "./Bollywood";
import Fitness from "./Fitness";
import Hollywood from "./Hollywood";
import Home from "./Home";
import Technology from "./Technology";
import Food from "./Food";

const RoutingFile = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </>
  );
};

export default RoutingFile;
