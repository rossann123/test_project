import React from 'react';

function Box(props){

    const [display] = React.useState(props.display);

    return (
        <div>
            <h1>{display}</h1>
        </div>
    )


}

export default Box;
