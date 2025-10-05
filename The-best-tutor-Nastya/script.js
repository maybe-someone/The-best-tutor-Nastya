'use strict'

// alert('Hello world!')

// let message
//
// message = "Привет"
//
// console.log(message)
//
// message = "BB"
//
// console.log(message)
//
// const txt = "Hi"
//
// console.log(txt)
//
// let age = 19
//
// console.log(age)

// let name = 'Deny', family = 'Wood'
//
// let fully_name = `Имя: ${name} Фамилия: ${family}`
//
// let a = 10
// let b = 5
// a = `${a+b}`
// b = a < 19
//
// console.log(fully_name)
// console.log(a)
// console.log(b)
// console.log(
//     typeof Number(a),
//     typeof fully_name
// )

// console.log(24.1 % 5)
//
// console.log('4' + '5')
//
// console.log(
//     +'3' + +'5'
// )
//
// console.log(
//     +true,
//     +false
// )

// let number
// number = prompt('Введите первое число: ')
// let number2
// number2 = prompt('Введите второе число: ')
// let withPermission
// withPermission = confirm('Есть ли у вас разрешение: ')
//
// // if (number > 0) {
// //     console.log("Yes")
// // } else if (number < 0) {
// //     console.log('No')
// // } else if (number == 0) {
// //     console.log('Null')
// // } else {
// //     console.log('Error')
// // }
//
// let message = (number > 0) || (number2 > 0) || (withPermission)
//     ? 'Yes'
//     : (number < 0) || (number2 < 0)
//         ? 'No'
//         : (number == 0) & (number2 == 0)
//             ? 'Null'
//             : undefined
// alert(message)
//
// alert('Badbye world!')

// let age = prompt('Введите свой возраст')
//
// while ((! (age > 2)) || (age > 100)) {
//     age = prompt('Введите реальный возраст')
// }
//
// let permission = confirm('Есть ли у вас разрешение?')
//
// switch (true) {
//     case (age < 18) && (!permission): {
//         console.log('No')
//         break
//     }
//     case (age >= 18) || (permission): {
//         console.log('Yes')
//         break
//     }
//     default: {
//         console.log(undefined)
//         break
//     }
// }
// alert('fas')
// let age = 0
//
// while (age < 1) {
//     console.log('')
// }

// let i = 0
//
// for (let m = 0; i < 4; m++) {
//     alert(i)
//     i++
// }

// function logHello() {
//     console.log('Hello world!')
// }
//
// logHello()

// function summer(x, y) {
//     return x + y
// }
//
// console.log(summer(2, 2))

// function getAgeType(age, minAge = 18) {
//     age = Number(age)
//     if ((typeof age != 'number') || (isNaN(age) === true)) {
//         return 0
//     }   else if ((age < 2) || (age > 100)) {
//         return 1
//     }   else if (age < minAge) {
//         return 2
//     }   else {
//         return 3
//     }
// }
// let i = getAgeType(prompt('Введите ваш возраст'))
//
// // const i = prompt('Введите ваш возраст')
// // console.log(typeof ('1' + i))
// // console.log(typeof i)
// // console.log(1 -i)
// // console.log(isNaN(i))
//
//
//
// for (; i < 2;) {
//     console.log(i)
//     if (i === 0) {
//         i = getAgeType(prompt('Введите ваш возраст числом'))
//         console.log(`===0 ${i}`)
//     } else if (i === 1) {
//         i = getAgeType(prompt('Введите ваш реальный возраст'))
//         console.log(`===1 ${i}`)
//     }
//     console.log(`gg ${i}`)
//     if (i > 1) {
//         console.log('!')
//         break
//     }
// }
//
// if (i === 2) {
//     alert(`Вы не соотвествуете минимальному возрасту`)
//     const permission = confirm('Есть ли у вас разрешение?')
//     if (permission === false) {
//         alert('Вам отказано в доступе')
//     } else {
//         alert('Добро пожаловать!')
//     }
// } else {
//     alert('Добро пожаловать!')
// }

