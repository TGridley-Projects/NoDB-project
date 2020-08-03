const flower = require('./data.json');
let id = flower.length;

module.exports = {
    getFlowers: (req, res) => {
        res.status(200).send(flower);
    },
    addFlower: (req, res) => {
        const { type, color, quantity } = req.body;
        const newFlower = {
                id,
                type,
                color,
                quantity
                   }
            flower.push(newFlower);
            id++;
            res.status(200).send(flower);
        
    },
    deleteFlower: (req, res) =>{
        const {id} = req.params
        const index = flower.findIndex( flower =>flower.id === +id);
        if (index === -1){
            res.status(404).send('Flower not found on your island')
        } else {
            flower.splice(index,1);
            res.status(200).send(flower)
        }
    },
    // editFlower: (req, res) => {
    //     const {id} = req.params
    //     const index = flower.findIndex(flower => flower.id === +id)
    //     if( index === -1){
    //         res.status(404).send('Flower not found on your island')
    //     } else{
    //         flower[index] = updatedFlower
    //         res.status(200).send(flower)
    //     }
    //}
}