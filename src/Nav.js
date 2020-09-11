import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h3>QuickStart To-Do List</h3>
      <ul className="nav-links">
        <Link style={{ textDecoration: "none" }} to="/">
          <li className="nav-list">Home</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/todos">
          <li className="nav-list">To-Do</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <li className="nav-list">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
