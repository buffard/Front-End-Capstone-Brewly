import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class NavbarBrewly extends React.Component {
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

  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Brewly</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/journal">Coffee Journal</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/library">Coffee Library</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/brewguides">Brew Guides</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" onClick={this.logout}>Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

