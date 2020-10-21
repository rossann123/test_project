import React from 'react';

function Box(props){

    const [name]=React.useState(props.name);
    const [number, setNumber]=React.useState(props.age);
    const [color,setColor]=React.useState("#00FF00");
    const [items]=React.useState(["Cool", "Stuff", "Things"])

    const addUp = ()=>{
        setNumber(number+10);
        if(number>=80){
            setColor("#E0FFFF")
        }
    };

    let style ={
        backgroundColor:color
    };

    const thingEles = items.map((it, idx)=>
        <h3 key={idx}>{it}</h3>
    );


    return(
        <div className={props.name==="Emily"?"theOtherBox":"box"} style={style}>
            {props.name==="Anna"?<h1>Anna is the coolest</h1>:<h1>{name}</h1>}
            {/*{nameEle}*/}
            {number<100&&<button onClick={addUp}>Number is {number}</button>}
            {thingEles}
        </div>
    )
}

export default Box;