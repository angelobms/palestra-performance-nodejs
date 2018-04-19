const fs = require('fs')
const faker = require('faker')
let items = []

function createItems () {
  try {
    console.log('removing items...')
    fs.unlinkSync('items.json')
  } catch (e) { }

  console.log('creating one million items...')
  console.time('creating items')
  for (var i = 0; i < 1000000; i++) {
    items.push({
      name: faker.name.findName(),
      email: faker.internet.email()
    })
  }
  console.timeEnd('creating items')
  console.log('saving items...', '\n')
  fs.writeFileSync('items.json', JSON.stringify(items))
}

createItems()
const readItems = JSON.parse(fs.readFileSync('items.json', 'utf8'))

console.time('for')
let itemsFor = []
for (let i = 0; i < readItems.length; i++) {
  itemsFor.push(readItems[i].name.length ** 100)
}
console.timeEnd('for')

let itemsForin = []
console.time('forin')
for (let i in readItems) {
  itemsForin.push(readItems[i].name.length ** 100)
}
console.timeEnd('forin')
/*
*
*
*
*/
console.time('map')
readItems
  .map(i => i.name.length ** 100)
console.timeEnd('map')

console.time('map_filter_reduce')
readItems
  .map(i => i.name.length ** 100)
  .concat(readItems.map(i => i.name.length ** 100 * 3))
  .filter(i => i % 2 === 0)
  .reduce((next, prev) => next ** 2)
console.timeEnd('map_filter_reduce')
/*
*
*
*
*/
console.time('map_reduce')
readItems
  .map(i => i.name.length ** 100)
  .concat(readItems.map(i => i.name.length ** 100 * 3))
  .reduce((next, prev) => next ** 2)
console.timeEnd('map_reduce')

console.time('map_filter_reduce')
readItems
  .map(i => i.name.length ** 100)
  .concat(readItems.map(i => i.name.length ** 100 * 3))
  .filter(i => i % 2 === 0)
  .reduce((next, prev) => next ** 2)
console.timeEnd('map_filter_reduce')
/*
*
*
*
*/
console.time('map_filter')
readItems
  .map(i => i.name.length ** 100)
  .concat(readItems.map(i => i.name.length ** 100 * 3))
  .filter(i => i % 2 === 0)
console.timeEnd('map_filter')

console.time('map_filter_reduce')
readItems
  .map(i => i.name.length ** 100)
  .concat(readItems.map(i => i.name.length ** 100 * 3))
  .filter(i => i % 2 === 0)
  .reduce((next, prev) => next ** 2)
console.timeEnd('map_filter_reduce')

process.exit(0)
