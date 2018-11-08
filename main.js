/* 
HELLO WORLD
*/

// console.log('Hello World!')

/* 
VARIABLES
*/

// var one = 1
// var word = 'Hello'
// var boolean = true
// var nothing = null
// var nada = undefined
// var nada_two

// console.log(one)
// console.log(word)
// console.log(boolean)
// console.log(nothing)
// console.log(nada)
// console.log(nada_two)

// var change = 'One'

// console.log(change)

// change = 'Two'

// console.log(change)

// const change = 'One'
// console.log(change)

// change = 'Two'
// console.log(change)

// let change = 'One'
// console.log(change)

// change = 'Two'
// console.log(change)

// let change = 'One'
// console.log(change)

// change = false
// console.log(change)

/* 
IF ... ELSE
*/

// let one = 1
// let two = 2

// if (one === 1) {
//     console.log('One')
// } else {
//     console.log('Not One?')
// }

// if (one === two) {
//     console.log('We are the same')
// }

// if (one === two) {
//     console.log('We are the same')
// } else if (one === two) {
//     console.log('We are not the same')
// } else {
//     console.log('IDK what is going on')
// }

// one === two ? console.log('We are the same') : console.log('We are not the same')

// condition ? value if true : value if false

/* 
STRING INJECTION
*/

// const temp = 87
// const city = 'New York City'

// const print = `The current temperature is ${temp}° in ${city}`

// console.log(print)

/* 
FUNCTIONS
*/

// const one = 1
// const two = 2

// function sum() {
//     let sum  = one + two
//     console.log(sum)
// }

// const a = sum()

// function returnSum() {
//     let sum  = one + two
//     return sum
// }

// const b = returnSum()
// console.log(returnSum)
// console.log(returnSum())

// const three = 3
// const four = 4
// const five = 5
// const six = 6

// function multiply(a, b) {
//     return a * b
// }

// const c = multiply(three, four)
// const d = multiply(five, six)
// console.log(c)
// console.log(d)

// const multiplyTwo = (a, b) => a * b
// const math = () => 1 + 100

// console.log(multiplyTwo(2,5))
// console.log(math())

// const complex = (first, last, message) => {

//     if (!last) {
//         last = ''
//     }
    
//     return `Hey ${first} ${last}, you just ${message}`
// }

// const message = complex('Matt', 'Forrest', 'Won $1M!')
// const message2 = complex('Matt', null, 'Won $1M!')

// console.log(message)
// console.log(message2)

/* 
FUNCTION SCOPE
*/

// const cat = 'Jerry'

// console.log(cat)

// const localScopeExample = () => {
//   const dog = 'Marley'
//   console.log(cat)
//   console.log(dog)
// }

// localScopeExample()

// console.log(cat)
// console.log(dog)

// const cat = 'Jerry'
// let dog

// console.log(cat)

// const localScopeExample = () => {
//   dog = 'Marley'
//   console.log(cat)
//   console.log(dog)
// }

// localScopeExample()

// console.log(cat)
// console.log(dog)

// const dog = 'Lewis'
// let bird

// const outerFunc = () => {

//   const cat = 'Jerry'

//   const innerFunc = () => {
//     bird = 'Brad'
//     console.log(cat)
//     console.log(dog)
//   }
//   innerFunc()
// }

// console.log(bird)
// outerFunc()
// console.log(bird)

/*
EXECUTION CONTEXT AND LEXICAL ENVIRONMENT
*/

// window.open('https://hackernoon.com/javascript-execution-context-and-lexical-environment-explained-528351703922')

/*
OBJECTS & JSON
*/

// const name = 'Matt'

// const person = {
//     first: 'Matt',
//     last: 'Forrest',
//     age: 30,
//     college: 'Wisconsin',
//     graduated: true
// }

// console.log(name)
// console.log(person)

// console.log(typeof name)
// console.log(typeof person)

// console.log(person.age)
// console.log(typeof person.age)

// const people = [
//     {
//         first: 'Matt',
//         last: 'Forrest',
//         age: 30,
//         college: 'Wisconsin',
//         graduated: true
//     },
//     {
//         first: 'Matt',
//         last: 'Forrest',
//         age: 30,
//         college: 'Wisconsin',
//         graduated: true
//     }
// ]

// console.log(typeof people)
// console.log(people)
// console.log(people[0])

// person.graduated = false
// console.log(person)
// person.graduated = true

// const { first, last, age, collge, graduate } = person

// console.log(first)

// const fullname = {
//     first: 'Matt',
//     last: 'Forrest',
//     age: 30,
//     college: 'Wisconsin',
//     graduated: true,
//     full: () => { return `${first} ${last}`}
// }

// console.log(fullname.full())

/* 
BUILT IN FUNCTIONS
*/

// const name = 'Matt'
// const million = 1000000

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(million.toLocaleString('en-US'))
// console.log(million.toLocaleString('es-ES'))
// console.log(million.toLocaleString('ar-EG'))

// https://www.w3schools.com/jsref/jsref_obj_string.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

/* 
LIBRARIES
*/

// console.log(carto)
// console.log(carto.layer)
// console.log(carto.layer.Layer)

/*
FETCHING DATA
*/

// let url = 'http://mforrest.carto.com/api/v2/sql?q=SELECT * from rail_accidents limit 3&api_key=665b6d21a3b9c20906057414b7da378b519df141';
// let data

// fetch(url)
// .then(res => res.json())
// .then((out) => {
//   data = out
//   console.log(out)
//   console.log(out.rows)
//   console.log(out.rows[0])
//   console.log(out.rows[0].cause)
// })
// .catch(err => { throw err })

// console.log('DATA: ', data)


// const C = {
//     API_KEY: '665b6d21a3b9c20906057414b7da378b519df141',
//     SQL_API_URL: 'http://mforrest.carto.com/api/v2/sql?'
// }

// let axiosData

// const { API_KEY, SQL_API_URL } = C;

// const SQL_CLIENT = axios.create({
//     method: 'get',
//     url: SQL_API_URL,
//     params: {
//         api_key: API_KEY
//     }
// });

// const query = `SELECT * from rail_accidents limit 3`

// SQL_CLIENT.request({
//     params: {
//         q: query
//     },
// }).then((result) => {
//   console.log(result)
//   axiosData = result.data.rows
//   console.log(axiosData)
// })
// .catch((error) => { 
//     console.log(error)
// })

// console.log(axiosData)

// // CHECK IT IN THE CONSOLE!

/* THIS */

// function learnThis() {
//     console.log(this)
//     return this
// }

// learnThis()

// function makeName(settings) {
//     this.name = `${settings.firstname} ${settings.lastname}`
//     this.affirmation = `${settings.firstname} is amazing!`  
//     console.log(this)
//     console.log(this.name)
// }

// const name = new makeName({
//     firstname: 'Matt',
//     lastname: 'Forrest'
// })

// console.log(name.affirmation)