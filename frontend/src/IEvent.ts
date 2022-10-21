export interface IEvent {
    id: number,
    title: string
    start: string,
    end: string,
    notification: boolean,
    repeat: number,
    calendarGroup: string,
    description: string,
}
