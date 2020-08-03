import React, {Component} from 'react'

class FlowerUpdate extends Component {
    constructor() {
      super();
  
      this.state = {
          id: "",
        type: "",
        color: "",
        quantity: "",
      };
    }
  
    idHandler = (e) => {
      this.setState({
        id: e.target.value,
      });
    };
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
        <section className="UpdateFlower">
          <label>Update:</label>

          <input
            className="form-elem quantity"
            value={this.state.id}
            type="text"
            placeholder="Id#"
            onChange={(e) => this.idHandler(e)}
          />
          
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
            onClick={() => {
              console.log(+this.state.id)
            for(let i=0; i<this.props.flowers.length; i++){ 
            if(this.props.flowers[i].id === +this.state.id){
              this.props.updateFlower(
                this.props.flowers[i].id,
                this.state.type,
                this.state.color,
                this.state.quantity
              )}};
              this.setState({ id: "",type: "", color: "", quantity: "" });
            }}
          >
            submit
          </button>
        </section>
      );
    }
  }
export default FlowerUpdate