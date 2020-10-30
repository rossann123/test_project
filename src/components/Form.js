import React from 'react';
import fire from "./Fire";
import TextField from "@material-ui/core/TextField";
function Form(){
    const [names, setNames]=React.useState([]);
    const [submit, setSubmit]=React.useState(false);
    const [text, setText] = React.useState("");
    const db = fire.firestore();

    const handleChange = prop => event =>{
        setNames({
            ...names, [prop]: event.target.value
        });
    };

    const handleText = (event) => {
        let characters = /^[A-Za-z]+$/;


        if (event.target.value.match(characters)) {
            setText(event.target.value);
        } else if (event.target.length < 2) {
            setText("error");

        } else {
            setText("error1");
        }
    };

    const handleSubmit = ()=>{
        db.collection("Cool People").add(names).then(()=>{
            setNames({
                name:"",
                age:"",
            });
            setSubmit(!submit);
        })
    };

    const handleSubmit1 = (event) => {
        if (text.length < 2) {
            alert("Must have more than one character");
        }
    };





    return(
        <div>
            <form onSubmit={handleSubmit1}>
                <TextField  onChange={handleText}/>
                <TextField onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form;

