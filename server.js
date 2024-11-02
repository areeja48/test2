const express = require('express');
const app = express();
app.use(express.json());
const apiRouter= require('./router/index');

app.use('/', apiRouter);

app.listen(3000, () => {
    console.log("Server running");
});