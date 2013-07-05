var Inventory = require('./inventory')

var Game = function() {
  this.state = StartState
  this.inventory = new Inventory()
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
  },
  tick: function() {
    this.state.tick(this)
  }
}
var PlantAcorn = {
  text: 'Plant acorn',
  cb: function(game) {
    game.changeState(WaitingState)
  }
}

var StartState = {
  blurb: 'have an acorn',
  actions: [ PlantAcorn ]
}

var WaitingState = { 
  actions: [],
  tick: function(game) {
    game.inventory.add(Acorn)
  }
}

var Acorn = {
  name: "acorn(s)"
}

module.exports = Game
