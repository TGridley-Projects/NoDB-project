import React, {Component} from 'react';
import CombosDisplay from './combosDisplay';

class Combos extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        const {cosmos, hyacinth, lilies, mums, pansies, roses, tulips, windflowers } = this.props
        return(
            <CombosDisplay
                cosmos={cosmos}
                hyacinth={hyacinth}
                lilies={lilies}
                mums={mums}
                pansies={pansies}
                roses={roses}
                tulips={tulips}
                windflowers={windflowers}/>            
        )
    };
};


export default Combos