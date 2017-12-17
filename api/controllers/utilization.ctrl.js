'use strict';
const router = require('express').Router(),
    Collections = require('./../models/index').waterline.collections,
    Model = Collections.utilization;

    console.log(global.Models);
    
const getUtilizationData = (req, res) => {
    Model.find({}, function (err, dbResults) {
        if (err) {
            return res.json(err);
        }
        var result = {
            url: `${req.baseUrl}`,
            rows: dbResults.length || 0,
            data: dbResults || [],
            errors: (dbResults.length !== 0) ? '' : 'No data exists'
        };

        return res.json(result);
    });
}

router.route('/').get(getUtilizationData);

module.exports = router;