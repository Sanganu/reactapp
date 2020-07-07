import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
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
