var Inventory = require('./inventory')
  , States = require('./states')
  , Actions = require('./actions')
  , Events = require('./events')

var Game = function() {
  this.inventory = new Inventory()
  this.changeState("start")
}

Game.prototype = {
  availableActions: function() {
    return this.state.actions.map(function(s) {
      var action = Actions[s]
      return action.text
    })
  },
  currentBlurb: function() {
    return this.state.blurb
  },
  takeAction: function(action) {
    var selected = this.state.actions
      .map(function(s) {
        return Actions[s]
      })
      .filter(function(s) {
        return s.text === action
    })[0]
    selected.cb(this)
  },
  registerAction: function(action, cb) {
    this.actions[action] = cb
  },
  changeState: function(state) {
    this.state = States[state]
  },
  tick: function() {
    if(Math.random() < 0.1) 
      this.randomEncounter()
    this.state.tick(this)
  },
  randomEncounter: function() {
    var possibleEvents = this.state.possibleEvents
    var ev = possibleEvents[Math.floor(Math.random() * possibleEvents.length)]
      , evinfo  = Events[ev]
    this.setActiveEvent(evinfo)
  },
  setActiveEvent: function(ev) {
    this.activeEvent = ev
  }
}

module.exports = Game
