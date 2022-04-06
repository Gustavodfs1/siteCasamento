import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from './styles';

function Header() {

    return (
        <div>
            <Navbar class="navbar" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav class="navbar-itens"
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px', color: 'black' }}
                            navbarScroll
                        >
                            <Nav.Link style={{color: 'black'}} href="#">RSPV</Nav.Link>
                            <Nav.Link style={{color: 'black'}} href="#">O CASAL</Nav.Link>
                            <Nav.Link style={{color: 'black'}}href="#">AS DICAS</Nav.Link>
                            <Nav.Link style={{color: 'black'}}href="#">O LOCAL</Nav.Link>
                            <Nav.Link style={{color: 'black'}}href="#">OS PRESENTES</Nav.Link>
                            <Nav.Link style={{color: 'black'}}href="#">MADRINHAS E PADRINHOS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}

export default Header;