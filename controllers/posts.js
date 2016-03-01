/**
 * Created by Alexander on 05.12.15.
 */
var postsModel = require('../models/postsModel'),
    async = require('async'),
    formidable = require('formidable'),
    db = require('../db'),
    fs = require('fs'),
    path = require('path');


module.exports = {

    getList: function(req, resp) {
        var page = parseInt(req.query.page) || 0,
            size = parseInt(req.query.size) || 20;

        postsModel.find()
            .limit(size)
            .offset(page * size)
            .order('name')
            .run(function(err, rows) {

                if (err) {
                    return resp.status(500).send(err);
                }
                resp.send(rows);
            });

    },

    add: function(req, resp) {
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, reqData) {
            if (err) {
                return resp.status(500).send(err);
            }

            resp.send(reqData);
        });

    }
};