// function getAgeType(age, minAge = 18) {
//     if (typeof age != 'number') {
//         return 'Введите ващ возраст:'
//     }   else if (age < minAge) {
//         return `Минимальный возраст ${minAge}`
//     }   else if ((age < 0) || (age > 100)) {
//         return 'Введите реальный возраст'
//     }   else {
//         return true
//     }
// }

// function logAll() {
//     console.log(arguments)
// }
//
// logAll(12212, false, 34, 'gg')

// const logHello = function () {
//     console.log('Hello wrold!')
// }
//
// logHello()

// let logHello = function () {
//     console.log('Hello world!')
// }
// logHello()
//
// logHello = function () {
//     console.log('Byebye wrold <3')
// }
// logHello()

// const logHello = () => {
//     console.log('Hello world!')
// }
// logHello()

// const logByebye = () => console.log('Byebye world <3')
//
// logByebye()

// const logMinus = (x, y) => console.log(x-y)
//
// let logSum = (x, y) => console.log(x+y)
// logSum(1, 2)
//
// const Summer = logSum
//
// logSum(1, 2)
// Summer(1, 2)
//
// logSum = logMinus
// logSum(1, 2)
// Summer(1, 2)

// const logCombiner = (actionBefore, actionAfter) => {
//     actionBefore()
//     console.log('Middle')
//     actionAfter()
// }
//
// const logSum = () => console.log('start')
// const logMinus = () => console.log('end')
//
// logCombiner(logSum, logMinus)

// ?
// const logSum = (a, b) => console.log(a+b)
// const logMinus = (a, b) => console.log(a-b)

// const logCombiner = (actionBefore, actionAfter) => {
//     actionBefore()
//     console.log('Middle')
//     actionAfter()
// }
// logCombiner(
//     () => console.log('start'),
//     () => console.log('end')
// )

// const validator = (hasAccess) => {
//     return hasAccess
//     ? () => console.log('Yes')
//     : () => console.log('No')
// }
//
// const message = validator(true)
//
// message()

// const people = {
//     Name: 'Johan',
//     Age: 26,
//     Alive: true,
//     'Date of regestration': '10.10.2000',
//     sayHi: () => console.log('Hi'),
//     'Favorite food': () => console.log('Pizza')
// }
// console.log(people.Name)
// console.log(people['Date of regestration'])
// people.sayHi()
// people["Favorite food"]()

// const user = {}
//
// user.name = 'Alex'
// user['favorite food'] = 'pizza'
//
// console.log(user.name)
// console.log(user['favorite food'])
//
// user.name = 'Max'
// console.log(user.name)
//
// delete user['favorite food']
// console.log(user['favorite food'])

// const name = 'Alex'
// const age = 26
//
// const people = {
//     name: name,
//     age: age,
// }
//
// const user = {
//     name,
//     age,
// }
//
// console.log(people)
// console.log(user)
// console.log('alive' in user)
// console.log('name' in user)
//
// for (const key in user) {
//     console.log(`${key}:`, user[key])
// }

// const obj1 = {
//     name: 'Alex',
//     age: 19,
//     'date & location': {
//         date: '01.02.2000',
//         location: 'Oslo'
//     }
// }
// const obj2 = {
//     name: 'Alex',
//     age: 19,
//     'date & location': {
//         date: '01.02.2000',
//         location: 'Oslo'
//     }
// }
//
//
//
// const objectEqual = (object1, object2) => {
//     const key1 = Object.keys(object1)
//     const key2 = Object.keys(object2)
//
//     console.log(`Длинна ${object1}:`, key1.length)
//     console.log(`Содержимое ${object1}:`, key1)
//     console.log(`Длинна ${object2}:`, key2.length)
//     console.log(`Содержимое ${object2}:`, key2)
//     if (key1.length !== key2.length) {
//         return false
//     }
//
//     for (const key in object1) {
//         const value1 = object1[key]
//         const value2 = object2[key]
//         const areValueObjects =
//             typeof value2 === 'object' && typeof value2 === 'object'
//
//         if (areValueObjects) {
//             return objectEqual(value1, value2)
//         }
//
//         if (value1 !== value2) {
//             return false
//         }
//     }
//
//     return true
// }
//
// if (objectEqual(obj1, obj2) === true) {
//     console.log('Yes')
// } else  {
//     console.log('No')
// }
//
//
// console.log('END')


