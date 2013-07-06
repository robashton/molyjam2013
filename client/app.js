var Game = require('./game')
  , game = new Game()

game.on('state-changed', function() {
  console.log(game.currentBlurb())
  console.log(game.availableActions().join())
})

game.on('random-encounter', function() {
  console.log(game.activeEvent.text)
})

setInterval(function() {
  game.tick()
}, 1000)

game.start()

module.exports = game
