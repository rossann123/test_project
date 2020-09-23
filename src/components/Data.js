import React from 'react';



function Data(props){
    const [name]=React.useState(props.name);
    const [age]=React.useState(props.age);
    const [color]=React.useState(props.color);
    const [id]=React.useState(props.id);
    const [toggle, setToggle] = React.useState("");
    return(
        <div style={{backgroundColor:color, Height:"200px", Width:"200px"}} onClick={()=>setToggle("*clicked*")}>
            <h2>Name:{name}</h2>
            <h3>Age: {age}</h3>
            {toggle==="*clicked*"?<h3>{id}</h3>:<h3>ID:</h3>}

        </div>
    )
}

export default Data;