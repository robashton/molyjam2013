var Game = require('./game')

describe("Gaining acorns over time", function() {
  var game = new Game()

  before(function() {
    game.takeAction('Plant acorn')
    game.executeTicks(10)
  })

  it("has 10 acorns after 10 ticks", function() {
    game.countItemsInInventory('acorn(s)').should.equal(10)
  })

})
