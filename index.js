const express = require("express");
const port = 8000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./routes/home'));
app.use(express.static('./assets'));

app.listen(port, function(err) {
    if (err) {
        console.log("Error in running the server on port: "+port);
        console.log("Error: "+ err);
        return;
    } else {
        console.log("Server is running perfectly fine on port: "+port);
    }
})