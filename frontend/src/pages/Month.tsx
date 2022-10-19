// @flow
import * as React from 'react';
import {useState} from "react";

type Props = {};
export const Month = (props: Props) => {
    const selectedMonth = 9;
    const selectedYear = 2022;
    const [dates, setDates] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

    const getWeekDay = (dayNumber: number) =>
        new Date(selectedYear, selectedMonth, dayNumber).getDay();

    return (
        <>
            <div className="week monthView">
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
                </div>

                <div className="timeContainer">
                    <ul className="times weekNumbers text-muted bg-light">
                        <li>39</li>
                        <li>40</li>
                        <li>41</li>
                        <li>42</li>
                        <li>43</li>
                        <li>44</li>
                    </ul>
                </div>

                <div className="eventsContainer eventsContainerWeek eventsContainerMonth">
                    {
                        dates.map((d) => {
                                const weekDay = getWeekDay(d - 1);
                                const row = Math.floor((d + (getWeekDay(dates[0]) - 2)) / 7);

                                return (
                                    <div key={d} className="eventBox monthDayNumber" style={{
                                        gridRow: (row * 5) + 1,
                                        gridColumn: (weekDay + 1) + "/" + (weekDay + 2)
                                    }}>
                                        <span>{d}</span>
                                    </div>
                                )
                            }
                        )
                    }
                </div>

                <div className="eventsContainer eventsContainerWeek eventsContainerMonth">
                    <div className="eventBox eventBoxMonth" style={{
                        gridRow: 12,
                        gridColumn: "7/8",
                        borderLeft: "7px solid #F3C794"
                    }}>
                        <span>Pancakes</span>
                    </div>
                </div>
                <div className="eventsContainer eventsContainerWeek eventsContainerMonth">
                    <div className="eventBox eventBoxMonth" style={{
                        gridRow: 13,
                        gridColumn: "7/8",
                        borderLeft: "7px solid lightblue"
                    }}>
                        <span>Work</span>
                    </div>
                </div>
            </div>
        </>
    );
};
