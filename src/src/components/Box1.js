import React from 'react';

function Box1(props) {
    const [name] = React.useState(props.name)

    return <div>
        <h1>{name}</h1>
    </div>
}

export default Box1;