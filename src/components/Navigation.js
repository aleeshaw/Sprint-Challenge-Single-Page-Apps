import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from "reactstrap";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-bar" color="light" light expand="md">
        <NavbarBrand><Header /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="menu" nav caret>
              {"\u2630"}
              </DropdownToggle>
              <DropdownMenu right>
                  <Link to="/">
                <DropdownItem>
                  Home
                </DropdownItem>
                  </Link>
                <DropdownItem divider />
                  <Link to="/characters">
                <DropdownItem>
                  Characters
                </DropdownItem>
                  </Link>
                <DropdownItem divider />
                <DropdownItem>
                  Locations
                </DropdownItem>
                <DropdownItem divider />
                <Link to="/search">
                <DropdownItem>
                Search
                </DropdownItem>
                </Link>
              </DropdownMenu>
              
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;