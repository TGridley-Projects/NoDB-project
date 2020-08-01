import React, {Component} from 'react';
import './reset.css'
import './App.css';
import Combos from './components/combos'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      flowers: []
    }  
  } 

  componentDidMount(){
    this.getFlowers();
  }

  getFlowers = () => {
    axios.get('/api/flowers')
    .then( res => {
      this.setState({
        flowers: res.data
      })
    })
    .catch(err => {console.log(err)})
  }

  render(){
    const combo = this.state.flowers[0]
    return (
      <div className="App">
        <header className="header">       
        </header>
        <section className="mainDisplay">
          <div className="flowersOwned listBoxShared">
            <h2 className="title">Flowers on my island:</h2>
          </div>
          <div className="flowerCombos listBoxShared">
            <h2 className="title">Colors available by flower type:</h2>
            {console.log(`combo`, combo )}
            <Combos flowers={combo}/>
          </div>
          <form className="formShared addFlower"></form>
          <form className="formShared choseCombo"></form>
        </section>
      </div>
    );
  }
}

export default App;
