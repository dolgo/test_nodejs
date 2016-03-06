/**
 * Created by Alexander on 05.12.15.
 */
var MessagesModel = require('../models/messagesModel'),
    formidable = require('formidable');


module.exports = {

    getListFromDB: function(req, resp) {
        var page = parseInt(req.query.page) || 0,
            size = parseInt(req.query.size) || 10;

        MessagesModel.find()
            .limit(size)
            .offset(page * size)
            .order('id')
            .run(function(err, rows) {

                if (err) {
                    return resp.status(500).send(err);
                }
                resp.send(rows);
            });

    },

    getList: function(req, resp) {

        resp.send([{
            id: 1,
            name: 'test name',
            description: 'test description',
            likes_count: 10
        }]);
    },

    addToDB: function(req, resp) {
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, reqData) {
            var message;

            if (err) {
                return resp.status(500).send(err);
            }

            message = new MessagesModel;
            message.name = reqData.name;
            message.description = reqData.description;
            message.likes_count = parseInt(reqData.likes_count) || null;

            message.save(function(err) {
                if (err) {
                    return resp.status(500).send(err);
                }

                resp.send(message);
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