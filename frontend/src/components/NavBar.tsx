// @flow
import * as React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import {Link} from 'react-router-dom';
import {NavBarAuth} from "./NavBarAuth";
import {NavBarNoAuth} from './NavBarNoAuth';

type Props = {
    isLogged: boolean;
    handleLogin: () => void;
}
export const NavBar = (props: Props) => {
    return (
        <Navbar className="bg-light mx-1 shadow-sm">
            <Container>
                <Link to="/home" className="navbar-brand">
                    q<span className="text-warning">Track</span>
                </Link>

                {props.isLogged && <NavBarAuth handleLogin={props.handleLogin} />}
                {!props.isLogged && <NavBarNoAuth handleLogin={props.handleLogin}/>}

            </Container>
        </Navbar>
    );
};