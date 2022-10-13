// @flow
import * as React from 'react';

// Event length in minutes // 1 min step.
// Event start currently in format "700" = 07:00. // 15 min step.
type Props = {
    day: number,
    timeStart: number,
    eventLength: number,
    eventColor: string,
    eventContent: string
};

export const WeekEvent = (props: Props) => {
    return (
        <div className="eventBox" style={{
            height: (props.eventLength / 15) + "rem",
            gridRow: (props.timeStart / 25) + 1,
            gridColumn: props.day + "/" + (props.day + 1),
            backgroundColor: props.eventColor
        }}>
            <span>{props.eventContent}</span>
        </div>
    );
};