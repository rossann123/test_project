import React from 'react';
import fire from "./Fire";

function Form(){
    const [names, setNames]=React.useState([]);
    const [submit, setSubmit]=React.useState(false);
    const db = fire.firestore();

    const handleChange = prop => event =>{
    setNames({
        ...names, [prop]: event.target.value
    });
};

const handleSubmit = ()=>{
    db.collection("people").add(names).then(()=>{
        setNames({
            name:"",
            age:"",
        });
        setSubmit(!submit);
    })
};



return(
    <div>
        <input placeholder={"Name..."} onChange={handleChange("name")}/>
        <input placeholder={"Age..."} onChange={handleChange("age")}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
)
}
export default Form;

