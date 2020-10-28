import React from 'react';
import './src/App.css'
import Home from "./components/Home";
import DataPage from "./components/DataPage";
import Nav from "./components/Nav";
import CoolPerson from "./components/CoolPerson"
import Form from "./components/Form";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import FirePage from "./components/FirePage";

function App() {


    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path={"/CoolPerson"} component={CoolPerson}/>
                    <Route path={"/firePage"} component={FirePage}/>
                    <Route path={"/form"} component={Form}/>
                    <Route path={"/dataPage/:id"} component={DataPage}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;