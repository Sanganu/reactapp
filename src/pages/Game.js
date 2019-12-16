import React, { Component } from 'react';
import Cards from "../components/Cards";

class Game extends Component{
    state = {
        items : [
            "../Images/image1.jfif",
            "../Images/image2.jfif",
            "../Images/image3.jfif",
            "../Images/image4.jfif",
            "../Images/image5.jfif",
            "../Images/image6.jfif",
            "../Images/image7.jfif",
            "../Images/image8.jfif",
            "../Images/image9.jfif",
            "../Images/image10.jfif"
        ]
    }
    render(){
        return(<div>
            {this.state.items.map(item=>(
                <Cards imagesrc={item}
                key={item} />
            ))}
        </div>)
    }
}
export default  Game;
