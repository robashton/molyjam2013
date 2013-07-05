var Game = require('./game')

describe("A new game", function() {
  var game = new Game()

  it("only has the action 'plant acorn' available", function() {
    game.hasAvailableAction('Plant acorn').should.equal(true)
    game.availableActionCount().should.equal(1)
  })

  it("describes that the player has an acorn", function() {
      game.currentBlurb().should.include('have an acorn')
  })
})

describe("Taking the first action", function() {
  var game = new Game()

  before(function() {
    game.takeAction('Plant acorn')
  })

  it("no longer has the action 'Plant acorn' available", function() {
    game.hasAvailableAction('Plant acorn').should.equal(false)
  })
})
