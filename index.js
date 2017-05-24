'use strict'

var debug = require('debug')('reCAPTCHA')
var colors = require('colors')
var request = require('request')

function recaptcha(secret) {
  debug('return function with secret:', secret)
  return function(captcha, remoteip) {
    return new Promise(function(success, reject) {
      request.post('https://www.google.com/recaptcha/api/siteverify', { form: { secret: secret, response: captcha, remoteip: remoteip } }, function optionalCallback(err, httpResponse, body) {
        if (err) {
          reject(err)
          debug('captcha failed:', err);
        } else {
          debug(colors.green('captcha successful!  Server responded with:', body));
          success(body) 
        }
      });

    })
  }
}

module.exports = recaptcha 
