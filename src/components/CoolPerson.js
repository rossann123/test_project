import React from 'react';
import fire from "./Fire";

function CoolPerson(){

    const [names, setNames]=React.useState([]);
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





    const handleDelete = (id)=>{
        db.collection("Cool People").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    };

    const CoolPeopleEles = names.map((sng, idx)=>
        <div key={idx} style={{color: 'white', backgroundColor: "lightblue"}}>
            <h1 style={{fontSize: sng.age + 'px'}}>{sng.name}</h1>
            <h1 style={{fontSize: sng.age + 'px'}}>{sng.age}</h1>
            <button onClick={()=>handleDelete(sng.id)}>Delete Person</button>
        </div>
    );

    return(
        <div>
            <div>{CoolPeopleEles}</div>
        </div>
    )
}
export default CoolPerson;