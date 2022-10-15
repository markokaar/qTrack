// @flow
import * as React from 'react';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Stack from 'react-bootstrap/esm/Stack';
import {FaGlobe} from 'react-icons/fa';
import {Link} from 'react-router-dom';

type Props = {};
export const NavBarNoAuth = (props: Props) => {
    return (
        <Stack direction="horizontal" gap={1}>
            <Dropdown className="langDropdown" align={"end"}>
                <Dropdown.Toggle className="px-1 py-1 rounded-5" variant="light" id="menu-dropdown">
                    <FaGlobe/>
                    <span className="align-middle"> EN</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu" aria-labelledby="menu-dropdown">
                    <Dropdown.Header className="py-0">Choose Language</Dropdown.Header>
                    <Dropdown.Divider className="mb-0"/>
                    <Link to="" className="dropdown-item">
                        <span className="align-middle"> English</span>
                    </Link>
                    <Link to="" className="dropdown-item">
                        <span className="align-middle"> Estonian</span>
                    </Link>
                    <Link to="" className="dropdown-item">
                        <span className="align-middle"> Spanish</span>
                    </Link>
                </Dropdown.Menu>
            </Dropdown>

            <Link to="" className="btn btn-warning">Create Account</Link>
            <Link to="" className="btn btn-outline-secondary">Log in</Link>
        </Stack>
    );
};