import React, { Component } from 'react'
import './skills'

class Cards extends Component {
    constructor(){
        super()
            this.state = { 

     }
    }
    render() { 
        return ( 
            
            <div className="profile-card">
                <header className="profile-header">
                    <img src={this.props.image} alt={this.props.name}></img>
                </header>
                <ul>

                </ul>
            </div>
         );
    }
}
 
export default Cards;