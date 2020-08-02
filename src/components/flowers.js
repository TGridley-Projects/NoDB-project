import React, {Component} from 'react';
import FlowersDisplay from './flowersDisplay'
let temp = []

class Flowers extends Component {
    constructor (props){
        super(props)

        this.state = {
            flowersOwned: [],
            type: [],
            color: [],
            quantity: []
        }
        
    }

   

    updateType(props){
        if(this.props.num1 > this.state.type.length || this.props.num1 < this.state.type.length ){
        for(let i=0; i<this.props.num1; i++){
            temp.push(this.props[i].type)
        }
        this.setState({type: temp})
        temp=[]
        }
    }
    updateColor(props){
        if(this.props.num1 > this.state.color.length || this.props.num1 < this.state.color.length ){
        for(let i=0; i<this.props.num1; i++){
            temp.push(this.props[i].color)
        }
        this.setState({color: temp})
        temp=[]
        }
    }

    updateQuantity(props){
        if(this.props.num1 > this.state.quantity.length || this.props.num1 < this.state.quantity.length ){
        for(let i=0; i<this.props.num1; i++){
            temp.push(this.props[i].quantity)
        }
        this.setState({quantity: temp})
        temp=[]
        }
    }

    componentDidUpdate(){
        this.updateType()
        this.updateColor()
        this.updateQuantity()


    }

    
    render(){
            const {num1} = this.props       
            console.log (num1)
            console.log (`state`, this.state.type)
            return(<FlowersDisplay 
                type={this.state.type}
                color={this.state.color}
                quantity={this.state.quantity}
            />)
        }
      
}

export default Flowers