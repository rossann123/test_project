import React from 'react';
import Cool from "./components/Cool";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Data from "./components/Data";
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
                    <Route path={"/data/:id"} component={Data}/>
                    <Route path={"/cool"} component={Cool}/>
                    <Route path={"/"} component={Home}/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
