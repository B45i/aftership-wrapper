const express = require('express');

const Aftership = require('aftership')('ab4fb55d-53ce-4bbe-992b-372249a71cd3');

const app = express();
var port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    Aftership.call('GET', '/last_checkpoint/dhl/5398338002', function (err, result) {
        if (err) {
            return console.log(err);
        }
        let status = {
            tracking_number: result.data['tracking_number'],
            message: result.data.checkpoint['message']
        };
        response.send(status);
    });
});

app.listen(port, () => {
    console.log(`App statred at ${port}`);
});