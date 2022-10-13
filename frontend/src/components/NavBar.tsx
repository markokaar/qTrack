// @flow
import * as React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import {FaUser} from "react-icons/all";

type Props = {};
export const NavBar = (props: Props) => {

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">qTrack</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="/"><FaUser /></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};