// const obj1 = {
//     name: 'Alex',
//     age: 19,
//     'date & location': {
//         date: '01.02.2000',
//         location: 'Oslo'
//     }
// }
// const obj2 = {}
//
// for (const key in obj1) {
//     obj2[key] = obj1[key]
// }

// const obj1 = {
//     name: 'Alex',
//     age: 19,
//     'date & location': {
//         date: '01.02.2000',
//         location: 'Oslo'
//     }
// }
// const obj2 = Object.assign({}, obj1)
// const obj3 = { ...obj1}
//
//
//
// const objectEqual = (object1, object2) => {
//     const key1 = Object.keys(object1)
//     const key2 = Object.keys(object2)
//
//     console.log(`Длинна ${object1}:`, key1.length)
//     console.log(`Содержимое ${object1}:`, key1)
//     console.log(`Длинна ${object2}:`, key2.length)
//     console.log(`Содержимое ${object2}:`, key2)
//     if (key1.length !== key2.length) {
//         return false
//     }
//
//     for (const key in object1) {
//         const value1 = object1[key]
//         const value2 = object2[key]
//         const areValueObjects =
//             typeof value2 === 'object' && typeof value2 === 'object'
//
//         if (areValueObjects) {
//             return objectEqual(value1, value2)
//         }
//
//         if (value1 !== value2) {
//             return false
//         }
//     }
//
//     return true
// }
//
// if (objectEqual(obj3, obj2) === true) {
//     console.log('Yes')
// } else  {
//     console.log('No')
// }

// const user = {
//     name: 'alex'
// }
//
// const age = {
//     age: 19
// }
//
// const people = Object.assign({}, user, age)
// console.log(people)
//
// const human = { ...user, ...age}
// console.log(human)
//
// console.log('END')

// const obj = {
//     name: 'Alex',
//     age: 25,
//     address: {
//         city: 'Oslo',
//         zipcode: 12345667,
//     },
//     "birth day": {
//       ['da te']: '11.12.2000'
//     },
//     // address2: {
//     //     city: 'Oslo',
//     //     zipcode: 12345667,
//     // },
//     "birth day 2": {
//         ['da te']: '11.12.2000'
//     },
// }
//
// console.log(obj.address.city)
// console.log(obj['birth day']['da te'])
// console.log(obj.address2?.city)
// console.log(obj['birth day 2']['da te'])

// const user = {
//     name: 'Alex',
//     age: 19,
//     permission: true,
// }
//
// const {
//     name,
//     age,
//     permission,
//     live,
// } = user
//
// console.log(
//     name,
//     age,
//     permission,
//     live,
// )

// const logUser = (user) => {
//     console.log(
//         user.name,
//         user.age,
//         user.permission,
//     )
// }
//
// const person = {
//     name: 'Alex',
//     age: 19,
//     permission: true,
// }
// logUser(person)

// const logUser = (user) => {
//     const {name, age, permission} = user
//     console.log(
//         name,
//         age,
//         permission,
//     )
// }
//
// const person = {
//     name: 'Alex',
//     age: 19,
//     permission: true,
// }
// logUser(person)

// const logUser = ({name, age, permission}) => {
//     console.log(
//         name,
//         age,
//         permission,
//     )
// }
//
// const person = {
//     name: 'Alex',
//     age: 19,
//     permission: true,
// }
// logUser(person)

// const user = {
//     name: 'Alex'
// }
// const admin = {
//     name: 'John'
// }
//
// const { name: userName} = user
// const { name: adminName} = admin
//
// console.log(userName)
// console.log(adminName)

