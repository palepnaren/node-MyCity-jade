var express = require('express');
var app = express();

var routes = require('./routes/routes.js');

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);
app.get('/:cityName', routes.city);

var port = process.env.PORT || 8090;

app.listen(port, function(req, res){
  console.log("Your server has started on port: "+port);
});
