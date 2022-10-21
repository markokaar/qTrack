// @flow
import * as React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import {FaCalendarDay, FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {NewEvent} from './NewEvent';
import {IEvent} from "../IEvent";

type Props = {
    selectedDate: string,
    handleAddEvent: (event: IEvent) => void,
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
                <NewEvent handleAddEvent={props.handleAddEvent}/>
            </Nav.Item>
        </Nav>
    );
};
