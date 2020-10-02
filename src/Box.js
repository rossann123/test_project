import React from 'react';
import Data from "./components/Data";

function Box(props){

    const [id]=React.useState(props.name);


    var [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState ("black");

    const colors = ["blue","red","yellow"];
    const randColor = colors[Math.floor(Math.random() * colors.length)];

    React.useEffect(()=>{
        if (count === 0){
            setColor("black")
        }
        else if(count % 5 ===0){
            setColor(randColor)
        }
        else{
            setColor("black")
        }

    }, [color, randColor, count]);


    return(
        <div style={{color: "white", backgroundColor: color, height: "200px", width: "200px", marginTop: "20px", marginBottom: "20px"}}>
            {id}
        </div>
    )
}

export default Box;
