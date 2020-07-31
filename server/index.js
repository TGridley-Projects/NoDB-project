const express = require('express');

const app = express();

app.use(express.json())

const port = 4004

app.listen (port, () => console.log(`server is listening on port ${port}`))