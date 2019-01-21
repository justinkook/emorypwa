const db = require('../models/');
const axios = require('axios');
require("dotenv").config();
const RestfulAPI = require('./RestClass');

module.exports = function (app) {

    const location = new RestfulAPI('location', app, db.Location);
    location.find();
    location.create();

    const insurance = new RestfulAPI('insurance', app, db.Insurance);
    insurance.find();

    app.get('/api/location/:alias', function (req, res) {
        db.Location.find({
            alias: req.params.alias
        })
            .then(function (dbLocation) {
                res.json(dbLocation);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // app.post('/api/search', function (req, res) {
    //     let searchTerm = req.body.searchInput;
    //     let location = req.body.locationInput;
    //     searchBy.keywordAndLocation(searchTerm, location, res);
    // });

    app.get('/api/geocode/:location', function (req, res) {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: req.params.location,
                key: process.env.GEOCODE_KEY
            }
        })
            .then(function (result) {
                res.json(result.data);
                console.log(data.results);
            })
            .catch(function (err) {
                res.json(err);
            })
    });
}
