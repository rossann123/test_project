import React from 'react'
import data from "./Data";
import Box from "./Box";

function Wrapper(){
    const dataEles = data.map((bx, idx)=>
        <Box name={bx.name} category={bx.category} value={bx.value} img={bx.img} id = {bx.id} key={idx} />
    );

    return(

        <div>
            {dataEles}
        </div>

    )
} export default Wrapper;