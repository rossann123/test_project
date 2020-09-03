import React from "react";

function Box2(props) {
    const [name] = React.useState(props.name)
    const [number, setNumber] = React.useState(22)


    return <div>
        <h1>{name}</h1>
        <button onClick={()=>setNumber(number+1)}>I am {number} years old</button>

    </div>
}
export default Box2;