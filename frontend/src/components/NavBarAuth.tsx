// @flow
import * as React from 'react';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import {FaHome, FaUser, FaUserEdit, FaCog} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';

type Props = {
    handleLogin: () => void;
};
export const NavBarAuth = (props: Props) => {
    const location = useLocation().pathname;

    return (
        <>
            <ButtonGroup aria-label="Time picker" className="shadow-sm">
                <Link to="/d" className={`btn btn-${location === "/d" ? "dark" : "outline-dark"}`}>Day</Link>
                <Link to="/w" className={`btn btn-${location === "/w" ? "dark" : "outline-dark"}`}>Week</Link>
                <Link to="/m" className={`btn btn-${location === "/m" ? "dark" : "outline-dark"}`}>Month</Link>
            </ButtonGroup>

            <Dropdown align={"end"}>
                <Dropdown.Toggle variant="outline-dark" id="menu-dropdown" className="shadow-sm">
                    <FaUser size={24}/>
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow-sm">
                    <Link to="/home" className="dropdown-item">
                        <FaHome className="align-middle"/>
                        <span className="align-middle"> Home</span>
                    </Link>
                    <Link to="/account" className="dropdown-item">
                        <FaUserEdit className="align-middle"/>
                        <span className="align-middle"> Account</span>
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                        <FaCog className="align-middle"/>
                        <span className="align-middle"> Settings</span>
                    </Link>
                    <Dropdown.Divider/>
                    <Link to="/" className="dropdown-item" onClick={props.handleLogin}>Log out</Link>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};