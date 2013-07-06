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
    text: 'Fill the bucket with water',
    valid: function(game) {
      return game.inventory.count('bucket') === 1
    },
    cb: function(game) {
      game.inventory.remove('bucket')
      game.inventory.add('bucketofwater')
      game.feedback("I fill the bucket with water from the stream, it's pretty heavy but I have a plan")
    }
   },
  'watertree': {
    text: 'Water the tree',
    valid: function(game) {
      return !game.flags.autoAcorn && game.inventory.count('bucket of water') === 1
    },
    cb: function(game) {
      game.inventory.add('acorn')
      game.inventory.remove('bucketofwater')
      game.inventory.add('bucket')
      game.feedback("I pour the water over the tree, feeling grateful it offers me up an acorn")
    }
  },
  'digchannel': {
    text: 'Dig a channel',
    valid: function(game) {
      return game.inventory.count('shovel') === 1 && !game.flags.autoAcorn
    },
    cb: function(game) {
      game.flags.autoAcorn = true
      game.feedback("I dig a channel from the river to the tree, I won't have to water it any longer")
    }
  },
  'smileatbadger': {
    text: 'Smile at the passing badger',
    cb: function(game) {
      game.inventory.add('bucket')
      game.feedback('I am given a bucket from the badger who tells me his name is Jayne. I am not sure what to do with it but any gift is a gift to be thankful for')
      game.feedback('Jayne wanders off into the distance, singing a song about buckets or such')
    }
  },
  'buyshovel': {
    text: 'Buy a shovel',
    cb: function(game) {
      game.inventory.add('shovel')
      game.inventory.remove('acorn', 10)
      game.feedback('I am given a shovel by the departing squirrel. He takes my acorns with a smile before bouncing happily off')
    }
  },
  'throwacornatbadger': {
    text: 'Throw an acorn at the badger',
    cb: function(game) {
      game.feedback('The badger lunges at me, and the last thing I remember is his powerful jaws wrapped around my throat')
      game.kill()
    }
  },
  'ignorebadger': {
    text: 'Ignore the badger',
    cb: function(game) {
      game.feedback('The badger wanders off into the distance, I think I hear him singing a song about buckets I\'m not really sure')
      game.clearEncounters()
    }
  }
}
