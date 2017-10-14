'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbUtils = require('./lib/dbUtils.js');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

require('./routes.js')(app);
app.listen(PORT, function () {
    console.log("Server listen on: " , PORT, "port.");
});
