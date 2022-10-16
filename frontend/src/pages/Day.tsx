// @flow
import * as React from 'react';
import {GridEvent} from '../components/GridEvent';

type Props = {};
export const Day = (props: Props) => {
    return (
        <>
            <div className="week">
                <div className="header">
                    <ul className="splitter">
                        <li></li>
                    </ul>

                    <ul className="selectedDay fw-bold text-muted">
                        <li>Sunday</li>
                    </ul>

                    <ul className="selectedDayNumber fw-bold">
                        <li>16</li>
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
                    <GridEvent day={1} timeStart={700} eventLength={120}
                               eventColor={'#F3C794'}
                               eventContent={'Pancakes'}/>
                    <GridEvent day={1} timeStart={900} eventLength={180}
                               eventColor={'lightblue'}
                               eventContent={'Work'}/>
                </div>
            </div>

        </>
    );
};