import React, {Component} from 'react';

class FlowerAdd extends Component{
    constructor(){
        super();

        this.state = {
            myNewFlower: ""
        }
    }

    universalHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(null
        //     <section className="newFlower">
        //         <form onSubmit={e => {
        //         this.props.addFlower(e, this.state.myNewFlower)
        //         // this.setState({myNewFlower: {type: "", color: "", quantity: ""
        //         console.log(this.state.myNewFlower)
        //         }
        //     }>
        //             <label>
        //                 New Flower (type, color, quantity)
        //                 <input
        //                     className="form-elem"
        //                     name="myNewFlower.type" 
        //                     value={this.state.name} 
        //                     type="text" 
        //                     placeholder="Add the type of flower"
        //                     onChange={(e) => this.universalHandler(e)}
        //                 />
        //             </label>
                    /* <label>
                        Color:
                        <input
                            className="form-elem"
                            name="myNewFlower.color" 
                            value={this.state.name} 
                            type="text" 
                            placeholder="Add the color of flower"
                            onChange={(e) => this.universalHandler(e)}
                        />
                    </label>
                    <label>
                        Quantity:
                        <input
                            className="form-elem"
                            name="myNewFlower.quantity" 
                            value={this.state.name} 
                            type="text" 
                            placeholder="Add the quantity"
                            onChange={(e) => this.universalHandler(e)}
                        />
                    </label> */
                    
            //     </form>
            // </section>
        )
    }
}

export default FlowerAdd