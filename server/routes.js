/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var http = require('http');

var siaboptions = {
		host: 'localhost',
		port: '4200',
		path: '/'
};

module.exports = function(app) {

  // Insert routes below
  app.use('/api/shells', require('./api/shell'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      //res.sendfile(app.get('appPath') + '/index.html');
		http.get(siaboptions,function(resp){
			resp.on('data', function(data){
				res.send(data);
			});
		}).on('error',function(e){ console.log(' error : '+e.message); });
    });
};
