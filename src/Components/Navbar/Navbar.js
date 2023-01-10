import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li><NavLink to='/'>Home</NavLink></li>
        //         <li><NavLink to='/about'>About</NavLink></li>
        //         <li><NavLink to='/contact'>Contact</NavLink></li>
        //     </ul>
        // </nav>

        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/about'>About</NavLink>
            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
            <NavLink className='nav-link' to='/users'>Users</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavBar;