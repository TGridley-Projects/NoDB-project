const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4004;

app.use(express.json());

app.get("/api/flowers", ctrl.getFlowers);
// app.post("/api/data", ctrl.addFlower);
// app.delete("/api/data/:id", ctrl.deleteFlower);
// app.put("/api/data", ctrl.editQuantity);


app.listen (port, () => console.log(`server is listening on port ${port}`));