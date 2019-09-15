import React, {Component} from "react";
import {Switch, Route, NavLink} from "react-router-dom";

import "../styles/App.css";

import Users from "./Users";
import Repositories from "./Repositories";

class App extends Component {

    render() {
        return (
            <div className="all">
                <div className="menu">
                    <ul>
                        <li><NavLink to="/users" activeClassName="activeLink">User list</NavLink></li>
                        <li><NavLink to="/repos" activeClassName="activeLink">Repository list</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Switch>
                        <Route path="/users" component={Users}/>
                        <Route path="/repos" component={Repositories} />
                    </Switch>
                </div>
            </div>
        );
    }

}
export default App;