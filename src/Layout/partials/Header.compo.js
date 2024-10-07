import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
export const Header = () => {
  return (
    <Navbar collapseOnSelect variant='dark' bg='secondary' expand='md'>
        <Navbar.Brand>
            <img src={logo} alt="logo" width='80px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ms-auto">
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                <Nav.Link href='/tickets'>Tickets</Nav.Link>
                <Nav.Link href='/logout'>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}


