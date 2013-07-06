var Game = require('./game')

describe("Gaining acorns over time", function() {
  var game = new Game()

  before(function() {
    game.takeAction('Plant acorn')
    game.executeTicks(1000)
  })

  it("has some acorns after 1000 ticks", function() {
    game.countItemsInInventory('acorn(s)').should.be.above(1)
  })

})
