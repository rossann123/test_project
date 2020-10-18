import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import DataPage from "./components/DataPage";
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
                    <Route path={"/"} component={Wrapper}/>
                    <Route path={"/dataPage/:id"} component={DataPage}/>
                </Switch>
            </Router>
        </div>
    );
}


export default App;