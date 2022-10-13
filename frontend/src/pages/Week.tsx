// @flow
import * as React from 'react';
import sampleData from '../sampleData.json'
import {WeekEvent} from "../components/WeekEvent";

type Props = {};
export const Week = (props: Props) => {
    return (
        <>
            <div className="week bg-light">
                <div className="header bg-dark bg-opacity-25">
                    <ul className="splitter">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <ul className="weekDays">
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                    </ul>

                    <ul className="dayNumbers">
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                    </ul>
                </div>

                <div className="timeContainer bg-dark bg-opacity-25">
                    <ul className="times">
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
                    </ul>
                </div>

                <div className="eventsContainer">
                    <WeekEvent day={3} timeStart={700} eventLength={120}
                               eventColor={'darkslategray'}
                               eventContent={'Example event.'}/>
                    <WeekEvent day={3} timeStart={925} eventLength={180}
                               eventColor={'navy'}
                               eventContent={'Lorem impsum'}/>
                    <WeekEvent day={4} timeStart={625} eventLength={90}
                               eventColor={'darkgoldenrod'}
                               eventContent={'Another event.'}/>
                    <WeekEvent day={1} timeStart={900} eventLength={540}
                               eventColor={'darkgreen'}
                               eventContent={'Work.'}/>
                </div>
            </div>

        </>
    );
};