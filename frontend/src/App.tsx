import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Home} from "./pages/Home";
import {NavBar} from "./components/NavBar";
import {Week} from "./pages/Week";
import {Day} from "./pages/Day";
import {Month} from "./pages/Month";
import {Settings} from "./pages/Settings";
import {Account} from "./pages/Account";
import {CalendarNav} from "./components/CalendarNav";
import {Index} from "./pages/Index";
import {PagesNav} from "./components/PagesNav";
import {useState} from "react";
import {IEvent} from "./IEvent";
import sampleEvents from './sampleData.json'
import moment from "moment";

function App() {
    // Auth
    const [isLogged, setIsLogged] = useState<boolean>(true);
    const handleLogin = () => setIsLogged((previous) => !previous);

    // Events
    const [events, setEvents] = useState<IEvent[]>(sampleEvents);
    const addEvent = (event: IEvent) => setEvents(current => [...current, event]);

    // Date
    const [selectedDate, setSelectedDate] = useState<moment.Moment>(moment("2022-10-15"));
    const handleNextDay = (timeframe: moment.Duration) => {
        setSelectedDate(moment(selectedDate.add(timeframe)));
    }
    const handlePreviousDay = (timeframe: moment.Duration) => {
        setSelectedDate(moment(selectedDate.subtract(timeframe)));
    }
    const handleToday = () => setSelectedDate(moment());

    // CalendarNav
    const calNav: JSX.Element =
        <CalendarNav selectedDate={selectedDate}
                     handleAddEvent={addEvent}
                     handleNextDay={handleNextDay}
                     handlePreviousDay={handlePreviousDay}
                     handleToday={handleToday}
        />;

    return (
        <BrowserRouter>
            <NavBar isLogged={isLogged} handleLogin={handleLogin}/>
            <Routes>
                <Route path="/d" element={
                    <>
                        {calNav}
                        <Day selectedDate={selectedDate}
                             events={events}/>
                    </>
                }/>
                <Route path="/w" element={
                    <>
                        {calNav}
                        <Week events={events}/>
                    </>
                }/>
                <Route path="/m" element={
                    <>
                        {calNav}
                        <Month/>
                    </>
                }/>

                <Route path="/" element={
                    <>
                        <PagesNav/>
                        <Index/>
                    </>
                }/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/settings" element={<Settings/>}/>
                {/* <Route path="/logout" element={"Coming soon."}/> */}
                <Route path="*" element={<Index/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App
