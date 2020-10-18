import React from 'react';
import {Link} from "react-router-dom";

function Box(props){

    const [name]=React.useState(props.name);
    const [category]=React.useState(props.category);
    const [value]=React.useState(props.value);
    const [img]=React.useState(props.img);


    return(
        <div class={"container"}>
            <div class={"item"}>
                <h1>Name: {name}</h1>
                <h2>Category: {category}</h2>
                <h3>Value: {value}</h3>
                <button><Link to={"/Page"}>More Info</Link></button>
                <img src={img} alt="Funko"/>
            </div>
        </div>
    )
}

export default Box;
