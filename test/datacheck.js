var Events = require('../client/events')
  , Items = require('../client/items')
  , States = require('../client/states')
  , Actions = require('../client/actions')
  , should = require('should')

describe("States", function() {
  for(var k in States) {
    describe("State " + k, function() {
      var state = States[k]

      it("has valid possible events", function() {
        for(var i =0 ; i < state.possibleEvents.length; i++) {
          should.exist(Events[state.possibleEvents[i]])
        }
      })

      it("has valid possible actions", function() {
        for(var i =0 ; i < state.actions.length; i++) {
          should.exist(Actions[state.actions[i]])
        }
      })
    })
  }
})

describe("Events", function() {
  for(var k in Events) {
    describe("Event " + k, function() {
      var ev = Events[k]
      if(!ev.actions) return
      it("has valid possible actions", function() {
        for(var i =0 ; i < ev.actions.length; i++) {
          should.exist(Actions[ev.actions[i]])
        }
      })
    })
  }

})
