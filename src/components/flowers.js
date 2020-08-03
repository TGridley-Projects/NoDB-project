import React, { Component } from "react";
import FlowersDisplay from "./flowersDisplay";
import FlowersAdd from "./flowersAdd";
import FlowerUpdate from "./flowersUpdate"

class Flowers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flowersOwned: [],
    };
  }

  render() {
    const owned = this.props;
    return (
      <div>
        <FlowersAdd addFlower={this.props.addFlower} />
        <FlowersDisplay {...owned} deleteFlower={this.props.deleteFlower}/>
        <FlowerUpdate flowers={this.props.flowers} updateFlower={this.props.updateFlower}/>
      </div>
    );
  }
}

export default Flowers;
