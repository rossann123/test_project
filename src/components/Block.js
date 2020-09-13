import React from 'react';


function Block(props) {
    const [borderColor] = React.useState(props.borderColor)
    const [backColor] = React.useState(props.backColor)






    return <div style={{borderStyle:"solid", height:"100px", width:"100px", borderWidth:"2px", borderColor:borderColor, backgroundColor:backColor}}>

    </div>
}
export default Block;
