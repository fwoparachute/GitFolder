
/**
 * Module dependencies.
 */

require('coffee-script');



var express = require('express');
var http = require('http');
var path = require('path');

var app = express(),
	RedisStore = require('connect-redis')(express);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
	secret: "sometimesifeelihavegotto12345"
	strore: new RedisStore
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var index = function(req, res){
  res.render('index', { title: 'Express' });
};

app.get('/', index);

require('./apps/authentication/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
