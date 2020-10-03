import React from "react";
import Box from "../Box";


function Data(props){

    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState ("black");
    const [data, setData] = React.useState([{id: "Box"}]);
    const [submit, setSubmit] = React.useState(false);

    const colors = ["blue","red","yellow"];
    const randColor = colors[Math.floor(Math.random() * colors.length)];

    React.useEffect(()=>{
        if (count === 0){
            setColor("black")
        }
        else if(count % 5 ===0) {
            setColor(randColor)
        }
        else{
            setColor("black")
        }

    }, [color, randColor, count]);

    React.useEffect(()=>{
        let ogData = data;
        ogData.push({id: "New Box"});
        setData(ogData);
    }, [data, submit]);


    let boxEles = data.map((it, idx)=>
        <Box name={it.id}/>
    )
    function refreshPage() {
        window.location.reload(false);
    }
    function increment(){
        setCount  (count + 1);
        if (count % 2 !== 0){
            setSubmit(!submit);
        }
        else{
            setSubmit(submit);
        }
    }

    return (
        <div>
            <h1>{props.match.params.id}</h1>
            <button onClick={increment}>Increase by 1</button>
            <button onClick={refreshPage}>Reset</button>
            <h3>{count}</h3>
            <div style={{marginLeft: "20px", marginTop: "20px", backgroundColor: color, width: "200px"}}>{boxEles}</div>
            <div style = {{backgroundColor:color, height: "100px", width: "100px"}}></div>
        </div>
    )
}
export default Data;