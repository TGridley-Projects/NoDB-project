const flower = require('./data.json');
let id = flower.length-1;

module.exports = {
    getFlowers: (req, res) => {
        res.status(200).send(flower);
    },
    addFlower: (req, res) => {
        const { myNewFlower } = req.body;
        if (!myNewFlower) {
            res.status(405).send('Expected to receive a new flower listing')
        } else {
            const newFlower = {
                id,
                myNewFlower 
            };
            flower.push(newFlower);
            id++;
            res.status(200).send(flower);
        }
    }
}