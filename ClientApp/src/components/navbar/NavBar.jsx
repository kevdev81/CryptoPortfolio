import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import * as icon from "./img/src";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="dark" expand="sm">
        <NavbarBrand href="/" style={{ color: "white" }}>
          Crypto Tracker
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button size="sm" color="info" outline>
                <NavLink
                  className="navLinkBtn"
                  href="https://coinmarketcap.com"
                >
                  CoinMarketCap
                </NavLink>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="sm" color="info" outline>
                <NavLink className="navLinkBtn" href="https://coinbase.com">
                  Coinbase
                </NavLink>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="sm" color="info" outline>
                <NavLink className="navLinkBtn" href="https://kraken.com">
                  Kraken
                </NavLink>
              </Button>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="dropdownToggle">
              <DropdownToggle
                className="dropdownToggle"
                align="center"
                caret
                outline
                size="sm"
                style={{
                  color: "#17a2b8",
                  background: "white",
                  marginLeft: "75px",
                  marginRight: "50px",
                  align: "center"
                }}
              >
                COINS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <img
                    className="icon navBarIcon navBarDropdownItem"
                    src={icon.btcIcon}
                    alt=""
                  />
                </DropdownItem>{" "}
                <DropdownItem>
                  <img
                    className="icon navBarIcon navBarDropdownItem"
                    src={icon.ethIcon}
                    alt=""
                  />
                </DropdownItem>{" "}
                <DropdownItem>
                  <img
                    className="icon navBarIcon navBarDropdownItem"
                    src={icon.xrpIcon}
                    alt=""
                  />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
