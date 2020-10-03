import React from 'react';
import Nav from "./components/Nav";
import Data from "./components/Data";


import './style/App.css';
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

                </Switch>
            </Router>
        </div>
    );
}

export default App;
