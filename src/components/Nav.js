
import React from "react";
import {Link} from "react-router-dom";

function Nav(){

    return(
        <nav>
            <button><Link to={"/"}>All Funkos</Link></button>
            <button><Link to={"/dataPage/games"}>Games</Link></button>
            <button><Link to={"/dataPage/television"}>Television</Link></button>
            <button><Link to={"/dataPage/animation"}>Animation</Link></button>
            <button><Link to={"/Page"}>Funko Page</Link></button>

        </nav>
    )
} export default Nav;