import React from "react";
function AdminPage(){

    const [name , setName]=React.useState({

        name: "",
        category: "",
        cost: "",
        stock: "",
        image: ""



    });
    const handleSubmit = ()=>{
        setName({
            name: "",
            category: "",
            cost: "",
            stock: "",
            image: ""

        });
    }
    const handleChange = prop => event =>{

        setName({

            ...name, [prop]: event.target.value

        });
    };



    return(

        <div>
            <input type = "text" placeholder={"Name..."} onChange={handleChange("name")}/>
            <input placeholder={"Category..."} onChange={handleChange("category")}/>
            <input placeholder={"Cost..."} onChange={handleChange("cost")}/>
            <input placeholder={"Stock..."} onChange={handleChange("stock")}/>
            <input placeholder={"Image..."} onChange={handleChange("image")}/>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )

}

export default AdminPage;