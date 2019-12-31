import React, { Component } from 'react';
import Cards from "../components/Cards";
import data from "../data/data";
import Scoreboard from "../components/Scoreboard";

class Game extends Component{
    state = {
        items :[],
        selecteditem : "",
        score: 0,
        topscore : 0,
    
    }

    componentDidMount = () => {
        this.setState({items:data})
    }

    cardClicked = (id) => {
        console.log("Id",id);
        let score = this.state.score;
        let topscore = this.state.topscore;
        let items = this.state.items;
        let i =0;
        let cont = true;
        while(i<items.length && cont)
        {    if( items[i].id === id){
                console.log(items[i].clicked,items[i].id)
                if(items[i].clicked === false){
                    items[i].clicked = true;
                    score++; 
                    cont = false;
                    items = this.shuffleItems(items);
                    
                }
                else{
                    if (score > topscore){
                        topscore = score;
                    }
                    score = 0;
                    cont = false;
                    for(let i=0;i<items.length;i++){
                        items[i].clicked =false
                    }
                }
            }
            i++;
        }
        this.setState({items,score,topscore},()=>{console.log("State",this.state.items,this.state.score)});
      
    }

    shuffleItems = (items) => {
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
        return items;
    }

    render(){
        return(<div>
            <Scoreboard
               score={this.state.score}
               topscore={this.state.topscore} />
            {this.state.items.map((item,key)=>(
                <Cards imagesrc={item.src}
                key={item.key}
                id={item.id}
                clciked={item.clicked}
                cardClicked = {this.cardClicked} />
            ))}
        </div>)
    }
}
export default  Game;
