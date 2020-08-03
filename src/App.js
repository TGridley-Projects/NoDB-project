import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Combos from "./components/combos";
import Flowers from "./components/flowers";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flowers: [],
    };

    this.addFlower = this.addFlower.bind(this);
    this.deleteFlower = this.deleteFlower.bind(this);
    this.updateFlower = this.updateFlower.bind(this);
  }

  componentDidMount() {
    return this.getFlowers();
  }

  getFlowers = () => {
    axios
      .get("/api/flowers")
      .then((res) => {
        this.setState({
          flowers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addFlower = (e, type, color, quantity) => {
    e.preventDefault();
    axios
      .post("/api/flower", { type, color, quantity })
      .then((res) => {
        this.setState({
          flowers: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  deleteFlower = (id) => {
    axios
      .delete(`/api/flower/${id}`)
      .then((res) => {
        this.setState({
          flowers: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  updateFlower = (id, newType, newColor, newQuantity ) => {
    const body = {newType, newColor, newQuantity}
    axios
      .put(`/api/flower/${id}`,body)
      .then((res) => {
        this.setState({
          flowers: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  updateFlower;

  render() {
    const lngth = this.state.flowers.length;
    const combos = this.state.flowers[0];
    const owned = this.state.flowers.slice(1, lngth);
    return (
      <div className="App">
        <header className="header"></header>
        <section className="mainDisplay">
          <div className="flowersOwned listBoxShared">
            <h2 className="title">Flowers on my island:</h2>
            <Flowers
              {...owned}
              num1={lngth - 1}
              addFlower={this.addFlower}
              deleteFlower={this.deleteFlower}
              updateFlower={this.updateFlower}
              flowers={this.state.flowers}
              
            />
          </div>
          <div className="flowerCombos listBoxShared">
            <h2 className="title">Colors available by flower type:</h2>
            <Combos {...combos} />
          </div>
          <form className="formShared addFlower"></form>
          <form className="formShared choseCombo"></form>
        </section>
      </div>
    );
  }
}

export default App;
