// @flow
import moment from 'moment';
import * as React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Popover from 'react-bootstrap/esm/Popover';
import Row from 'react-bootstrap/esm/Row';
import {FaEdit, FaTrash} from 'react-icons/fa';
import {IEvent} from "../IEvent";

type Props = {
    events: IEvent[],
    selectedDate: moment.Moment,
    handleDeleteEvent: (event: IEvent) => void
};
export const Month = (props: Props) => {
    const dates: number[] = [];
    for (let i = 1; i <= moment(props.selectedDate).daysInMonth(); i++) {
        dates.push(i);
    }

    const getWeekDay = (dayNumber: number): number =>
        new Date(props.selectedDate.year(), props.selectedDate.month(), dayNumber).getDay();

    const popover = (event: IEvent) => (
        <Popover id="event-popover">
            <Popover.Body>
                <Row><Col><h5>{event.title}</h5></Col></Row>
                <Row><Col>{moment(event.start).format('MMM Do YYYY, hh:mm')}-{moment(event.end).format("hh:mm")}</Col></Row>
                <Row className="mt-2"><Col>{event.description}</Col></Row>

                <div className="mt-2">
                    <Button
                        variant="outline-dark"
                        className="shadow-sm me-1"
                        size="sm"
                        onClick={() => props.handleDeleteEvent(event)}
                    >
                        <FaTrash/>
                    </Button>
                    <Button
                        variant="outline-dark"
                        className="shadow-sm"
                        size="sm"
                    >
                        <FaEdit/>
                    </Button>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <div className="week monthView">
                <div className="header">
                    <ul className="splitter">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <ul className="weekDays fw-bold text-muted">
                        <li>{moment(props.selectedDate).clone().weekday(1).format("ddd")}</li>
                        <li>{moment(props.selectedDate).clone().weekday(2).format("ddd")}</li>
                        <li>{moment(props.selectedDate).clone().weekday(3).format("ddd")}</li>
                        <li>{moment(props.selectedDate).clone().weekday(4).format("ddd")}</li>
                        <li>{moment(props.selectedDate).clone().weekday(5).format("ddd")}</li>
                        <li>{moment(props.selectedDate).clone().weekday(6).format("ddd")}</li>
                        <li>{moment(props.selectedDate).clone().weekday(7).format("ddd")}</li>
                    </ul>
                </div>

                <div className="timeContainer">
                    <ul className="times weekNumbers text-muted bg-light">
                        <li>{moment(props.selectedDate.startOf('month')).add(-1, 'week').week()}</li>
                        <li>{moment(props.selectedDate.startOf('month')).add(0, 'week').week()}</li>
                        <li>{moment(props.selectedDate.startOf('month')).add(1, 'week').week()}</li>
                        <li>{moment(props.selectedDate.startOf('month')).add(2, 'week').week()}</li>
                        <li>{moment(props.selectedDate.startOf('month')).add(3, 'week').week()}</li>
                        <li>{moment(props.selectedDate.startOf('month')).add(4, 'week').week()}</li>
                    </ul>
                </div>

                <div className="eventsContainer eventsContainerWeek eventsContainerMonth">
                    {dates.map((d) => {
                            const weekDay = getWeekDay(d - 1);
                            const row = Math.floor((d + (getWeekDay(dates[0]) - 2)) / 7);
                            const todayBox: string =
                                props.selectedDate.month() === moment().month() &&
                                props.selectedDate.year() === moment().year() &&
                                d === moment().date() ? "text-bg-warning" : "text-bg-light";

                            return (
                                <div key={d}
                                     className={`eventBox monthDayNumber ${todayBox} rounded-0`}
                                     style={{
                                         zIndex: 0,
                                         gridRow: (row * 5) + 1,
                                         gridColumn: (weekDay + 1) + "/" + (weekDay + 2)
                                     }}>
                                    <span>{d}</span>
                                </div>
                            )
                        }
                    )}

                    {props.events.map((event) => {
                            const eventStart = moment(event.start).clone();
                            const startDay = eventStart.day() === 0 ? 7 : eventStart.day();
                            const weekRow = eventStart.week() - moment(eventStart.clone().startOf('month')).week() + 1;

                            return (
                                eventStart.year() === props.selectedDate.year() &&
                                eventStart.month() === props.selectedDate.month() &&
                                <OverlayTrigger key={event.id}
                                                trigger="click"
                                                placement={startDay < 3 ? "right" : "left"}
                                                overlay={popover(event)}>
                                    <Button
                                        className="eventBox eventBoxMonth text-black text-start bg-transparent"
                                        style={{
                                            gridRow: (weekRow * 5) - 3,
                                            gridColumn: `${startDay} / ${startDay + 1}`,
                                            borderLeft: `7px solid ${event.calendarGroup}`
                                        }}>
                                        <span>{event.title.substring(0, 5)}...</span>
                                    </Button>
                                </OverlayTrigger>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    );
};