// const user = {
//     name: 'Alex',
//     city: 'Oslo',
// }
// const admin = {
//     name: 'John',
// }
//
// const { city = 'не укaзано'} = admin
//
// console.log(city)

// const logUser = ({name, age, permission, ...otherInfo}) => {
//     console.log(
//         `Имя: ${name}
//         Возраст: ${age}
//         Разрешения: ${permission}`
//     )
//     console.log(otherInfo)
// }
//
// const admin ={
//     name: "Alex",
//     age: 29,
//     permission: true,
//     company: 'Gamercon',
//     jobpost: 'gamedesigner',
// }
//
// logUser(admin)

// const user = {
//     name: 'Alex',
//     age: 18,
//     logthis: function () {
//         console.log('this в теле иетода', this)
//         console.log('this.name', this.name)
//     },
//     address: {
//         city: 'oslo',
//         street: 'rickywick',
//         logInnerThis: function () {
//             console.log('this в адрессе', this)
//             console.log('this.city', this.city)
//             // console.log('this.city', this.logInnerThis())
//             console.log('this.age', this.age)
//         }
//     },
//     address2: {
//         city: 'oslo',
//         logInnerThis: () => {
//             console.log('this в адрессе 2', this)
//         }
//     },
//     address3: {
//         city: 'oslo',
//         logInnerThis() {
//             console.log('this в адрессе 3', this)
//         }
//     }
// }
//
// user.logthis()
// user.address.logInnerThis()
// user.address2.logInnerThis()
// user.address3.logInnerThis()

// const user1 = { name: 'Alex'}
// const user2 = { name: 'John'}

// console.log(this)

// function logInfo() {
//     console.log('this', this)
//     console.log('this.name', this?.name)
// }

// logInfo()
//
// user1.logName = logInfo
// user2.logName = logInfo
//
// user1.logName()
// user2.logName()


// let calculator = {
//     read: () => {
//         this.a = Number(prompt('Введите a:'))
//         this.b = Number(prompt('Введите b:'))
//     },
//     sum() {
//         return a + b
//     },
//     mul() {
//         return a * b
//     }
// };
//
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this
//     },
//     down() {
//         this.step--;
//         return this
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//         return this
//     }
// };
//
// ladder.up().down().down().down().showStep()

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
//
//     return {
//         father: man,
//         mother: woman
//     }
// }
//
// let family = marry({
//     name: "John"
// }, {
//     name: "Ann"
// });
//
// console.log(family)

// const user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name

// const user = {}
//
//
// function isEmpty(obj) {
//     for (const key in obj) {return false}
//     return true
// }
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false


// const isObjSum = (obj, a = 0) => {
//     for (const key in obj) {if ((typeof obj[key] === "number")) {a += obj[key]}}
//     this.sum = a
// }
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// isObjSum(salaries)
//
// console.log(sum)

// const multiplyNumeric = (obj) => {for (const key in obj) {if ((typeof obj[key] === "number")) {obj[key] *= 2}}}
//
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// multiplyNumeric(menu)
// console.log(menu)

// const price = 99.55
// console.log(price.toFixed(0))
// console.log(price.toFixed(1))
// console.log(price.toFixed(2))
// console.log(price.toFixed(3))
//
// console.log(price.toPrecision(1))
// console.log(price.toPrecision(2))
// console.log(price.toPrecision(3))
// console.log(price.toPrecision(4))
// console.log(price.toPrecision(5))

// const price = 99.99
//
// console.log(typeof price)
// console.log(typeof price.toString())
// console.log('Перевод в двоичную:', price.toString(2))
// console.log('Перевод в восмиричную', price.toString(8))

// console.log(Math)
// console.log('Случайное число:', Math.random())
// console.log('Абсолютное значение(модуль):', Math.abs(-1))
// console.log('Возведение в степень:', Math.pow(2, 8))
// console.log('Квадратный корень:', Math.sqrt(16))
// console.log('Кубический корень:', Math.cbrt(8))
// console.log('Max:', Math.max(2, 8, 10, -12, 54524, 0, -121))
// console.log('Min:', Math.min(2, 8, 10, -12, 54524, 0, -121))
//
// const nums = [2, 8, 10, -12, 54524, 0, -121]
// console.log('Max в массиве:', Math.max(...nums))
//
// console.log('Округление стандартное:', Math.round(3.5))
// console.log('Округление вниз:', Math.floor(3.5))
// console.log('Округление вверх:', Math.ceil(3.1))
// console.log('Округление вниз', Math.trunc(-3.1))

