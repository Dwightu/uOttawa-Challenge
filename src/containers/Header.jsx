import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";


function Header() {
    return (
        <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
            <LinkContainer to="/">
                <Navbar.Brand className="font-weight-bold text-muted px-4">
                    2022 uOttawa Challenge
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end px-4">
                <Nav activeKey={window.location.pathname}>
                    <LinkContainer to="/signup">
                        <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header