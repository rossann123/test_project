import React from 'react';
import Data from "./Data";

function Objects(){
    const [array]=React.useState([{
        name: "Anna",
        age: 20,
        color: "red",
        id:"My favorite color is red"
    },{
        name: "Emily",
        age: 22,
        color: "purple",
        id: "My favorite color is purple"
    },{
        name: "Kenzie",
        age: 21,
        color: "pink",
        id: "My favorite color is pink"
    }
    ]);
    const arrayEles = array.map((bx, idx)=>
        <Data name={bx.name}  age={bx.age} color={bx.color} id={bx.id} key={idx}/>
    );
    return(
        <div>
            {arrayEles}
        </div>
    )
}

export default Objects;