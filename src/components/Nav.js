import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/objects"}>Objects</Link>
            <Link to={"/Cool"}>Cool</Link>
        </nav>
    )

}

export default Nav;