var Game = require('./game')
  , game = new Game()

game.on('state-changed', function() {
  console.log(game.currentBlurb())
  console.log('----------')
  console.log(game.availableActions().map(function(s) { return s.text }).join())
  console.log('----------')
})

game.on('random-encounter', function() {
  console.log(game.activeEvent.text)
  console.log('----------')
  console.log(game.availableActions().map(function(s) { return s.text }).join())
  console.log('----------')
})

setInterval(function() {
  game.tick()
}, 1000)

game.start()

module.exports = game
