// @flow
import * as React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import {Link} from 'react-router-dom';

type Props = {};
export const PagesNav = (props: Props) => {
    return (
        <Nav className="bg-light shadow justify-content-center">
            <Nav.Item>
                <Link to="" className="nav-link link-dark">What is qTrack?</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="" className="nav-link link-dark">Features</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="pricing" className="nav-link link-dark">Pricing</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="" className="nav-link link-dark">Business</Link>
            </Nav.Item>
        </Nav>
    );
};
