import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MYCOUNTRYART</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="ml-5">
                <NavLink href="/home">HOME</NavLink>
              </NavItem>
              <NavItem className="ml-3">
                <NavLink href="">INDIAN HERITAGE</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="ml-3">
                <DropdownToggle nav caret>
                  PAINTINGS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="">ABSTRACT PAINTINGS</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="">PORTRAIT PAINTINGS</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="">INDIAN PAINTINGS</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="">STILL LIFE PAINTINGS</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="">ANIMALS, BIRDS PAINTINGS</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavLink style={{ color: "black" }} href="">
              ABOUT
            </NavLink>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;


// <DropdownItem divider />
// <DropdownItem>
//   Reset
// </DropdownItem>
