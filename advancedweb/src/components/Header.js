import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Header.css';
import React from 'react';
import Pfp from '../Assets/Images/Profile/300-1.jpg'
function Header() {
    return (<>
    <Navbar  expand="lg" className='pt-3 pb-3 Navbar1'>
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-flex justify-content-center justify-content-between">
            <Nav.Link to="/">Dashboards</Nav.Link>
            
        </Nav>
        </Navbar.Collapse>
        <img className='Pfp ' src={Pfp} alt="Profile" />
    </Container>
    
    </Navbar>
    
    <Navbar  expand="lg" className='pt-3 pb-3 Navbar2'>
    <Container>
    
        
        <Nav className="me-auto ">
            <Nav.Link to="/"><b>Dashboard</b></Nav.Link>
            
        </Nav>
        
    </Container>
    </Navbar>
    </>
    )
}

export default Header
