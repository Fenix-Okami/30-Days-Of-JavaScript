// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')
console.log(countries)
let empty=[]
let filled_array=Array(5).fill('X')
console.log(filled_array)

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart= ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
console.log(shoppingCart)
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea'
console.log(shoppingCart)

if (countries.includes('Ethiopia')){
    console.log('Ethiopia is in the Countries array')
}

webTechs.includes('SASS')
? console.log('SASS is in webTechs')
: webTechs.push('SASS'); console.log(webTechs)
 