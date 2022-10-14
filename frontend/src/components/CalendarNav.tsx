// @flow
import * as React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import {FaCalendarDay, FaChevronLeft, FaChevronRight, FaPlusSquare} from 'react-icons/fa';
import {Link} from 'react-router-dom';

type Props = {
    selectedDate: string
};
export const CalendarNav = (props: Props) => {
    return (
        <Nav className="bg-light border-top shadow">
            <Nav.Item>
                <Link to="" className="nav-link link-dark">
                    <FaCalendarDay/>
                    <span className="align-middle"> Today</span>
                </Link>
            </Nav.Item>
            <div className="vr"></div>
            <Nav.Item>
                <Link to="" className="nav-link link-dark"><FaChevronLeft/></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="" className="nav-link link-dark"><FaChevronRight/></Link>
            </Nav.Item>
            <div className="vr"></div>
            <Nav.Item>
                <Nav.Link disabled>
                    <span className="align-middle">
                        {props.selectedDate}
                    </span>
                </Nav.Link>
            </Nav.Item>


            <Nav.Item className="ms-auto border-start">
                <Link to="" className="nav-link link-dark">
                    <FaPlusSquare className="align-middle"/>
                    <span className="align-middle"> New event</span>
                </Link>
            </Nav.Item>

        </Nav>
    );
};