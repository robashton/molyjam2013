var Items = require('./items')

var Inventory = function() {
  this.items = []
}

Inventory.prototype = {
  add: function(item) {
    this.items.push(Items[item])
  },
  remove: function(name, count) {
    count = count || 1 
    while(count-- > 0) {
      for(var i = 0; i < this.items.length; i++) {
        if(this.items[i].name === name) {
          this.items.splice(i, 1)
          break;
        }
      }
    }
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
