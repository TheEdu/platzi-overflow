'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _models = require('../models');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var debug = new _debug2.default('platzi-overflow:db-api:question');

exports.default = {
  findAll: function findAll(sort) {
    debug('Finding all questions');
    return _models.Question.find().populate('answers').sort(sort);
  },

  findById: function findById(_id) {
    debug('Find question with id ' + _id);
    var mongoId = _mongoose2.default.mongo.ObjectId(_id);
    debug('Find question with id ' + mongoId);
    return _models.Question.findOne({ _id: mongoId }).populate('user').populate({
      path: 'answers',
      options: { sort: '-createdAt' },
      populate: {
        path: 'user',
        model: 'User'
      }
    });
  },

  create: function create(q) {
    debug('Creating new question ' + q);
    var question = new _models.Question(q);
    return question.save();
  },

  createAnswer: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(q, a) {
      var answer, savedAnswer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              answer = new _models.Answer(a);
              _context.next = 3;
              return answer.save();

            case 3:
              savedAnswer = _context.sent;

              q.answers.push(savedAnswer);
              _context.next = 7;
              return q.save();

            case 7:
              return _context.abrupt('return', savedAnswer);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function createAnswer(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()
};