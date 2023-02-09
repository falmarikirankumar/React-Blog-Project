import React from "react";
import { NavLink } from "react-router-dom";
import RoutingFile from "../Pages/RoutingFile";
import "./Header.css";

const Header = () => {
  let activeStyle = {
    // textDecoration: "underline",
    textShadow: "5px",
    color: "black",
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3 style={{ display: "inline", transform: "rotate(-90deg)" }}>THE</h3>
        <h1>SIREN</h1>
      </div>
      <nav>
        <ul type="none">
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/bollywood"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Bollywood</li>
          </NavLink>
          <NavLink
            to={"/technology"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Technology</li>
          </NavLink>
          <NavLink
            to={"/hollywood"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Hollywood</li>
          </NavLink>
          <NavLink
            to={"/fitness"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Fitness</li>
          </NavLink>
          <NavLink
            to={"/food"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Food</li>
          </NavLink>
        </ul>
      </nav>
      <RoutingFile />
    </div>
  );
};

export default Header;
