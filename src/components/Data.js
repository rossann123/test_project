import React from "react";

function Data(props){
    return(
        <div>
            <h1>Name: {props.match.params.id1}</h1>
            <h2>Category: {props.match.params.id2}</h2>
            <h2>Value: {props.match.params.id3}</h2>
            <h2>Image: {props.match.params.id4}</h2>
        </div>
    );
}

export default Data;