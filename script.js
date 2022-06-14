//? Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);
console.log('---------------------------------');


//? Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
	let keyCount = 0;
	for (let key in obj) {
		keyCount++;
	}
	return keyCount === 0
}

// function isEmpty(obj) {
// 	for (let key in obj) {
// если тело цикла начнет выполняться - значит в объекте есть свойства
// 	  return false;
// 	}
// 	return true;
//   }

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false


