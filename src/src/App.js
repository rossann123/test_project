import React from 'react';

import './App.css';

function App() {

    const [boxInfo]=React.useState([{name:"Anna", age:20}]);
    const boxEles = boxInfo.map((bx, idx)=>
        <Box name={bx.name} age={bx.age} key={idx}/>
    );

    return <div className="App">
        {boxEles}
    </div>
}

export default App;
