// @flow
import * as React from 'react';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Container from 'react-bootstrap/esm/Container';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Navbar from 'react-bootstrap/esm/Navbar';
import {FaCog, FaHome, FaUser, FaUserEdit} from "react-icons/all";
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar bg="light mx-1 shadow-sm">
            <Container>
                <Link to="/" className="navbar-brand">
                    q<span className="text-warning">Track</span>
                </Link>

                <ButtonGroup aria-label="Time picker">
                    <Link to="/d" className="btn btn-outline-dark">Day</Link>
                    <Link to="/w" className="btn btn-dark">Week</Link>
                    <Link to="/m" className="btn btn-outline-dark">Month</Link>
                </ButtonGroup>

                <Dropdown align={"end"}>
                    <Dropdown.Toggle variant="outline-dark" id="menu-dropdown">
                        <FaUser size={24}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Link to="/" className="dropdown-item">
                            <FaHome className="align-middle"/>
                            <span className="align-middle"> Home</span>
                        </Link>
                        <Link to="/profile" className="dropdown-item">
                            <FaUserEdit className="align-middle"/>
                            <span className="align-middle"> Profile</span>
                        </Link>
                        <Link to="/settings" className="dropdown-item">
                            <FaCog className="align-middle"/>
                            <span className="align-middle"> Settings</span>
                        </Link>
                        <Dropdown.Divider/>
                        <Link to="/logout" className="dropdown-item">Log out</Link>
                    </Dropdown.Menu>
                </Dropdown>

            </Container>
        </Navbar>
    );
};