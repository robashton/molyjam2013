var Game = require('../client/game.js')


module.exports = function() {
  var game = new Game()
    , self = this

  self.availableActionCount = function() {
    return game.availableActions().length
  }

  self.currentBlurb = function() {
    return game.currentBlurb()
  }

  self.takeAction = function(action) {
    game.takeAction(action)
  }

  self.executeTicks = function(count) {
    for(var i = 0; i < count ; i++)
      game.tick()
  }

  self.hasAvailableAction = function(action) {
    var exists = false
    game.availableActions().forEach(function(existing) {
      if(existing === action)
        exists = true
    })
    return exists
  }
}

