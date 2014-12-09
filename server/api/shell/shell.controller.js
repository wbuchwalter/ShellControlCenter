'use strict';

var _ = require('lodash'),
Shell = require('./shell.model'),
httpProxy = require('http-proxy'),
proxy = httpProxy.createProxyServer({});

proxy.on('error', function(err,req,res){
		console.log('proxy error');
});

// Get list of shells
exports.index = function(req, res) {
  Shell.find(function (err, shells) {
    if(err) { return handleError(res, err); }
	return res.json(200, shells);
  });
};

// Get a single shell
exports.show = function(req, res) {
  Shell.findById(req.params.id, function (err, shell) {
    if(err) { return handleError(res, err); }
    if(!shell) { return res.send(404); }
    return res.json(shell);
  });

};

exports.proxyget = function(req,res){
	console.log('proxy get, ignored');
	res.send(200);
/*	return proxy.web(req,res,{
				target: 'http://localhost:4200'
	});*/



};

exports.proxypost = function(req,res){
	console.log('proxy post');
		 proxy.web(req,res,{
			target: 'http://localhost:4200'
	});
};

// Creates a new shell in the DB.
exports.create = function(req, res) {
  Shell.create(req.body, function(err, shell) {
    if(err) { return handleError(res, err); }
    return res.json(201, shell);
  });
};

// Updates an existing shell in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Shell.findById(req.params.id, function (err, shell) {
    if (err) { return handleError(res, err); }
    if(!shell) { return res.send(404); }
    var updated = _.merge(shell, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, shell);
    });
  });
};

// Deletes a shell from the DB.
exports.destroy = function(req, res) {
  Shell.findById(req.params.id, function (err, shell) {
    if(err) { return handleError(res, err); }
    if(!shell) { return res.send(404); }
    shell.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
