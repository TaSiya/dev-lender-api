module.exports = function () {
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors')
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: false
    }))
    // parse application/json
    app.use(bodyParser.json())

    app.use(express.static('public'));

    return app;
}