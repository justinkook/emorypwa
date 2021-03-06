const db = require('../models');
const axios = require('axios');
const by = require('./search');
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

    app.post('/api/search/:searchTerm/:locationTerm', function (req, res) {
        const { searchTerm, location } = req.params
        by.keywordAndLocation(searchTerm, location, res);
    });

    app.get('/api/geocode/:location', function (req, res) {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: req.params.location,
                key: process.env.GEOCODE_KEY
            }
        })
            .then(function (result) {
                res.json(result.data);
            })
            .catch(function (err) {
                res.json(err);
            })
    });
}
