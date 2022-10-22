// @flow
import * as React from 'react';
import moment from "moment";
import Nav from 'react-bootstrap/esm/Nav';
import {FaCalendarDay, FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {useLocation} from 'react-router-dom';
import {NewEvent} from './NewEvent';
import {IEvent} from "../IEvent";
import Button from 'react-bootstrap/esm/Button';
import {getWeekRange} from '../utils/getWeekRange';

type Props = {
    selectedDate: moment.Moment,
    handleAddEvent: (event: IEvent) => void,
    handleNextDay: (timeframe: moment.Duration) => void,
    handlePreviousDay: (timeframe: moment.Duration) => void,
    handleToday: () => void
};
export const CalendarNav = (props: Props) => {
    const location = useLocation().pathname;

    const handleNext = () => {
        location === "/d" && props.handleNextDay(moment.duration(1, 'days'));
        location === "/w" && props.handleNextDay(moment.duration(1, 'weeks'));
        location === "/m" && props.handleNextDay(moment.duration(1, 'months'));
    }

    const handlePrevious = () => {
        location === "/d" && props.handlePreviousDay(moment.duration(1, 'days'));
        location === "/w" && props.handlePreviousDay(moment.duration(1, 'weeks'));
        location === "/m" && props.handlePreviousDay(moment.duration(1, 'months'));
    }

    return (
        <Nav className="bg-light border-top shadow">
            <Nav.Item>
                <Button className="btn-light rounded-0 nav-link link-dark"
                        onClick={() => props.handleToday()}
                >
                    <FaCalendarDay/>
                    <span className="align-middle"> Today</span>
                </Button>
            </Nav.Item>
            <div className="vr"></div>
            <Nav.Item>
                <Button className="btn-light rounded-0 nav-link link-dark"
                        onClick={() => handlePrevious()}
                >
                    <FaChevronLeft/>
                </Button>
            </Nav.Item>
            <Nav.Item>
                <Button className="btn-light rounded-0 nav-link link-dark"
                        onClick={() => handleNext()}
                >
                    <FaChevronRight/>
                </Button>
            </Nav.Item>
            <div className="vr"></div>
            <Nav.Item>
                <Nav.Link disabled>
                    <span className="align-middle">
                        {location === "/d" && moment(props.selectedDate).format("MMM DD, YYYY")}
                        {location === "/w" && getWeekRange(props.selectedDate)}
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
