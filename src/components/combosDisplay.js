import React from 'react';

const CombosDisplay = (props) =>{
           
    return(
        <section>
            <div>Cosmos: {String(props.cosmos)}</div>
            <div>Hyacinth: {String(props.hyacinth)}</div>
            <div>Lilies: {String(props.lilies)}</div>
            <div>Mums: {String(props.mums)}</div>
            <div>Pansies: {String(props.pansies)}</div>
            <div>Roses: {String(props.roses)}</div>
            <div>Tulips: {String(props.tulips)}</div>
            <div>Windfowers: {String(props.windflowers)}</div>
        </section>
        )
}
    
export default CombosDisplay
