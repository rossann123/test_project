import React from 'react';
import './style/App.css';
import Rectangle from "./components/Rectangle";
import Block from "./components/Block";
import Colorblocks from "./components/Colorblocks";
import './style/index.css';
import './index';
import './components/Colorblocks'





function App() {


    return <>
        <Rectangle/>
        <Rectangle/>
        <Rectangle/>
        <Block borderColor={"black"} backColor={"red"}/>
        <Block borderColor={"purple"} backColor={"green"}/>
        <Block borderColor={"blue"} backColor={"yellow"}/>

        <Colorblocks/>
        <Colorblocks/>
        <Colorblocks/>





    </>


}

export default App;
