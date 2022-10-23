// @flow
import moment from 'moment';
import * as React from 'react';
import Button from 'react-bootstrap/esm/Button';
import {IEvent} from "../IEvent";

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

    return (
        <Button className="eventBox text-black text-start" style={{
            height: (eventLength / 15) + "rem",
            gridRow: (startTime / 25) + 1,
            gridColumn: startDay + "/" + (startDay + 1),
            backgroundColor: event.calendarGroup
        }}>
            <span>{event.title}</span>
        </Button>
    );
};
