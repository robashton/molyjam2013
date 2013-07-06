module.exports = {
  "start": {
    blurb: 'You are alone in a summery field, in your paws you hold a single acorn',
    actions: [ "plantacorn" ],
    possibleEvents: [ "birdwheeling", "cloudoversun"],
    tick: function() {

    }
  },
  "waitingtobegin": { 
    actions: [],
    possibleEvents: [ "birdwheeling", "cloudoversun" ],
    tick: function(game) {
      if(Math.random() < 0.1)
        game.inventory.add("acorn")
    }
  }
}
