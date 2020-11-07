import React from 'react'
import './indexstyle.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PhoneCountry from './Phonecountry';
import About from './about';
import HomePhone from './HomePhone';

export default function Index() {
    return (
        <div>
            <Router>
                <div>
                    <div className="phone-navbar">
                        <nav>
                            <ul>
                                <li>
                                    <Link className="td" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="td" to="/country">Search By Country</Link>
                                </li>
                                <li>
                                    <Link className="td" to="/about">About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="main-body">
                        <Switch >
                            <Route path="/country">
                                <PhoneCountry />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <HomePhone />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )
}
