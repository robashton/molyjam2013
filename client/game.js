var Game = function() {

}

Game.prototype = {
  availableActions: function() {
    return [ 'Plant acorn' ]
  },
  currentBlurb: function() {
    return 'have an acorn'
  }
}

module.exports = Game
