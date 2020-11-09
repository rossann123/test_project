import React from 'react'
import {Link} from "react-router-dom";

function Nav(){
    return(

        <nav>
            <button style={{backgroundColor:"lightblue"}}><Link to={"/cartPage"}>Cart</Link></button>
            <button style={{backgroundColor:"lightblue"}}><Link to={"/adminPage"}>Admin</Link></button>
            <button style={{backgroundColor:"lightblue"}}><Link to={"/storePage"}>Store</Link></button>
        </nav>
    )
}

export default Nav;

