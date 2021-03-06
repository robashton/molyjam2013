module.exports = {
  "birdwheeling": {
    text: "A bird soars high above my head, it doesn't seem dangerous so I smile at thought of such freedom as it has"
  },
  "cloudoversun": {
    text: "A passing cloud moves in front of the sun and I shiver at the temporary drop in temperature, relieved when the warmth finally returns to my skin"
  },
  "treegrow1": {
    text: "The tree I planted is slowly poking its head through the warm topsoil, eager to be out in the sunshine with me"
  },
  "treegrow2": {
    text: "The tree bows gently towards the sun, as if offering thanks for the gift of enjoying this wonderful summer day"
  },
  'rivertrickles': {
    text: 'The river trickles gently from one end of the field to the other, I don\'t know where it comes from or where it goes to and this lack of knowing unnerves me sometimes'
  },
  'fishflops': {
    text: 'A fish flops out of the water, presumably chasing a fly. how strange it is thinking that there is life under the water when I can\'t even swim'
  },
  'treesrustle': {
    text: "the trees around the river emit a slow rustle as the breeze flows between their branches like the water travelling beneath them"
  },
  'badgerinterest': {
    valid: function(game) {
      return game.inventory.count('bucket') === 0 
    },
    text: "A passing badger looks over with interest at my project and gives me a glancing smile",
    actions: [ 'smileatbadger', 'throwacornatbadger', 'ignorebadger' ]
  },
  'squirrelshop': {
    valid: function(game) {
      return game.inventory.count('acorn(s)') > 10 && 
             game.inventory.count('shovel') === 0
    },
    actions: [ 'buyshovel' ],
    text: "A squirrel bounds up to the foot of my tree and asks if I want to buy a shovel for 10 acorns, seems my hard work has not gone unnoticed by the most enteprising amongst us"
  }
}
