import React from 'react';
import './Block';


function Colorblocks(props) {
    const [backColor]=React.useState(props.backColor)
    const [borderColor]=React.useState(props.borderColor)









    return <div style={{borderStyle:"solid", height:"200px", width:"200px", backgroundColor:backColor, borderColor:borderColor}}>

    </div>
}
export default Colorblocks;