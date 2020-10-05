import React from "react";

function Data(props){
    return(
        <div style={{backgroundColor: props.match.params.id4}}>
            <h1>Object ID: {props.match.params.id1}</h1>
            <h2>Name: {props.match.params.id2}</h2>
            <h2>Age: {props.match.params.id3}</h2>
            <h2>Color: {props.match.params.id4}</h2>
        </div>
    );
}

export default Data;