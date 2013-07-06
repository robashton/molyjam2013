# Brainstorming

- Start off with a single acorn
  - Plant it
  - The goal is to grow that tree so we can harvest a golden acorn

- Can water it
- Can watch it grow

- The tree will shed acorns

- We can use those acorns to feed squirrels
- We can use those acorns to heal up
- We can use those acorns for everything

- Those squirrels will bring you things (perhaps this is expensive)
  - That implies an inventory of stuff
  - We can get stuff from questing too

- With an inventory we can do quests
- quests are just text and decisions in a decision tree of some sort
- We can level up, when we level up the number of acorns we have impacts
 - how much hp we get extra
 - how much defence we get extra
 - etc etc

So the game is about balancing the spending of acorns for short term gain, vs hoarding them for long term gain

# MVP

- Acorn, plant it
- See a visual representation of that tree
- Have an increasing acorn count
- Have a health counter
- Have the ability to go on a single text-driven quest
  - Make decisions (left/right/etc)
  - Heal
  - Fight
  - Turn based
  - On reaching 1000 acorns, we get the golden acorn

# Story so far

- You have an acorn, and you plant it     [x]
  - You can choose to eat it, game over
- Ticks are every 5 seconds
  => after 5 ticks, the tree appears
  => after 10 ticks, you start gaining acorns (small numbers)
  => after 15 ticks, you start getting options

- Tell a story during this
  => Tree needs to grow

- Events

=> Squirrel comes and asks whatcha doing (only on return from the river)
  => He'll give you a bucket if you tell him
  => Else go back to waiting

=> Explore down near the river
  => Can gather water if you have a bucket
  => Can use the key if you have it

=> Can water the tree if you have a bucket of water
  => Receive an acorn everytime you water the tree

=> If we have 10 acorns, we can buy a shovel from another squirrel
=> We can dig a channel from the river to the tree

=> Acorns now come automatically which is nice
=> At 20 acorns a branch falls off tree, we can use this to quest with

=> Let's go on a quest along the river
  => Meet a <enemy>, he might fight you
  => You can pay him acorns not to and escape
  => You can throw acorns at him to fight
  => You can heal with acorns if you do fight
  => <enemy> drops items that might be useful
  => Keep going or return?
  => Dying means losing all your acorns so far

  => As you level up, the tree levels up too, produces more acorns?
  => Spend acorns on upgrading stick

  => Win once tree is level 10
