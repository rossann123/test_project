import React from 'react';
import Cool from "./components/Cool";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Green from "./components/Green";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Objects from "./components/Objects";
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {



    return(
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path={"/Red"} component={Red}/>
                    <Route path={"/Green"} component={Green}/>
                    <Route path={"/Blue"} component={Blue}/>
                    <Route path={"/data"} component={Objects}/>
                    <Route path={"/cool"} component={Cool}/>
                    <Route path={"/Objects"} component={Objects}/>
                    <Route path={"/"} component={Home}/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
