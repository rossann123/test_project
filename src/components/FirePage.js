import React from 'react';
import fire from "./Fire";

function FirePage(){

    const [songs, setSongs]=React.useState([]);
    const [song , setSong]=React.useState({
        Title: "",
        Album:"",
        Year:"",
    });
    const [submit, setSubmit]=React.useState(false);
    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems = [];

        db.collection("songs").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                const object = doc.data();

                let item ={
                    Title: object.Title,
                    Album:object.Album,
                    Year:object.Year,
                    id:doc.id
                };

                newItems.push(item);

            });

            setSongs(newItems);
        });


    },[db, submit]);

    const handleChange = prop => event =>{
        setSong({
            ...song, [prop]: event.target.value
        });
    };

    const handleSubmit = ()=>{
        db.collection("songs").add(song).then(()=>{
            setSong({
                Title:"",
                Album:"",
                Year:""
            });
            setSubmit(!submit);
        })
    };

    const handleDelete = (id)=>{
        db.collection("songs").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    };

    const songEles = songs.map((sng, idx)=>
        <div key={idx} onClick={()=>handleDelete(sng.id)}>
            <h1>{sng.Title}</h1>
            <h3>{sng.Album}</h3>
            <h6>{sng.Year}</h6>
        </div>
    );

    return(
        <div>
            <div>{songEles}</div>
            <input placeholder={"Title..."} onChange={handleChange("Title")}/>
            <input placeholder={"Album..."} onChange={handleChange("Album")}/>
            <input placeholder={"Year..."} onChange={handleChange("Year")}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default FirePage;