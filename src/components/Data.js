import React from 'react';
import {Link} from "react-router-dom";



function Data(props){
    const [name]=React.useState(props.name);
    const [age]=React.useState(props.age);
    const [color]=React.useState(props.color);
    const [id]=React.useState(props.id);

    return(
        <div style={{backgroundColor:color, Height:"200px", Width:"200px"}}>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <Link to={"/data/:id"}>{id}</Link>



        </div>
    )
}

export default Data;