import React, { Component } from 'react'
import './skills'
import Skills from './skills';

class Cards extends Component {
    constructor(props){
        super(props)
            this.state = { 
                
     }
    }
    render() { 
        console.log('cards.data: ', this.props.cardData)
        return ( 
            <div className="profile-card">
                <header className="profile-header">
                    <img src={this.props.cardData.image} alt={this.props.name}></img>
                    <h2>{this.props.cardData.name}</h2>
                </header>
                <ul>
                    <Skills skills={this.props.data} />
                </ul>
            </div>
         );
    }
}
 
export default Cards;