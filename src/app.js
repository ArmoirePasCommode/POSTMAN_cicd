const express = require('express');
const app = express();

// TDV
app.get('/status', function (request, response) {
   response.status(200).send();
   response.end();
});

// CITY
app.get('/city', function (request, response) {
   const city = ['Paris', 'Bordeaux', 'Lyon', 'Strasbourg', 'Toulouse', 'Marseille'];
   response.json(city);
   response.end();
});

//Capture All 404 errors
app.use(function (req, res, next) {
   res.status(404).send('Unable to find the requested resource!');
   res.end();
});




const port = process.env.PORT || 3000;
app.listen(port);
