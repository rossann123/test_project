import React from 'react';

import fire from "./Fire";



function CoolPerson(){



    const [names, setNames]=React.useState([]);

    const [name , setName]=React.useState({

        name: "",

        age:"",



    });

    const [submit, setSubmit]=React.useState(false);

    const db = fire.firestore();



    React.useEffect(()=>{

        let newItems = [];



        db.collection("Cool People").get().then(function(snapshot){

            snapshot.forEach(function(doc){

                const object = doc.data();



                let item ={

                    name: object.name,

                    age:object.age,

                    id:doc.id

                };



                newItems.push(item);



            });



            setNames(newItems);

        });





    },[db, submit]);



    const handleChange = prop => event =>{

        setName({

            ...name, [prop]: event.target.value

        });

    };



    const handleSubmit = ()=>{

        if(name.name.length > 2) {





            db.collection("Cool People").add(name).then(() => {

                setName({

                    name: "",

                    age: "",

                });

                setSubmit(!submit);

            })

        }else{

            alert("Name must be more than one character");

        }

    };



    const handleDelete = (id)=>{

        db.collection("Cool People").doc(id).delete().then(()=>{

            setSubmit(!submit);

        })

    };



    const CoolPeopleEles = names.map((people, idx)=>

        <div key={idx}>

            <h1 style={{fontSize: people.age + 'px'}}>{people.name}</h1>

            <h1 style={{fontSize: people.age + 'px'}}>{people.age}</h1>

            <button onClick={()=>handleDelete(people.id)}>Delete Person</button>

        </div>

    );



    return(

        <div>
            <input type = "text" placeholder={"Name..."} onChange={handleChange("name")}/>

            <input placeholder={"Age..."} onChange={handleChange("age")}/>

            <button onClick={handleSubmit}>Submit</button>

            <div>{CoolPeopleEles}</div>

        </div>

    )

}

export default CoolPerson;