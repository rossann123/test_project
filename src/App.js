import React from 'react';
import Character from './components/Character';
import './index';
import './src/App.css';



function App() {
    const [array] = React.useState([{
        name: 'Cinder',
        power: 'fire',
        color: 'orange',
        age: 28,
        moves: ["Trailblazer, ", "Inferno, ", "Fire Flash"]
    }, {
        name: 'Aganos',
        power: 'rock',
        color: '#009999',
        age: 900000,
        moves: ["Payload Assault, ", "Pulverize, ", "Ruin"]
    }, {
        name: 'Jago',
        power: 'Tiger Spirit',
        color: '#336699',
        age: 25,
        moves: ["Edokuken, ", "Tiger Fury, ", "Wind Kick"]
    }])
    const arrayEles = array.map((bx, idx)=>
        <Character name={bx.name} age={bx.age} power={bx.power} color={bx.color} moves={bx.moves} key={idx}/>
    );

    return (
        <div className="App">
            {arrayEles}
        </div>
    );

}

export default App;
