
import {Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout=()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark" className="nav">
        <Container>
          <Navbar.Brand as={Link}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="/display">Display</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/update">Update</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <hr size="7" color="red"/>
        <Outlet/>
        <hr size="7" color="red"/>

        <div className="foot">
        <footer align="center">
            <h5>WWW.Mycompany.com</h5>
        </footer>
        </div>

        </>
    )
};
export default Layout;