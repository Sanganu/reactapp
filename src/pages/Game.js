import React, { Component } from 'react';
import Cards from "../components/Cards";
import data from "../data/data";
import  Header from "../components/Header";

class Game extends Component{
    state = {
        items :[],
        selecteditem : "",
        score: 0,
        topscore : 0
    }
    componentDidMount = () => {
        this.setState({items:data})
    }
    cardClicked = (id) => {
     console.log("Id",id);
     let score = this.state.score;
     let topscore = this.state.topscore;
     let items = this.state.items;
     for(let  i =0;i<items.length;i++){
         if( items[i].id === id){
             if(items[i].clicked === false){
                items[i].clicked = true;
                score++; 
             }
             else{
                if (score > topscore){
                    topscore = score;
                    score = 0;
                }
            
             }
         }
     }

     this.shuffleItems();
    }

    shuffleItems = () => {
        let items = this.state.items;
        let datalength = items.length;
        let count = 0;
        while(count < (datalength/2)){
            let i = Math.floor(Math.random() * datalength)
            let j = Math.floor(Math.random() * datalength)
            let temp = items[i];
            items[i] = items[j];
            items[j]=temp;
            count++;
        }
        console.log(items);
        this.setState({items})
    }

    render(){
        return(<div>
            <Header />
            {this.state.items.map(item=>(
                <Cards imagesrc={item.src}
                key={item.id}
                id={item.id}
                clciked={item.clicked}
                cardClicked = {this.cardClicked} />
            ))}
        </div>)
    }
}
export default  Game;