// const numberAsString = '100.5dfas'
//
// console.log('Достать число из строки:', parseInt(numberAsString))
// console.log('Достать float из строки:', parseFloat(numberAsString))

// const name = 'Alex'
// console.log(name[0])
// console.log(name[1])
// console.log(name[name.length - 2])
// console.log(name[name.length - 1])

// const name = 'Alex'
// console.log(name.at(0))
// console.log(name.at(-1))
// console.log(name.indexOf('e'))
// console.log(name.indexOf('e') !== -1)
// console.log(name.indexOf('asde') !== -1)
// console.log(name.includes('e'))
// console.log(name.includes('ea'))

// const value = prompt('Введите ваше имя:')
//
// const clearValue = value.trim().toLowerCase()
//
// if (clearValue.length === 0) {
//     alert('Ошибка! Имя не может быть пустым')
// }
//
// if (clearValue.includes('админ')) {
//     alert('Ошибка! Имя не может содержать админ')
// }

// const letters = ['A', 'B', 'C']
// console.log(letters)
// letters.push('D')
// console.log(letters)
// letters.unshift('E')
// console.log(letters)
// letters.pop()
// console.log(letters)
// letters.push('D')
// console.log(letters.pop())
// console.log(letters.shift())
// console.log(letters)
//
// console.log(letters.toString())
// console.log(letters.join())
// console.log(letters.join(' '))

// const message = 'Раз, два, три, четыре, пять'
// console.log(message.split(', '))
// console.log(message.split(', ').join(' ~~~ '))

// const arr1 = ['A', 'B', 'C']
// const arr2 = [...arr1]
// arr2[0] = 'Хай'
// arr1.push(...arr2)
// console.log(arr1)
// console.log(arr2)

// const arr1 = ['A', 'B', 'C']
// const arr2 = arr1.slice()
// const arr3 = arr1.slice(1, 2)
//
// arr2[0] = 'Hi'
//
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
//
// let user = new User("Jack");
//
// console.log(typeof user)
// alert(user.name); // Jack
// alert(user.isAdmin); // false
//
//
// function Calculator(x, y) {
//     this.sum = x+y
//     this.minus = x-y
// }
//
// let calculator = new Calculator(1, 2)
//
// console.log(calculator.minus, calculator.sum)

// let a
// let b
//
// function Calculator() {
//     this.read = function read() {
//         this.a = prompt('Введите первое число: ', 0)
//         this.b = prompt('Введите второе число: ', 0)
//         console.log(this)
//     }
//     this.sum = () => {
//         return Number(calculator.a) + Number(calculator.b)
//     }
//     this.mul = () => {
//         return Number(calculator.a) * Number(calculator.b)
//     }
// }
//
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator (start = 1) {
//     this.value = start
//     this.read = function() {
//         this.value += Number(prompt('Введите значение: ', 0))
//     }
// }
//
//
//
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
// ];
//
// let user = users.find(p => p.name == 'Маша');
//
// alert(user.id);


// let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(m => m + 'afd');
// alert(lengths); // 6,8,6

// let arr = [1, 2, 3, 4, 5];
//
// let result = arr.reduce((all, now) => all + now, 0);
//
// alert(result); // 15

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// let result = arr.reduce((all, now) => all + now, '');
//
// alert(result); // 15

// function camelize(str) {
//     str = str.split('-')
//     let str2 = []
//     str.forEach((string, index) => {
//         if (index === 0) {return str2 += string + ''}
//         if (index == -1) {return str2 += string.slice(0, 1).toUpperCase() + string.slice(1)}
//         str2 += string.slice(0, 1).toUpperCase() + string.slice(1) + ''
//     })
//     console.log(str2)
// }
//
// camelize('das-das-das')
// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")

// function camelize(str) {console.log(str.split('-').map(function (item, index) {if (index > 0) {return item = item[0].toUpperCase() + item.slice(1)} return item}).join(''))}
//
// camelize('das-das-das')
// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")


// const camelize = (str) => {console.log(str.split('-').map((item, index) =>  index > 0 ? item = item[0].toUpperCase() + item.slice(1) : item).join(''))}
//
// camelize('das-das-das')
// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")

// function filterRange(arr, a, b) {
//     let arr2 = []
//     arr.forEach((item) => {
//         if ((item >= a) && (item <= b)) {
//             arr2.push(item)
//         }
//     })
//     return arr2
// }

// function filterRange(arr, a, b) {
//     return arr.filter(item => ((item >= a) && (item <= b)))
// }
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered)
// console.log(arr)
//
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

