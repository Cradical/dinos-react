import React, { Component } from 'react'
import './skills'
import Skills from './skills';

class Cards extends Component {
    constructor(props){
        super(props)
            this.state = { 
                condition: false
     }
    }

display_skills = () => {
    this.setState({
        condition: !this.state.condition
})

    }
    render() { 
        return ( 
            <div className="profile-card">
                <header className="profile-header">
                    <img src={this.props.cardData.image} alt="dino"></img>
                    <h2 onClick={this.display_skills}>{this.props.cardData.name}</h2>
                </header>
                <section>
                    { this.state.condition ? <Skills skills={this.props.cardData} /> : null }
                </section>
            </div>
         );
    }
}
 
export default Cards;