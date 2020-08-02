import React from 'react';

const FlowersDisplay = (props) =>{
    // const {type, color, quantity} = props.map()
    return (
        <section>
            <div>{props.type}</div>
            <div>{props.color}</div>
            <div>{props.quantity}</div>
        </section>
    )
}

export default FlowersDisplay