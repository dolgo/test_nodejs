/**
 * Created by Alexander on 05.12.15.
 */

var db = require('../db'),
    productsModel = db.link.define('posts', {
        name: {
            type: 'text',
            alwaysValidate: true
        },
        description: {
            type: 'text',
            alwaysValidate: true
        },
        likes_count: {
            type: 'number',
            alwaysValidate: true
        }
    }, {
        methods: {
        },
        validations: {
            name: [db.orm.enforce.required()],
            likes_count: [db.orm.enforce.ranges.number(1, 99999999)]
        },
        cache: false
    });

module.exports = productsModel;