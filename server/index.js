const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4004;

app.use(express.json());

app.get("/api/flowers", ctrl.getFlowers);
app.post("/api/flowers", ctrl.addFlower);
// app.delete("/api/flowers/:id", ctrl.deleteFlower);
// app.put("/api/flowers", ctrl.editQuantity);


app.listen (port, () => console.log(`server is listening on port ${port}`));