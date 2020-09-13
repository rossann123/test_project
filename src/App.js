import React from 'react';
import './style/App.css';
import Rectangle from "./components/Rectangle";
import Block from "./components/Block";
import Colorblocks from "./components/Colorblocks";
import './style/index.css';
import './index';
import './components/Colorblocks'





function App(props) {

    let [backColor, setColor]=React.useState(props.backColor)
    let [borderColor, setColor2]=React.useState(props.borderColor)
    const onClick = ()=> {
        setColor("red");
        setColor2("blue");
        if (onClick(backColor = "red", borderColor="blue")){
            setColor("blue");
            setColor2("green");
        }
        else {
            if (onClick(backColor = "blue", borderColor = "green")){
                setColor("green");
                setColor2("red");
            }
        }
    };
    return <>
        <Rectangle/>
        <Rectangle/>
        <Rectangle/>
        <Block borderColor={"black"} backColor={"red"}/>
        <Block borderColor={"purple"} backColor={"green"}/>
        <Block borderColor={"blue"} backColor={"yellow"}/>

        <Colorblocks borderColor={"blue"} backColor={"red"}/>
        <Colorblocks borderColor={"blue"} backColor={"red"}/>
        <Colorblocks borderColor={"blue"} backColor={"red"}/>



    </>


}

export default App;
