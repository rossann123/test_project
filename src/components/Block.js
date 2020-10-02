import React from 'react';


function Block() {
    const [color] = React.useState("red")



    return( <div style={{height:"100px", width:"100px"}}>
        {color}
    </div>
    )}
export default Block;
