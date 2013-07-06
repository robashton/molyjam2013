module.exports = {
  "start": {
    blurb: 'I am alone in a summery field, in my paws I hold a single acorn',
    actions: [ "plantacorn" ],
    possibleEvents: [ "birdwheeling", "cloudoversun"],
    tick: function() {

    },
  },
  "waitingtobegin": { 
    blurb: 'I plant the acorn, and sit down. I feel that today is a magical day and if I wait long enough, something might just happen',
    actions: [],
    possibleEvents: [ "birdwheeling", "cloudoversun", "treegrow1", ],
    waiting: 0,
    tick: function(game) {
      if(++this.waiting > 15)
        game.changeState('resting')
    }
  },
  "resting": {
    blurb: 'The acorn which I planted not moments ago has already turned into a tree, this summer is going to be a good one',
    actions: [ 'gotoriver', 'waitlonger' ],
    possibleEvents: [ 'birdwheeling', 'cloudoversun', 'treegrow1', 'badgerinterest' ],
    tick: function() {

    },
  },
  "atthetree": {
    blurb: "The tree I planted has grown since I was last here, the desire to take in the sun's warm embrace is a powerful motivation for one to get out of bed",
    actions: [ 'gotoriver', 'waitlonger', 'watertree' ],
    possibleEvents: [ 'birdwheeling', 'cloudoversun', 'treegrow2', 'badgerinterest', 'squirrelshop', 'squirrelshop' ],
    tick: function() {

    },
  },
  "waitabitlonger": {
    blurb: 'The sun caresses my skin and I wait a little while longer to see what the day will bring next',
    actions: [],
    possibleEvents: [ 'birdwheeling', 'cloudoversun', 'treegrow2', 'squirrelshop', 'badgerinterest', 'squirrelshop'  ],
    waiting: 0,
    tick: function(game) {
      if(++this.waiting > 15)
        game.changeState('resting')
    },
  },
  "downbytheriver": {
    blurb: 'It is nearly evening down by the river, and the few remaining ducks are heading to roost for the night',
    actions: [ 'gototree', 'takewater', 'digchannel' ],
    possibleEvents: [ 'rivertrickles', 'fishflops', 'treesrustle' ],
    tick: function() {

    }
  }
}
