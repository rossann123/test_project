import React from "react";
import {Link} from "react-router-dom";
import Box from "../Box";

function  DataPage(){
    const data = [{name:"Emily", age:22, color:"purple", id:"Friend"},
        {name:"Kenzie", age:21, color:"pink", id:"Roomie"},
        {name:"Wesley", age:20, color:"red", id:"Singer"}];

    return(
        <div>
            <nav>
                <Link to={`/data/${data[0].id}/${data[0].name}/${data[0].age}/${data[0].color}`}>
                    <Box display={"Name: "+data[0].name} color={data[0].color}/></Link>
                <Link to={`/data/${data[1].id}/${data[1].name}/${data[1].age}/${data[1].color}`}>
                    <Box display={"Name: "+data[1].name} color={data[1].color}/></Link>
                <Link to={`/data/${data[2].id}/${data[2].name}/${data[2].age}/${data[2].color}`}>
                    <Box display={"Name: "+data[2].name} color={data[2].color}/></Link>
            </nav>

        </div>
    )
}

export default DataPage;