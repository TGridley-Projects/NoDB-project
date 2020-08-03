import React, { Component } from "react";

class FlowerAdd extends Component {
  constructor() {
    super();

    this.state = {
      type: "",
      color: "",
      quantity: "",
    };
  }

  typeHandler = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  colorHandler = (e) => {
    this.setState({
      color: e.target.value,
    });
  };
  quantityHandler = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  };

  render() {
    return (
      <section className="newFlower">
        <label>New:</label>
        <input
          className="form-elem typeColor"
          value={this.state.type}
          type="text"
          placeholder="What type?"
          onChange={(e) => this.typeHandler(e)}
        />

        <input
          className="form-elem typeColor"
          value={this.state.color}
          type="text"
          placeholder="What color?"
          onChange={(e) => this.colorHandler(e)}
        />

        <input
          className="form-elem quantity"
          value={this.state.quantity}
          type="text"
          placeholder="Qty."
          onChange={(e) => this.quantityHandler(e)}
        />

        <button
          onClick={(e) => {
            this.props.addFlower(
              e,
              this.state.type,
              this.state.color,
              this.state.quantity
            );
            this.setState({ type: "", color: "", quantity: "" });
          }}
        >
          submit
        </button>
      </section>
    );
  }
}

export default FlowerAdd;
