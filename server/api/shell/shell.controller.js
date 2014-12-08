'use strict';

var _ = require('lodash');
var Shell = require('./shell.model');
var http = require('http');
var siaboptions = {
	host: 'localhost',
	port: '4200',
	path: '/'
}
// Get list of shells
exports.index = function(req, res) {
  Shell.find(function (err, shells) {
    if(err) { return handleError(res, err); }
	
	http.get(siaboptions,function(resp){
			resp.on('data', function(chunk){
					console.log('chunck received');
					console.log(chunk.tostring());
			});
	}).on("error", function(e){
			console.log('error : '+ e.message);
	});

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
