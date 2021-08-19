import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './navbar.css'
const MyMenu: React.FC = () => {
  return (
    <>
      <Navbar variant='dark' className="custom-menu">
        <Container>
          <Navbar.Brand href='#home'>Nasreen</Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link href='#home' className="custom-nav-item nav-active">Home</Nav.Link>
            <Nav.Link href='#about-me' className="custom-nav-item">About Me</Nav.Link>
            <Nav.Link href='#portfolio' className="custom-nav-item">Portfolio</Nav.Link>
            <Nav.Link href='#Contact' className="custom-nav-item">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MyMenu
