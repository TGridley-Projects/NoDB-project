import React from 'react'

const FlowerDelete = (props) =>{
    return(
        <div className="flowerDelete">
            <button className="deleteButton" onClick={() => {props.deleteFlower(3)}}>
                X
            </button>

        </div>
    )
}








export default FlowerDelete