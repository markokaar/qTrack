// @flow
import * as React from 'react';

// Event length in minutes // 1 min step.
// Event start currently in format "700" = 07:00. // 15 min step.
type Props = {
    eventStart: Date,
    eventEnd: Date,
    eventColor: string,
    eventTitle: string
};

export const GridEvent = (props: Props) => {
    const startDay = props.eventStart.getDay() + 1;
    const startTime = props.eventStart.getHours() * 100 + props.eventStart.getMinutes() * 100 / 60
    const eventLength: number = (props.eventEnd.getTime() - props.eventStart.getTime()) / 1000 / 60;

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
