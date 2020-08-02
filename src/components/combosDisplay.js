import React from 'react';

const CombosDisplay = (props) =>{
           
    return(
        <section>
            <h2 className="flowerTypes">Cosmos: <span className="listFont">{String(props.cosmos)}</span></h2>
            <h2 className="flowerTypes">Hyacinth: <span className="listFont">{String(props.hyacinth)}</span></h2>
            <h2 className="flowerTypes">Lilies: <span className="listFont">{String(props.lilies)}</span></h2>
            <h2 className="flowerTypes">Mums: <span className="listFont">{String(props.mums)}</span></h2>
            <h2 className="flowerTypes">Pansies: <span className="listFont">{String(props.pansies)}</span></h2>
            <h2 className="flowerTypes">Roses: <span className="listFont">{String(props.roses)}</span></h2>
            <h2 className="flowerTypes">Tulips: <span className="listFont">{String(props.tulips)}</span></h2>
            <h2 className="flowerTypes">Windfowers: <span className="listFont">{String(props.windflowers)}</span></h2>
        </section>
        )
}
    
export default CombosDisplay
