/**
 * Created by Alexander on 05.12.15.
 */

var db = require('../db'),
    MessagesModel;

MessagesModel = db.link.define('messages', {
    name: {
        type: db.orm.STRING(45)
    },
    description: {
        type: db.orm.TEXT
    },
    likes_count: {
        type: db.orm.INTEGER
    }
}, {
    timestamps: false
});

module.exports = MessagesModel;