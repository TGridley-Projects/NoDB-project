import React, { Component } from "react";
import FlowersDisplay from "./flowersDisplay";
import FlowersAdd from "./flowersAdd";
import FlowerDelete from "./flowersDelete"

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
        <FlowersDisplay {...owned} deleteFlower={this.props.deleteFlower}/>
        <FlowersAdd addFlower={this.props.addFlower} />
        <FlowerDelete {...owned} deleteFlower={this.props.deleteFlower} />
      </div>
    );
  }
}

export default Flowers;
