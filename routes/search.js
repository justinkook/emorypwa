/**
 * Date: 10/11/2018
 * @version 1.1 
 * @author David Ye, Justin Kook
 * @description
 *  1.1
 *  - Modified keywords() to search only based on search string
 *  - Added location() to search only based on location string
 *  - Added keywordsAndLocation to search for search string and location string
 *       Replaces previous keywords() function as main search function
 */

const db = require("../models");

/**
 * Searches database for businesses based on a search term
 * @param {String} searchString 
 * @param {Response} res 
 * @since 1.0
 * @returns {Array} business objects
 */
const keywords = function (searchString, res) {
    let regex = { $regex: new RegExp(searchString, 'i') }
    let businesses = [];

    db.Location
        .find()
        .or([
            { 'alias': regex },
            { 'categories.alias': regex },
            { 'categories.title': regex }
        ])
        .then(function (businessData) {
            businesses = businessData.length > 0 ? businessData : ["none"];
            if (res !== undefined) res.json(businessData);
        })
        .catch(function (err) { res.json(err); });
    return businesses;
}

/**
 * Searches database for businesses based on location
 * @param {String} locationString 
 * @param {Response} res 
 * @since 1.0
 * @returns {Array} business objects
 */
const location = function (locationString, res) {
    let businesses = [];
    let regex = { $regex: new RegExp(locationString, 'i') }

    db.Location
        .find()
        .or([
            { 'location.city': regex },
            { 'location.address1': regex },
            { 'location.address2': regex },
            { 'location.address3': regex },
            { 'location.zip_code': regex },
            { 'location.country': regex },
            { 'location.state': regex }
        ])
        .then(function (businessData) {
            businesses = businessData.length > 0 ? businessData : ["none"];
            if (res !== undefined) res.json(businessData);
        })
        .catch(function (err) { console.log(err); });
    return businesses;
}

/**
 * Searches database for businesses based on search term AND location
 * @param {String} searchTerm 
 * @param {String} location 
 * @param {Response} res 
 * @since 1.1
 * @returns {Array} business objects
 */
const keywordAndLocation = function (searchString, locationString, res) {
    let businesses = [];
    let reg_searchTerm = { $regex: new RegExp(searchString, 'i') }
    let reg_location = { $regex: new RegExp(locationString, 'i') }
    db.Location
        .find({
            $and: [

                {
                    $or: [
                        { 'alias': reg_searchTerm },
                        { 'categories.alias': reg_searchTerm },
                        { 'categories.title': reg_searchTerm }
                    ]
                },
                {
                    $or: [
                        { 'location.city': reg_location },
                        { 'location.address1': reg_location },
                        { 'location.address2': reg_location },
                        { 'location.address3': reg_location },
                        { 'location.zip_code': reg_location },
                        { 'location.country': reg_location },
                        { 'location.state': reg_location }
                    ]
                }
            ]
        })
        .then(function (businessData) {
            businesses = businessData.length > 0 ? businessData : ["none"];
            if (res !== undefined) res.json(businessData);
        })
        .catch(function (err) { console.log(err); });
    return businesses;
}


/**
 * Potential future add-on
 * Searches database for businesses based on what3words
 * @param {Object} what3words 
 * @param {Response} res 
 * @since 1.0
 * @returns {Array} business objects
 */
const what3words = function (words, options) { }

/**
 * API wrapper object
 */
const by = {
    keywords: keywords,
    location: location,
    keywordAndLocation: keywordAndLocation,
    what3words: what3words // for future implementations
}

module.exports = by;