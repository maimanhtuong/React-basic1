import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faAddressCard,faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar dark expand="md" className="bg-dark">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand  className="mr-auto " href="/">
              <img
                src="/assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                  <FontAwesomeIcon icon={faUsers} /> Nhân viên
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/DepartmentList">
                  <FontAwesomeIcon icon={faAddressCard} /> Phòng ban
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/SalaryList">
                  <FontAwesomeIcon icon={faMoneyCheckDollar} /> Bảng lương
                  </NavLink>
                </NavItem>
                
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
