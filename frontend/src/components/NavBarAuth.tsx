// @flow
import * as React from 'react';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import {FaHome, FaUser, FaUserEdit, FaCog} from 'react-icons/fa';
import {Link} from 'react-router-dom';

type Props = {};
export const NavBarAuth = (props: Props) => {
    return (
        <>
            <ButtonGroup aria-label="Time picker" className="shadow-sm">
                <Link to="/d" className="btn btn-outline-dark">Day</Link>
                <Link to="/w" className="btn btn-dark">Week</Link>
                <Link to="/m" className="btn btn-outline-dark">Month</Link>
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
                    <Link to="/logout" className="dropdown-item">Log out</Link>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};