//
// function filterRange(arr, a, b) {
//     let arr2 = []
//     arr.forEach((item) => {
//         if ((item >= a) && (item <= b)) {
//             arr2.push(item)
//         }
//     })
//     arr = arr2.slice()
//
// }
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered)
// console.log(arr)
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)


// function filterRange(arr, a, b) {
//     arr.splice(0, arr.length, ...arr.filter(item => ((item >= a) && (item <= b))))
//     return arr
// }
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered)
// console.log(arr)
//
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)


// const nums = [3, 4, 0]
// nums.sort((a, b) => b - a)
// console.log(nums)

// function compareNum(a, b) {return a-b}
//
// function compareABC(a, b) {
//     if (a[0].toLowerCase() > b[0].toLowerCase()) {return 1}
//     if (a[0] < b[0]) {return -1}
//     return 0
// }

// const nums = ["BHTML", "AJavaScript", "CSS", 'G']
//
// let arr = [5, 3, 8, 1];
//
// let mix = ["BHTML", 9, 2, "AJavaScript", "CSS", 'G', 5, 3, 8, 1]
//
// function compareUltimate(a, b) {
//     if ((typeof a === 'number') && (typeof b === 'number')) {return a - b}
//     if ((typeof a === 'string') && (typeof b === 'string')) {
//         if (a[0].toLowerCase() > b[0].toLowerCase()) {return 1}
//         if (a[0] < b[0]) {return -1}
//         return 0
//     }
//     if (typeof a === 'number') {return -1}
//     if (typeof a === 'string') {return 1}
//     else return 0
//
// }
//
// nums.sort(compareUltimate)
// arr.sort(compareUltimate)
// mix.sort(compareUltimate)
//
//
// console.log(nums, arr)
// console.log(mix)

// const nums = ["BHTML", "AJavaScript", "CSS", 'G']
//
// let arr = [5, 3, 8, 1];
//
// let mix = ["BHTML", 9, 2, "AJavaScript", 'CSS20', "CSS9", 'CSS10', 'G', 5, 3, "cSS122", 8, 1, '', {}, ['dgf']]
//
// function compareUltimate(a, b) {
//     if ((typeof a === 'number') && (typeof b === 'number')) {return a - b}
//     if ((typeof a === 'string') && (typeof b === 'string')) {
//         return a.localeCompare(b, 'en', {sensitivity: 'variant', numeric: true})
//     }
//     if (typeof a === 'number') {return -1}
//     if (typeof a === 'string') {return 1}
//     else return 0
// }
//
// nums.sort(compareUltimate)
// arr.sort(compareUltimate)
// mix.sort(compareUltimate)
//
//
// console.log(nums, arr)
// console.log(mix)

