import React from "react" ;
// import styled from "styled-components";
import "./style.css";

function Cards(props) { return(
  <img className = "cardstyle" src={props.imagesrc} height="200" width="200" alt="text" onClick = {() => props.cardClicked(props.id)}/>
)
}
export default Cards;