var Game = function() {
  this.state = StartState
}

Game.prototype = {
  availableActions: function() {
    return this.state.actions.map(function(s) {
      return s.text
    })
  },
  currentBlurb: function() {
    return this.state.blurb
  },
  takeAction: function(action) {
    var selected = this.state.actions.filter(function(s) {
      return s.text === action
    })[0]
    selected.cb(this)
  },
  registerAction: function(action, cb) {
    this.actions[action] = cb
  },
  changeState: function(state) {
    this.state = state
  }
}

var PlantAcorn = {
  text: 'Plant acorn',
  cb: function(game) {
    game.changeState(EmptyState)
  }
}

var StartState = {
  blurb: 'have an acorn',
  actions: [ PlantAcorn ]
}


var EmptyState = { 
  actions: []
}

module.exports = Game
