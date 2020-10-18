import React from "react";
import {Link} from "react-router-dom";
import data from "./Data";
import Box from "../Box";
function DataPage(props){

    const boxInfo = data.map((bx, idx)=>
        <Box name={bx.name} category={bx.category} value={bx.value} img={bx.img} key={idx}/>
    );

    return(
        <div>
            {boxInfo.filter(funko => funko.props.category === props.match.params.id).map(filteredFunko => (
                <div className={"container"}>
                    <div className={"item"}>
                        <h1>{"Name: " + filteredFunko.props.name}</h1>
                        <h2>{"Category: " + filteredFunko.props.category}</h2>
                        <h2>{"Value: " + filteredFunko.props.value}</h2>
                        <button><Link to={"/dataPage"+props.name}>More Info</Link></button>
                        <img src={filteredFunko.props.img} alt={"Funko"}/>
                    </div>

                </div>
            ))}
            {boxInfo.filter(funko => funko.props.name === "Jim").map(filteredFunko => (
                <div className={"container"}>
                    <div className={"item"}>
                        <h1>{"Name: " + filteredFunko.props.name}</h1>
                        <h2>{"Category: " + filteredFunko.props.category}</h2>
                        <h2>{"Value: " + filteredFunko.props.value}</h2>
                        <img src={filteredFunko.props.img} alt={"Funko"}/>

                    </div>
                </div>
            ))}

        </div>
    )
}

export default DataPage;