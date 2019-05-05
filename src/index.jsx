import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Stu from './Components/student/student.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Stu">Stu</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Route
                                path="/Home"
                                render={props => (
                                    <Home />
                                )}
                            />

                            <Route
                                path="/About"
                                render={props => (
                                    <About />
                                )}
                            />

                            <Route
                                path="/Stu"
                                render={props => (
                                    <Stu />
                                )}
                            />
                        </li>
                    </ul>

                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
