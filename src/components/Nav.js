import React from 'react';
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/cool"}>Cool</Link>
            <Link to={"/Data"}>Data</Link>
        </nav>
    )
}

export default Nav;