import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/dataPage/Anna"}>Anna</Link>
            <Link to={"/dataPage/Kenzie"}>Kenzie</Link>
            <Link to={"/compPage"}>Component</Link>
            <Link to={"/firePage"}>Fire</Link>
        </nav>
    )
}

export default Nav;