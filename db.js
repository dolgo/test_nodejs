/*
 *  Database access
 */

var orm = require('orm'),
    config = require('./config'),
    transaction = require('orm-transaction'),
    link;

orm.settings.set('instance.returnAllErrors', true);

link = orm.connect({
    protocol : 'mysql',
    host     : config.mysql.host,
    port     : config.mysql.port,
    user     : config.mysql.user,
    password : config.mysql.password,
    database : config.mysql.db,
    query    : {pool: true}
});

//link.settings.set('connection.pool', 1);

link.use(transaction);

module.exports = {
    orm: orm,
    link: link,
    driver: link.driver,
    transaction: link.transaction
};