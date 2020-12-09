import React, { Component } from 'react'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';

class HeaderComponent extends Component {
  constructor(props) {
      super(props)

      this.state = {
        empId: 100001
      }

  }

  render() {
    return (
      <div>
        <header>
          <Navbar className="menu md-2" collapseOnSelect expand="lg md-2" bg="dark" variant="dark">
          <Navbar.Brand>TimeCardApplication</Navbar.Brand>
          <Nav>
            <Nav.Link href="/all">Home</Nav.Link>
            <Nav.Link href={`/employees/${this.state.empId}`}>Manager</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Services" id="collasible-nav-dropdown">
                  <NavDropdown.Item href={`/attendance/${this.state.empId}`}>Attendance</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={`/leave/${this.state.empId}`}>Leave</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={`/timecard/${this.state.empId}`}>TimeCard</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href={`/profile/${this.state.empId}`}>My Profile</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/signout">SignOut</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    )
  }
}

export default HeaderComponent
