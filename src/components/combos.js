import React, {Component} from 'react';
import CombosDisplay from './combosDisplay';

class Combos extends Component {
    constructor(){
        super()
        this.state = {
            lilies: []
        }
    }
    render(){
        const {combos} = this.props
        return(
            console.log(`cosmos`,this.props.cosmos),           
            null
        )
    };
};


export default Combos