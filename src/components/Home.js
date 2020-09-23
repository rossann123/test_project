import React from "react";
import {Link} from "react-router-dom";
function Home(){
    return (
        <div className="homePage">
            <div className="box1" style={{marginTop: "20px", height: "100px", width: "100px", backgroundColor:"Red"}}>
                <Link to={"/Red"}>Red</Link>
            </div>
            <div className="box1" style={{marginTop: "20px", height: "100px", width: "100px", backgroundColor:"Green"}}>
                <Link to={"/Green"}>Green</Link>
            </div>
            <div className="box1" style={{marginTop: "20px", height: "100px", width: "100px", backgroundColor:"Blue"}}>
                <Link to={"/Blue"}>Blue</Link>
            </div>

        </div>
    )
}

export default Home;