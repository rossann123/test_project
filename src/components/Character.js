import React from "react";
function Character(props) {
    const [name]=React.useState(props.name);
    const [power]=React.useState(props.power);
    const [age]=React.useState(props.age);
    const [moves]=React.useState(props.moves);
    const [color]=React.useState(props.color);
    const [items]=React.useState(["Maroon 5", "Hoodie Allen", "Halsey"])

    const[toggle, setToggle]=React.useState("");

    const itemEles =items.map((it, idx)=>
        <h3 key={idx}>{it}</h3>
    );




    return(
        <div
            className={"Character"}
            style={{backgroundColor:color, minHeight:"100px", maxWidth:"200px"}}
            onClick={()=>setToggle("*clicked*")}
        >
            <h1>Name: {name}</h1>
            <h2>Superpower: {power}</h2>
            {props.age>50?<h3>I am too old</h3>:<h3>Age: {age}</h3>}
            <h3>Special Moves: {moves}</h3>
            {toggle==="*clicked*"?<h3>My Power is: {power}</h3>:<h3> </h3>}
            <p>My Array: {itemEles}</p>
        </div>
    )
}

export default Character;