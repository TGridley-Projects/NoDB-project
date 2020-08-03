const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4004;

app.use(express.json());

app.get("/api/flowers", ctrl.getFlowers);
app.post("/api/flower", ctrl.addFlower);
app.put("/api/flower/:id", ctrl.editFlower);
app.delete("/api/flower/:id", ctrl.deleteFlower);


app.listen (port, () => console.log(`server is listening on port ${port}`));