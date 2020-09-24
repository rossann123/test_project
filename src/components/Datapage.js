import React from 'react';
import Objects from "./Objects";


function Datapage(){
    return(
        <div style={{backgroundColor:Objects.color, height: "2000px",}}>
            <h1>{Objects.id}</h1>
        </div>
    )
}

export default Datapage;