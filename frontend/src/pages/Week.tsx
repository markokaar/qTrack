// @flow
import moment from 'moment';
import * as React from 'react';
import {GridEvent} from '../components/GridEvent';
import {IEvent} from "../IEvent";

type Props = {
    events: IEvent[],
    selectedDate: moment.Moment
};
export const Week = (props: Props) => {

    return (
        <>
            <div className="week">
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

                    <ul className="dayNumbers fw-bold">
                        <li>{moment(props.selectedDate).clone().weekday(1).date()}</li>
                        <li>{moment(props.selectedDate).clone().weekday(2).date()}</li>
                        <li>{moment(props.selectedDate).clone().weekday(3).date()}</li>
                        <li>{moment(props.selectedDate).clone().weekday(4).date()}</li>
                        <li>{moment(props.selectedDate).clone().weekday(5).date()}</li>
                        <li>{moment(props.selectedDate).clone().weekday(6).date()}</li>
                        <li>{moment(props.selectedDate).clone().weekday(7).date()}</li>
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

                <div className="eventsContainer eventsContainerWeek">
                    {props.events.map((event) => {
                        const eventStart = moment(event.start);

                        return (
                            eventStart.year() === props.selectedDate.year() &&
                            eventStart.month() === props.selectedDate.month() &&
                            eventStart.week() === props.selectedDate.week() &&
                            <GridEvent key={event.id} event={event}/>
                        )
                    })}
                </div>
            </div>

        </>
    );
};
