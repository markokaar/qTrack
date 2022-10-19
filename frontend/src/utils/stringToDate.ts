export const stringToDate = (date: string): Date => {
    let [year, month, day, hour, minute, second]: number[] = date.split(/[- :]/)
        .map(n => parseInt(n, 10));
    month--;
    day--; // TODO: Tempoorary quick fix for weekstart from sunday to monday.
    return new Date(year, month, day, hour, minute, second);
}
