import React from 'react';
// import styled from 'styled-components';
// import "./style.css";

// const Button = styled.button`
//     font-family: 
//     font-size: 2rem;
//     border: 5px
//     border-radius: 10px;
// `;



function Header (props)  {
  return(<div className="headerline">
         <h2>Memory GAME</h2>
         <h5>Score: {props.score}</h5>
         <span>TopScore: {props.topscore}</span>
      </div>)
}

export default Header;


