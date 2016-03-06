'use strict';

var bcrypt = require('bcrypt');

function hashPassword(user, callback) {
  bcrypt.hash(user.password, 8, function(err, hash) {
    user.password = hash;
    callback(user);
  });
}

function comparePassword(password, user, callback) {
  bcrypt.compare(password, user.password, function(err, isEqual) {
    callback(isEqual, user);
  });
}

module.exports = {
  hashPassword: hashPassword,
  comparePassword: comparePassword
};