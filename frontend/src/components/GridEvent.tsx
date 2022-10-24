// @flow
import moment from 'moment';
import * as React from 'react';
import Button from 'react-bootstrap/esm/Button';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Popover from 'react-bootstrap/esm/Popover';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/esm/Stack';
import {FaEdit, FaRegBell, FaTrash} from 'react-icons/fa';
import {IEvent} from "../IEvent";
import {useLocation} from 'react-router-dom';

// Event length in minutes // 1 min step.
// Event start display format is "700" = 07:00. // 15 min step.
type Props = {
    event: IEvent,
};

export const GridEvent = (props: Props) => {
    const event = props.event;
    const eventStart = moment(event.start);

    // TODO: Temporary, until locale fixed.
    const startDay = eventStart.day() === 0 ? 7 : eventStart.day();
    const startTime = eventStart.hours() * 100 + eventStart.minutes() * 100 / 60
    const eventLength: number = moment.duration(moment(event.end).diff(eventStart)).asMinutes();

    const popover = (
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
        <OverlayTrigger trigger="click"
                        placement={useLocation().pathname === "/d" ? "top" : (startDay < 3 ? "right" : "left")}
                        overlay={popover}>
            <Button className="eventBox text-black text-start w-100"
                    style={{
                        height: (eventLength / 15) + "rem",
                        gridRow: (startTime / 25) + 1,
                        gridColumn: startDay + "/" + (startDay + 1),
                        backgroundColor: event.calendarGroup,
                    }}>
                <Stack>
                    <span className="h-100 w-100">{event.title}</span>
                    {event.notification && <span><FaRegBell className="float-end"/></span>}
                </Stack>
            </Button>
        </OverlayTrigger>
    );
};
