import React, { Component } from 'react';
import './dino.css';
import Header from './components/header';
import Profiles from './components/profiles';


class App extends Component {
  constructor(props){
    super()
      this.state = {
        data: []
      }
    }
    
    componentDidMount() {
      let apiURL = './dinosaurs.json'
        fetch(apiURL)
          .then(response => response.json())
          .then(response => {
            this.setState({data: response})
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Profiles list={this.state.data}/>
      </div>
    );
  }
}

export default App;
