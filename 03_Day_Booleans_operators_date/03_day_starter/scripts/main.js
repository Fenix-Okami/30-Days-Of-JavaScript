// this is your main.js script
const firstName='Fenix'
const lastName='Okami'
const country='US'
const age=30
const isMarried=false
// let year=2023
console.log(typeof('10')==typeof(10))
console.log(parseInt('9.8'))
console.log(parseInt('9.8')==10)

console.log('python'.length === String('jargon'.length))

// let base=prompt('Enter base')
// let height=prompt('Enter height')
// area=base*height/2
// alert(`the area of the triangle is ${area}`)

// let today=new Date()
// let today_year=today.getFullYear()
// let birth_year=prompt('Enter your birth year')
// alert(`you are ${today_year-birth_year} years old`)

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(now.toString())
console.log(now.toISOString())
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
