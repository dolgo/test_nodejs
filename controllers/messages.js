/**
 * Created by Alexander on 05.12.15.
 */
var MessagesModel = require('../models/messagesModel'),
    formidable = require('formidable');


module.exports = {

    getListFromDB: function(req, resp) {
        var page = parseInt(req.query.page) || 1,
            size = parseInt(req.query.size) || 10;

        MessagesModel.findAll({
            limit: size,
            offset: (page - 1) * size,
            order: 'id'
        }).then(function(rows) {

            resp.send(rows);
        }).catch(function(err) {

            resp.status(500).send(err);
        });

    },

    getList: function(req, resp) {

        resp.send({
            page: parseInt(req.query.page) || 1,
            size: parseInt(req.query.size) || 10,
            order: req.query.order || 'id'
        });
    },

    addToDB: function(req, resp) {
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, reqData) {

            if (err) {
                return resp.status(500).send(err);
            }

            MessagesModel.create({
                name: reqData.name,
                description: reqData.description,
                likes_count: parseInt(reqData.likes_count) || null
            }).then(function(message) {

                resp.send(message);
            }).catch(function(err) {

                resp.status(500).send(err);
            });
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
