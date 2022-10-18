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


function App() {

    return (
        <BrowserRouter>
            <NavBar isLogged={true}/>

            <Routes>
                <Route path="/d" element={
                    <>
                        <CalendarNav selectedDate={'Oct 16, 2022'}/>
                        <Day/>
                    </>
                }/>
                <Route path="/w" element={
                    <>
                        <CalendarNav selectedDate={'10 - 16 Oct 2022'}/>
                        <Week/>
                    </>
                }/>
                <Route path="/m" element={
                    <>
                        <CalendarNav selectedDate={'Oct 2022'}/>
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
                <Route path="/logout" element={"Coming soon."}/>
                <Route path="*" element={<Index/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App
