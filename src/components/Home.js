import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
function Home(){
    const [checked, setCheck]=React.useState(true);
    const [checked1, setCheck1]=React.useState(true);
    const [checked2, setCheck2]=React.useState(true);
    const [text, setText]=React.useState("");
    const GreenCheckbox = withStyles({
        root: {
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);
    const handleCheck = (event)=>{
        setCheck(event.target.checked);
    };
    const handleCheck1 = (event)=>{
        setCheck1(event.target.checked);
    };
    const handleCheck2 = (event)=>{
        setCheck2(event.target.checked);
    };
    const handleText = (event)=>{
        setText(event.target.text);
    }
    return(
        <div>
            <Button variant={"contained"} color={"primary"}>Snack Bar</Button>
            <GreenCheckbox checked={checked} onChange={handleCheck}/>
            <Checkbox checked={checked1} onChange={handleCheck1}/>
            <Checkbox checked={checked2} onChange={handleCheck2}/>
            <TextField onChange={handleText} label={"Name"}/>
            <TextField onChange={handleText} label={"Number"}/>
            {text}
        </div>
    );
}
export default Home;