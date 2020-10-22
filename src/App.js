import React from 'react';
import "./App.css"
import Home from "./components/Home";
import DataPage from "./components/DataPage";
import Nav from "./components/Nav";
import CompPage from "./components/CompPage";
import Checklist from "./components/Checklist";
import SimpleStuff from "./components/SimpleStuff";
import SnackBar from "./components/SnackBar";
import AppBar from "./components/AppBar";
import Subscription from "./components/Subscription";
import Form from "./components/Form";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {


    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path={"/subscription"} component={Subscription}/>
                    <Route path={"/appBar"} component={AppBar}/>
                    <Route path={"/snackBar"} component={SnackBar}/>
                    <Route path={"/simpleStuff"} component={SimpleStuff}/>
                    <Route path={"/checklist"} component={Checklist}/>
                    <Route path={"/comp"} component={CompPage}/>
                    <Route path={"/form"} component={Form}/>
                    <Route path={"/dataPage/:id"} component={DataPage}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;