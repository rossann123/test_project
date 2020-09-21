import React from "react";
function Box(props) {
    const [array]=React.useState( [{name:'Cinder', power: 'fire', color: 'orange', age: 28, moves;["Trailblazer", "Inferno", "Fire Flash"]},{name:'Aganos', power: 'rock', color: '#009999', age: 900000, moves;["Payload Assault", "Pulverize", "Ruin"]}, {name:'Jago', power: 'Tiger Spirit', color: '#336699', age: 25, moves;["Edokuken", "Tiger Fury", "Wind Kick"]}])

    const arrayEles = array.map((it,idx)=>
        <h3 key={idx}>{it}</h3>
    );


    return <div className={props.name==="Anna"?"theOtherBox":"box"}>
        {props.name==="Anna"?<h1>Anna is the coolest</h1>:<h1>{name}</h1>}
        {arrayEles}
        <button onClick={()=>setNumber(number+1)}>I am {number} years old</button>

    </div>
}
export default Box;