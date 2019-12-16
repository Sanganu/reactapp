import React from 'react';
import  Header from "./components/Header";
import './App.css';
import Footer from "./components/Footer";
import Game from "./pages/Game.js";
function App() {
  return (
    <div className="App">
     <Header />
     <Game />
     <Footer />
    </div>
  );
}

export default App;
