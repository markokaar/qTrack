// @flow
import * as React from 'react';
import {GridEvent} from '../components/GridEvent';

type Props = {};
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
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                    </ul>

                    <ul className="dayNumbers fw-bold">
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
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

                <div className="eventsContainer eventsContainerWeek">
                    <GridEvent day={3} timeStart={700} eventLength={120}
                               eventColor={'lightgreen'}
                               eventContent={'Example event.'}/>
                    <GridEvent day={3} timeStart={925} eventLength={180}
                               eventColor={'lightpink'}
                               eventContent={'Lorem impsum'}/>
                    <GridEvent day={4} timeStart={625} eventLength={90}
                               eventColor={'gold'}
                               eventContent={'Another event.'}/>
                    <GridEvent day={1} timeStart={900} eventLength={540}
                               eventColor={'lightblue'}
                               eventContent={'Work.'}/>

                    <GridEvent day={7} timeStart={700} eventLength={120}
                               eventColor={'#F3C794'}
                               eventContent={'Pancakes'}/>
                    <GridEvent day={7} timeStart={900} eventLength={180}
                               eventColor={'lightblue'}
                               eventContent={'Work'}/>

                </div>
            </div>

        </>
    );
};