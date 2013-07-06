var Game = require('./game')
  , game = new Game()

setInterval(function() {
  game.tick()
}, 1000)

module.exports = game
