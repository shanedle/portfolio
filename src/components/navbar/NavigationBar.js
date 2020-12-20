import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <>
            <Navbar className="navigationbar" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Nav.Link href="#home">
                        <Navbar.Brand className="navigationbar__brand">Shane</Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle className="navigationbar__toggle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" md="auto">
                            <Nav.Link href="#project">Projects</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;