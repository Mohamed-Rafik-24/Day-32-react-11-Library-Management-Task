import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    let navigate = useNavigate()
  return <div className='nav-wrapper'>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" style={{color:'white'}}>Library Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/home')} style={{color:'grey'}}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/manage')} style={{color:'grey'}}>Manage</Nav.Link>
            <Nav.Link onClick={()=>navigate('/create')} style={{color:'grey'}}>Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
}

export default NavBar