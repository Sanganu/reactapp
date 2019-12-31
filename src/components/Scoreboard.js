import React from "react";

function Scoreboard(props){
    return(<div className = "scoreboard">
    <h5>Score: {props.score}</h5>
    <span>TopScore: {props.topscore}</span>
    </div>)
}

export default Scoreboard;
