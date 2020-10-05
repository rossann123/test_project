import React from 'react';
import Home from "./components/Home";
import Objects from "./components/Objects";
import Cool from "./components/Cool";
import Nav from "./components/Nav";
import Green from "./components/Green";
import Red from "./components/Red";
import Blue from "./components/Blue";
import DataPage from "./components/DataPage"
import Data from "./components/Data";
import "./src/App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {

    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path={"/Blue"} component={Blue}/>
                    <Route path={"/Red"} component={Red}/>
                    <Route path={"/Green"} component={Green}/>
                    <Route path={"/cool"} component={Cool}/>
                    <Route path={"/dataPage/:id"} component={DataPage}/>
                    <Route path={"/data/:id1/:id2/:id3/:id4"} component={Data}/>
                    <Route path={"/objects"} component={Objects}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
