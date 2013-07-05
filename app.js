var express = require('express')
  , http = require('http')
  , path = require('path')

var app = express()

app.set('port', process.env.PORT || 6000)
app.set('views', __dirname + '/server')
app.set('view engine', 'jade')
app.use(require('stylus').middleware(
{src: __dirname + '/server', dest: __dirname + '/public'}))

app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

if ('development' === app.get('env')) {
  app.use(express.errorHandler())
}

app.get('/', function(req, res) {
  res.render('index')
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})
