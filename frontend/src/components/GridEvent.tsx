// @flow
import moment from 'moment';
import * as React from 'react';

// Event length in minutes // 1 min step.
// Event start currently in format "700" = 07:00. // 15 min step.
type Props = {
    eventStart: moment.Moment,
    eventEnd: moment.Moment,
    eventColor: string,
    eventTitle: string
};

export const GridEvent = (props: Props) => {
    // TODO: Temporary, until locale fixed.
    const startDay = props.eventStart.day() === 0 ? 7 : props.eventStart.day();
    const startTime = props.eventStart.hours() * 100 + props.eventStart.minutes() * 100 / 60
    const eventLength: number = moment.duration(props.eventEnd.diff(props.eventStart)).asMinutes();

    return (
        <div className="eventBox" style={{
            height: (eventLength / 15) + "rem",
            gridRow: (startTime / 25) + 1,
            gridColumn: startDay + "/" + (startDay + 1),
            backgroundColor: props.eventColor
        }}>
            <span>{props.eventTitle}</span>
        </div>
    );
};
