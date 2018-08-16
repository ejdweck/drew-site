import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Home,
  About,
  Captain,
  Boat,
  Reports,
  Policies,
  Contact,
  Rates
} from './components/RouteComponents'
import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap'

import captain from './img/captain.png'

const Routes = () => (
  <Router>
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Magic Touch Fishing</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/">Welcome</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem eventKey={2}>
            <Link to="/captain">Captain</Link>
            </NavItem>
            <NavItem eventKey={1}>
              <Link to="/boat">Boat</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/reports">Reports</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/policies">Policies</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/contact">Contact</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/rates">Rates</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/captain" component={Captain} />
      <Route path="/boat" component={Boat} />
      <Route path="/reports" component={Reports} />
      <Route path="/policies" component={Policies} />
      <Route path="/contact" component={Contact} />
      <Route path="/rates" component={Rates} />
    </div>
  </Router>
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
