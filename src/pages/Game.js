import React, { Component } from 'react';
import Cards from "../components/Cards";

class Game extends Component{
    state = {
        items : [
           {
              id:1, 
              src:"/Images/image8.jfif",
              clicked: false
           } ,
           {
            id:2, 
            src:"/Images/image7.jfif",
            clicked: false
           } ,
           {
            id:3, 
            src:"/Images/image6.jfif",
            clicked: false
           } ,
           {
            id:4, 
            src:"/Images/image9.jfif",
            clicked: false
           } ,
           {
            id:5, 
            src:"/Images/image5.jfif",
            clicked: false
           } ,
           {
            id:6, 
            src:"/Images/image4.jfif",
            clicked: false
           } ,
           {
            id:7, 
            src:"/Images/image3.jfif",
            clicked: false
           },
           {
            id:8, 
            src:"/Images/image1.jif",
            clicked: false
            } ,
            {
                id:9, 
                src:"/Images/image2.jfif",
                clicked: false
             } ,
             {
                id:10, 
                src:"/Images/image10.jfif",
                clicked: false
             } 
        ],
        selecteditem : ""
    }

    cardClicked = (id) => {
     console.log("Id",id)
     this.setState({selecteditem:id});
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
