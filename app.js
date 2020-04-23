const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200);
    res.send("Cool beans");
});

app.listen(port, () => { 
    console.log(`App is up and listening on port ${port}`);
});

module.exports = app;