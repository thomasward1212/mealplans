import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Meals from "../Pages/Meals";

// function handleSelect(selectedKey: any) {
//     alert(`selected ${selectedKey}`);
//   }

const navInstance = () => (
    <Router>
        <div>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    MealPlans
                </Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="tabs">
                <NavItem>
                    <Link to="/"> Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                    <Link to="/meals"> Meals</Link>
                </NavItem>
            </Nav>
            </Navbar>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/meals" component={Meals} />
        </div>
    </Router>
);

export default navInstance;