// function compareUltimate(a, b) {
//     if ((typeof a === 'number') && (typeof b === 'number')) {return a - b}
//     if ((typeof a === 'string') && (typeof b === 'string')) {
//         return a.localeCompare(b, 'en', {sensitivity: 'variant', numeric: true})
//     }
//     if (typeof a === 'number') {return -1}
//     if (typeof a === 'string') {return 1}
//     else return 0
// }
//
// function copySorted(arr) {
//     let arr2 = arr.slice(0)
//     return arr2.sort(compareUltimate)
// }
//
//
// let arr = ["HTML", "JavaScript", "CSS"];
//
// // let sorted = copySorted(arr);
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// function isOperator(oper, a, b) {
//     if (oper === '+') {
//         return a+b
//     }
//     if (oper === '-') {
//         return a-b
//     }
//
// }
//
// function Calculator() {
//     this.calculate = (str) => {
//
//         let arr = str.split(' ')
//         let opers = []
//         let numbers = []
//         let accum = 0
//
//         arr.forEach((item) => {
//             if (isNaN(Number(item))) {return opers.push(item)}
//             if (typeof +(item) === 'number' ) {return numbers.push(Number(item))}
//             else console.log('dont', item)
//         })
//
//         for (let i = 0; i < opers.length; i++) {
//             if (i !== 0) {
//                 accum = isOperator(opers[i], accum, numbers[i + 1])
//             } else {
//                 accum = isOperator(opers[i], numbers[i], numbers[i + 1])
//             }
//         }
//
//         return accum
//     }
// }
//
//
// let calc = new Calculator;
// console.log('ignor', calc.calculate("3 + 7 - 5 + 8 - 4") ); // 10


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map((item) => {
//     return item.age
// })
//
//
// console.log( names );


// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(item => ({
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id
// }))
// console.log( usersMapped) // 1
//
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин


// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age)
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ]
//
// sortByAge(arr)
//
// // теперь: [vasya, masha, petya]
// console.log(arr[0].name)
// console.log(arr[1].name) // Маша
// console.log(arr[2].name) // Петя

// const itteration = 1000000
//
// function shuffle(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]]  = [arr[j], arr[i]]
//     }
// }
//
//
// let arr = [1, 2, 3, 4, 5];
//
//
//
//
// const combination = {
//
// }
//
//
//
//
//
//
//
// for (let g = 0; g < itteration; g ++) {
//     shuffle(arr)
//
//
//     if (String(arr) in combination) {combination[String(arr)] += 1}
//     if (!(String(arr) in combination)) {combination[String(arr)] = 0}
// }
//
// const percent = {}
//
// let accum = 0
//
// // for (let i = 0; i < Object.keys(combination).length; i++) {
// //     percent[i + 1] = combination[i] / itteration
// // }
//
// for (let key in combination) {
//     percent[key] = `Процент: ${Math.round((combination[key] / itteration)*1000)}%`
// }
//
// console.log(combination)
//
// console.log(percent)

// function getAverageAge(arr) {
//     let arr2 = []
//     let o = 0
//
//     for (let key in arr) {
//         arr2.push(arr[key].age)
//         o++
//     }
//
//     let result = arr2.reduce((sum, current) => sum + current, 0);
//
//
//     console.log(result/o)
// }
//
//
//
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// function unique(arr) {
//     let arr2 = []
//     // for (let key in arr) {
//     //     if (!(arr2.includes(arr[key]))) {arr2.push(arr[key])}
//     // }
//
//     arr2 = arr.reduce(function(accumulator, item) {
//         if (accumulator.includes(item)) {return accumulator}
//         return [item, ...accumulator]
//     }, []).reverse()
//
//
//
//     // arr2 = arr.reduce(function(accumulator, item) {
//     //     if (accumulator.includes(item)) {return accumulator}
//     //     if (!(accumulator.includes(item))) {return `${accumulator} ${item}`}
//     //     }).split(' ')
//
//     // for (let i = 0; i < arr.length; i ++) {if (!(Boolean(arr2.findIndex(item => item === arr[i]) + 1))) {arr2.push(arr[i])}}
//
//
//     return arr2
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// console.log( unique(strings) ); // кришна, харе, :-O





let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(arr) {
    return arr.reduce((sum, item) => {
        sum[item.id] = item
        return sum
    }, {})
}


console.log(usersById)
/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

































