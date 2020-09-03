import React from 'react';

import './App.css';
import Box2 from "./components/Box2";
import Box1 from "./components/Box1";
import NavBar1 from "./components/NavBar1";
function App() {

    return <div className="App">
        <NavBar1 component={"NavBar1"}/>
        <Box1 name={"Anna"}/>
        <Box2 name={"Hoyt thinks the coolest color is red"} />
        <Box2 name={"Kenzie thinks the coolest color is pink"}/>
        <Box2 name={"Emily thinks the coolest color is purple"}/>
    </div>
}

export default App;
