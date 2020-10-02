import React from "react";
import Box from "../Box";


function Data (props){

    var [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState ("black");
    const [data, setData] = React.useState([{id: "Box"}]);
    const [submit, setSubmit] = React.useState(false);

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

    let ogData = data;

    React.useEffect(()=>{
        if (count % 2!==0) {
            setData(ogData);
            ogData.push({id: "New box"});
        }
    }, [data]);


    let boxEles = data.map((it, idx)=>
        <Box name={it.id}/>
    )
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <h1>{props.match.params.id}</h1>
            <button onClick={()=>setCount(count +1)}>Increase by 1</button>
            <button onClick={()=>setSubmit(!submit)}>Add Item</button>
            <button onClick={()=>setCount(count = 0)}>Reset</button>
            <button onClick={refreshPage}>Reset</button>
            <h3>{count}</h3>
            <div>{boxEles}</div>
            <div style = {{backgroundColor:color, height: "100px", width: "100px"}}></div>
        </div>
    )
}
export default Data;