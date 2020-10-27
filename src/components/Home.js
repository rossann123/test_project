import React from 'react';
import Box from "./Box";
import style from "../style/style";

function Home(){
    const [toggle, setToggle] = React.useState("Hiya");
    const [color, setColor]= React.useState("blue");
    const [boxInfo]=React.useState([{name:"Anna", age:20},{name:"Kenzie", age:21},{name:"Emily", age:22}]);

    const boxEles = boxInfo.map((bx, idx)=>
        <Box name={bx.name} age={bx.age} key={idx}/>
    );

    return (
        <div className="homePage" style={{backgroundColor:color, color: "white"}}>
            <div className="cool">
                {toggle}
            </div>
            <div style={style.exampleBox}></div>
            <button onClick={()=>setToggle("Hello there")}>Click Me</button>
            <button onClick={()=>setColor("red")}>Change Color</button>
            {boxEles}
        </div>
    );
}

export default Home;