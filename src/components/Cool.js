import React from "react";
function Cool() {
    const [sentence]=React.useState("Music is life");
    const [color]=React.useState("red");








    return(
        <div style={{backgroundColor:color, minHeight:"100px", maxWidth:"300px"}}>
            <h1>Do you like music? {sentence}</h1>
        </div>
    )
}

export default Cool;
