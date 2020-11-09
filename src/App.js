import React from 'react';
import Nav from "./components/Nav";
import CartPage from "./components/CartPage";
import AdminPage from "./components/AdminPage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import StorePage from "./components/StorePage";

function App() {

    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path={"/admin"} component={AdminPage}/>
                    <Route path={"/cart"} component={CartPage}/>
                    <Route path={"/"} component={StorePage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;