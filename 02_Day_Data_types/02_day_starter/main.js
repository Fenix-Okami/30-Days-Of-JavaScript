// this is your main.js script

// level 1
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,7))
console.log(challenge.substring(3))
console.log('does', challenge, 'include Script? ',challenge.includes('Script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))
console.log(FANNG.split(', '))
console.log(challenge.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
console.log(challengeSpace.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
let pattern= /a/gi
console.log(challenge.match(pattern))
console.log('30 Days of '.concat('Javascript'))
console.log(challenge.repeat(2))

// level 2

console.log("The quote 'There is no excersise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(parseInt('10'))
console.log(Math.round(parseFloat('9.8')))
console.log('python'.includes('on') && 'jargon'.includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))

let rand = Math.floor(Math.random() * 101)
console.log(rand)
let rand2 = Math.floor(Math.random() * 51)+50
console.log(rand2)
let rand3 = Math.floor(Math.random() * 256)
console.log(rand3)

// level 3
let message='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let message_pattern=/love/gi
console.log('love is mentioned this many times:', message.match(message_pattern).length)
let message2='You cannot end a sentence with because because because is a conjunction'
let message_pattern2=/because/gi
console.log('because is mentioned this many times:', message2.match(message_pattern2).length)
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let fix_pattern=/(%|@|\$|&|#)/g
let sentence_cleaned=sentence2.replace(fix_pattern,'')
console.log(sentence_cleaned)

const salary='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let num_pattern=/\d{2,}/gi
console.log(salary)
nums=salary.match(num_pattern)
console.log(nums)
let total_salary=(parseInt(nums[0])+parseInt(nums[2]))*12+parseInt(nums[1])
console.log(total_salary)





