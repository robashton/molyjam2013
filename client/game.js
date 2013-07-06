var Inventory = require('./inventory')
  , States = require('./states')
  , Actions = require('./actions')
  , Events = require('./events')
  , EventEmitter = require('events').EventEmitter
  , extend = require('extend')

var Game = function() {
  EventEmitter.call(this)
  this.flags = {}
  this.activeEvent = false
  this.inventory = new Inventory()
}

Game.prototype = {
  start: function() {
    this.changeState("start")
  },
  availableActions: function() {
    var game = this
      , actions = this.state.actions

    if(this.activeEvent && this.activeEvent.actions)
      actions = actions.concat(this.activeEvent.actions)

    return actions
      .map(function(s) {
        return Actions[s]
      })
      .filter(function(s) {
        if(s.valid && !s.valid(game))
          return false
        return true
      })
  },
  currentBlurb: function() {
    return this.state.blurb
  },
  takeAction: function(action) {
    var selected = this.availableActions()
      .filter(function(s) {
        return s.text === action
    })[0]
    selected.cb(this)
  },
  feedback: function(msg) {
    this.emit('feedback', msg)
  },
  registerAction: function(action, cb) {
    this.actions[action] = cb
  },
  changeState: function(state) {
    this.state = States[state]
    this.emit('state-changed')
  },
  tick: function() {
    if(Math.random() < 0.05) 
      this.randomEncounter()
    this.state.tick(this)
  },
  randomEncounter: function() {
    var possibleEvents = this.state.possibleEvents
    var ev = possibleEvents[Math.floor(Math.random() * possibleEvents.length)]
      , evinfo  = Events[ev]
    if(!ev.valid || ev.valid(this))
      this.setActiveEvent(evinfo)
  },
  setActiveEvent: function(ev) {
    this.activeEvent = ev
    this.emit('random-encounter')
  },
  clearEncounters: function() {
    this.activeEvent = null
    this.emit('state-changed')
  },
  kill: function() {
    console.error('Not implemented yet')
  }
}
extend(Game.prototype, EventEmitter.prototype)

module.exports = Game
