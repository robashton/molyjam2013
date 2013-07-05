var Game = require('../client/game')

describe("A new game", function() {
  var game = new Game()

  it("has the action 'plant acorn' available", function() {
      game.availableActions()[0].should.equal('Plant acorn')
  })

  it("describes that the player has an acorn", function() {
      game.currentBlurb().should.include('have an acorn')
  })
})
