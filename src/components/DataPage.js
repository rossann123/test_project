import React from 'react';
import data from "./Data";
import Box from "./Box";



function DataPage(props){
    const dataEles = data.map((bx, idx)=>
        <Box name={bx.name} category={bx.category} value={bx.value} img={bx.img} id = {bx.id} key={idx} />
    );

    return(
        <div>

            {dataEles.filter(funko => funko.props.category === props.match.params.id).map(Funko => (

                <div className="character">
                    <div>
                        <h1>{"Name: " + Funko.props.name}</h1>
                        <h2>{"Category: " + Funko.props.category}</h2>
                        <h2>{"Value: " + Funko.props.value}</h2>
                        <img src={Funko.props.img} alt={props.img}/>

                    </div>
                </div>
            ))}

            {dataEles.filter(funko => funko.props.name === props.match.params.id).map(Funko => (
                <div>
                    <div className="character">
                        <h1>{"Name: " + Funko.props.name}</h1>
                        <h2>{"Category: " + Funko.props.category}</h2>
                        <h2>{"Value: " + Funko.props.value}</h2>
                        <img src={Funko.props.img} alt={props.img}/>

                    </div>
                </div>
            ))}
        </div>
    )
}
export default DataPage;