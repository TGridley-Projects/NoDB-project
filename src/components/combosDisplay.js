import React from 'react';

const CombosDisplay = (props) =>{
           
    return(
        <section>
            <h2 className="flowerTypes">Cosmos:</h2> 
            <span className="listFont">{String(props.cosmos)}</span>
            <h2 className="flowerTypes">Hyacinth:</h2>
            <span className="listFont">{String(props.hyacinth)}</span>
            <h2 className="flowerTypes">Lilies:</h2>
            <span className="listFont">{String(props.lilies)}</span>
            <h2 className="flowerTypes">Mums:</h2>
            <span className="listFont">{String(props.mums)}</span>
            <h2 className="flowerTypes">Pansies:</h2>
            <span className="listFont">{String(props.pansies)}</span>
            <h2 className="flowerTypes">Roses:</h2>
            <span className="listFont">{String(props.roses)}</span>
            <h2 className="flowerTypes">Tulips:</h2>
            <span className="listFont">{String(props.tulips)}</span>
            <h2 className="flowerTypes">Windfowers:</h2>
            <span className="listFont">{String(props.windflowers)}</span>
        </section>
        )
}
    
export default CombosDisplay
