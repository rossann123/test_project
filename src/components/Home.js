import React from "react";
import {Link} from "react-router-dom";
function Home(){
    return (
        <div className="homePage">
            <div className="block1" style={{marginTop: "20px", height: "100px", width: "100px", borderWidth: "2px", backgroundColor:"Green"}}>
                <Link to={"/Green"}>Green</Link>
            </div>
            <div className="block1" style={{marginTop: "20px", height: "100px", width: "100px", borderWidth: "2px", backgroundColor:"Blue"}}>
                <Link to={"/Blue"}>Blue</Link>
            </div>
            <div className="block1" style={{marginTop: "20px", height: "100px", width: "100px", borderWidth: "2px", backgroundColor:"Red"}}>
                <Link to={"/Red"}>Red</Link>
            </div>

        </div>
    )
}

export default Home;