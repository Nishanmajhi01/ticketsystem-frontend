import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

import { LinkContainer } from 'react-router-bootstrap';
import  {useNavigate} from 'react-router-dom'

export const Header = () => {
const navigate = useNavigate()
 const logOut =()=>{
  localStorage.removeItem('authToken');
  navigate("/")
 }

  return (
    <Navbar collapseOnSelect variant='dark' bg='secondary' expand='md'>
        <Navbar.Brand>
            <img src={logo} alt="logo" width='80px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ms-auto">
              {/* <Nav.Item> <Link to='/dashboard'>Dashboard</Link></Nav.Item>
              <Nav.Item><Link to='/tickets'>Ticket</Link></Nav.Item>
              <Nav.Item><Link to=''>Logout</Link></Nav.Item> */}
              <LinkContainer to ='/dashboard'><Nav.Link >Dashboard</Nav.Link></LinkContainer>
              <LinkContainer to ='/tickets'><Nav.Link >Tickets</Nav.Link></LinkContainer>
              <Nav.Link onClick={logOut}>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}


