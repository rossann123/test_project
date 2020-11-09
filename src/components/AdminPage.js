import React from "react";
import fire from "./Fire";
function AdminPage(){

    const [names, setNames]=React.useState([]);
    const [name , setName]=React.useState({

        name: "",
        price:"",
        stock:"",
        image:"",

    });

    const [submit, setSubmit]=React.useState(false);
    const db = fire.firestore();

    React.useEffect(()=>{

        let newItems = [];

        db.collection("products").get().then(function(snapshot){

            snapshot.forEach(function(doc){

                const object = doc.data();

                let item ={
                    name: object.name,
                    price:object.price,
                    stock:object.stock,
                    image:object.image,
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

            db.collection("products").add(name).then(() => {

                setName({

                    name: "",
                    price: "",
                    stock: "",
                });

                setSubmit(!submit);

            })

        }else{
            alert("Item must be more than one character");
        }
    };

    const handleDelete = (id)=>{
        db.collection("products").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    };



    const productEles = names.map((product, idx)=>

        <div className={product.price >= 10?"highStock":"lowStock"} style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto'}} key={idx}>

            <h1>{product.name}</h1>
            <h2>$ {product.price}</h2>
            <h3>Stock: {product.stock}</h3>
            <img src={product.image} alt="Product" style={{height: "100px", width: "100px"}}/>

            <button onClick={()=>handleDelete(product.id)}>Delete Product</button>

        </div>
    );


    return(

        <div>
            <input type = "text" placeholder={"Name..."} onChange={handleChange("name")}/>
            <input placeholder={"Price"} onChange={handleChange("price")}/>
            <input placeholder={"Stock"} onChange={handleChange("stock")}/>
            <input placeholder={"URL"} onChange={handleChange("image")}/>
            <button onClick={handleSubmit}>Submit</button>
            <div>{productEles}</div>

        </div>
    )

}

export default AdminPage;