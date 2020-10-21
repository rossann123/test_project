import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
function CompPage(){
    const [checked, setCheck]=React.useState(true);
    const [checked1, setCheck1]=React.useState(true);
    const [text, setText]=React.useState("");
    const handleCheck = (event)=>{
        setCheck(event.target.checked);
    };
    const handleCheck1 = (event)=>{
        setCheck1(event.target.checked1);
    };
     const handleText = (event)=>{
         setText(event.target.text);
     }
    return(
        <div>
            <Button variant={"contained"} color={"secondary"}>Some Button</Button>
            <Checkbox checked={checked} onChange={handleCheck} color={"red"}/>
            <Checkbox checked={checked1} onChange={handleCheck1}/>
            <TextField onChange={handleText} label={"Name"}/>
            <TextField onChange={handleText} label={"Number"}/>
            {text}
        </div>
    );
}
export default CompPage;