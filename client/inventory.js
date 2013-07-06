var Items = require('./items')

var Inventory = function() {
  this.items = []
}

Inventory.prototype = {
  add: function(item) {
    this.items.push(Items[item])
  },
  count: function(name) {
    return this.items.reduce(function(prev, current) {
      if(current.name === name)
        prev += 1
      return prev
    }, 0)
  }
}

module.exports = Inventory
