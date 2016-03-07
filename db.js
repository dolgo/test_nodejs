/*
 *  Database access
 */

var Sequelize = require('sequelize'),
    config = require('./config'),
    link;


link = new Sequelize(config.mysql.db, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    port: config.mysql.port,
    dialect: 'mysql',
    pool: {
        max: 100,
        min: 0,
        idle: 10000
    },
    logging: false
});

module.exports = {
    orm: Sequelize,
    link: link
};