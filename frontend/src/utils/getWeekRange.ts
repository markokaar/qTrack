import moment, {Moment} from "moment";

// In: date in type of Moment
// Out: formatted string of selected week range.
// Example out: "10 - 17 Oct 2022", "31 Oct - 7 Nov 2022"
export const getWeekRange = (selectedDate: Moment): string => {
    const weekStart = moment(selectedDate).clone().weekday(0);
    const weekEnd = moment(selectedDate).clone().weekday(7);

    const startFormat = weekStart.month() === weekEnd.month() ? "D" : "D MMM";

    return (weekStart.format(startFormat) + " - " + weekEnd.format("D MMM YYYY"));
}