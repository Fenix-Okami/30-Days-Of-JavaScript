// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')
// let age=prompt('Enter your Age')
// if (age>=18){
//     alert('You are old enought to drive')
// } else {
//     alert(`You are left with ${18-age} years to drive`)
// }

let a=4
let b=3

a>b
? console.log(`${a} is greater than ${b}`)
: console.log(`${a} is not greater than ${b}`)

let grade = prompt('Enter Grade');
switch (true) {
  case grade >= 80:
    console.log('A');
    break;
  case grade >= 70:
    console.log('B');
    break;
  case grade >= 60:
    console.log('C');
    break;
  case grade >= 50:
    console.log('D');
    break;
  case grade >= 0:
    console.log('F');
    break;
}