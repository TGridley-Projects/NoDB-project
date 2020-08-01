const flower = require('./data.json');
// let id = flower.length-1;

module.exports = {
    getFlowers: (req, res) => {
        res.status(200).send(flower);
    }
}