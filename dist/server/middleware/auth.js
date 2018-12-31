'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.required = exports.findUserByEmail = exports.users = undefined;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _config = require('../config');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = new _debug2.default('platzi-overflow:auth-middleware');

var users = exports.users = [{
    firstName: 'Sacha',
    lastName: 'Lifszyc',
    email: 'sacha@platzi.com',
    password: '123456',
    _id: 123
}];

var findUserByEmail = exports.findUserByEmail = function findUserByEmail(e) {
    return users.find(function (_ref) {
        var email = _ref.email;
        return email === e;
    });
};

var required = exports.required = function required(req, res, next) {
    _jsonwebtoken2.default.verify(req.query.token, _config.secret, function (err, token) {

        if (err) {
            debug('JWT no se encripto con nuestro secreto');
            return res.status(401).json({
                message: 'Unauthorized',
                error: err
            });
        }

        debug('Token verificado!!!! ' + token);
        req.user = token.user;
        next();
    });
};