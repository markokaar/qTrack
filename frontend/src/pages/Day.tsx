// @flow
import * as React from 'react';
import {GridEvent} from '../components/GridEvent';
import events from '../sampleData.json'
import {stringToDate} from "../utils/stringToDate";

type Props = {};
export const Day = (props: Props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDate = new Date(2022, 9, 16);

    return (
        <>
            <div className="week">
                <div className="header">
                    <ul className="splitter">
                        <li></li>
                    </ul>

                    <ul className="selectedDay fw-bold text-muted">
                        <li>{days[selectedDate.getDay()]}</li>
                    </ul>

                    <ul className="selectedDayNumber fw-bold">
                        <li>{selectedDate.getDate()}</li>
                    </ul>
                </div>

                <div className="timeContainer">
                    <ul className="times text-muted">
                        <small>
                            <li>00:00</li>
                            <li>01:00</li>
                            <li>02:00</li>
                            <li>03:00</li>
                            <li>04:00</li>
                            <li>05:00</li>
                            <li>06:00</li>
                            <li>07:00</li>
                            <li>08:00</li>
                            <li>09:00</li>
                            <li>10:00</li>
                            <li>11:00</li>
                            <li>12:00</li>
                            <li>13:00</li>
                            <li>14:00</li>
                            <li>15:00</li>
                            <li>16:00</li>
                            <li>17:00</li>
                            <li>18:00</li>
                            <li>19:00</li>
                            <li>20:00</li>
                            <li>21:00</li>
                            <li>22:00</li>
                            <li>23:00</li>
                        </small>
                    </ul>
                </div>

                <div className="eventsContainer">
                    {events.map((event) => {
                        const eventStart = stringToDate(event.eventStart);

                        // TODO: Remove '+1' from eventStart.getDate() if stringToDate.ts (and week view) is fixed.
                        return (
                            eventStart.getFullYear() === selectedDate.getFullYear() &&
                            eventStart.getMonth() === selectedDate.getMonth() &&
                            eventStart.getDate() + 1 === selectedDate.getDate() &&
                            <GridEvent key={event.id}
                                       eventStart={eventStart}
                                       eventEnd={stringToDate(event.eventEnd)}
                                       eventColor={event.eventColor}
                                       eventContent={event.eventContent}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
};
