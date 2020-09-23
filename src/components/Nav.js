import React from 'react';
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/cool"}>Cool</Link>
            <Link to={"/Data"}>Data</Link>
            <Link to={"/"}>Home</Link>

        </nav>
    )
}

export default Nav;