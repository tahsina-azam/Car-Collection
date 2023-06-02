'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var swaggerUi = require('swagger-ui-express');
var yaml = require('yamljs')
var swaggerConfig = yaml.load('./api/swagger/swagger.yaml');
var db = require('./config/db')();


module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
});
