// @flow
import * as React from 'react';
import moment from "moment";
import Nav from 'react-bootstrap/esm/Nav';
import {FaCalendarDay, FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import {NewEvent} from './NewEvent';
import {IEvent} from "../IEvent";

type Props = {
    selectedDate: moment.Moment,
    handleAddEvent: (event: IEvent) => void,
};
export const CalendarNav = (props: Props) => {
    const location = useLocation().pathname;

    // '10 - 16 Oct 2022'
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
                        {location === "/d" && moment(props.selectedDate).format("MMM DD, YYYY")}
                        {location === "/w" && (
                            moment(props.selectedDate).clone().weekday(0).date() + " - " +
                            moment(props.selectedDate).clone().weekday(7).date() +
                            moment(props.selectedDate).format(" MMM YYYY")
                        )}
                        {location === "/m" && moment(props.selectedDate).format("MMMM YYYY")}
                    </span>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item className="ms-auto border-start">
                <NewEvent handleAddEvent={props.handleAddEvent}/>
            </Nav.Item>
        </Nav>
    );
};
