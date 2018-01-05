import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Components */
import Home from "../Pages/Home";
import About from "../Pages/About";
import Meals from "../Pages/Meals";
import NavbarInstance from "../Header/Navbar";
/**
 * This module will be hot-reloaded and rendered upon modification
 */

const App = () => (
  <NavbarInstance/>
);

export default App;
