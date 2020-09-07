import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Logo />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Links />
                        </Nav>
                        <Form inline></Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;
