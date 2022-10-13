import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Home} from "./pages/Home";
import {NavBar} from "./components/NavBar";
import { Week } from "./pages/Week";
import { Day } from "./pages/Day";
import { Month } from "./pages/Month";
import { Settings } from "./pages/Settings";
import { Profile } from "./pages/Profile";


function App() {

    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/d" element={<Day />} />
                <Route path="/w" element={<Week />} />
                <Route path="/m" element={<Month />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={"Coming soon."} />
            </Routes>

        </BrowserRouter>
    )
}

export default App
