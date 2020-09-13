import React from 'react';
import './Block';


function Colorblocks() {
    const [abackgroundColor,setBackground]=React.useState("red")
    const [aborderColor, setBorder]=React.useState("blue")

    const colorChange = ()=>{
        if(abackgroundColor === "red"){
            setBackground("blue")
            setBorder("green")
        }
        if(abackgroundColor === "blue"){
            setBackground("green")
            setBorder("red")
        }
        if(abackgroundColor === "green"){
            setBackground("red")
            setBorder("blue")
        }
    }







    return <div style={{borderStyle:"solid", height:"200px", width:"200px", backgroundColor:abackgroundColor, borderColor:aborderColor}} onClick={()=>colorChange()}>

    </div>
}
export default Colorblocks;