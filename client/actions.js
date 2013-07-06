module.exports = {
  "plantacorn": {
    text: 'Plant acorn',
    cb: function(game) {
      game.changeState("waitingtobegin")
    }
  },
  "waitlonger": {
    text: 'Wait a little longer',
    cb: function(game) {
      game.changeState("waitabitlonger")
    }
  },
  'gotoriver': {
    text: 'Walk down to the river',
    cb: function(game) {
      game.changeState("downbytheriver")
    }
  },
  'gototree': {
    text: 'Head back to the tree',
    cb: function(game) {
      game.changeState("atthetree")
    }
  },
  'takewater': {
    text: 'Fill your bucket with water',
    cb: function() {

    }
   },
  'watertree': {
    text: 'Water the tree',
    cb: function() {

    }
   }
}
