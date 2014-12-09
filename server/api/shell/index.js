'use strict';

var express = require('express');
var controller = require('./shell.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/',auth.isAuthenticated(), controller.index);
//router.get('/:id', controller.show);
router.get('/:id/*', auth.isAuthenticated(), controller.proxyget);

router.post('/', controller.create);
router.post('/:id/*', auth.isAuthenticated(), controller.proxypost);

//router.put('/:id', controller.update);

router.patch('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
