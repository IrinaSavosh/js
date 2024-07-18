/** Задание 1
 * 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней неделию Выведите на экран "Вторник".*/
// const week = {
// 	one: "monday",
// 	two: "tuesday",
// 	3: "Wednesday",
// 	4: "Thursday",
// 	5: "friday",
// 	6: "Saturday",
// 	7: "sunday",
// };

// console.log(week.two);

/* 2. Создайте объект user с ключами name, surname, age. Выведите на экран фамилию, имя и возраст через дефис.*/
// const user  = {
//    name: "Ira",
// surname: "Savosh",
// age: 36
// }

// console.log(`${user.name} - ${user.surname} - ${user.age}`);
/* 3. Добавьте в объект user свойство отчетство, которое пользователь должен ввести с клавиатуры*/

// user.middleName = prompt("Введите отчество");
// console.log(user.middleName);

/* 4. Удалите свойство surname.
 */

// delete user.surname;
// console.log(user);

/**Задание 2 */

/** 1. Даны два массива: первый с названием дня недели, а второй - с их порядковыми номерами:
 * const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
 * const arr2 = [1, 2, 3, 4, 5, 6, 7];
 * С помощью цикла создайте объукт, ключами которого будут названия дней, а значениями их номера (или наоборот).
 */
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//  const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const week = {};
// if(arr1.lenght === 0 || arr2.lenght === 0){
//    console.log("В массиве нет элементов");
// }
// else if(arr1.lenght === arr2.lenght){
//    for (let i = 0; i < arr1.length; i++) {
// week[arr1[i]] = arr2[i];
//    }
//    console.log(week);
// }else{
//    console.log("В массивах неодинаковое кодичество элементов");
// }

/**
 * 2. const obj = {x:1, y: 2, z:3};
 * переберите этот объект циклом и возведите каждый эдемент этого объекта в квадрат.
 */

// const obj = {x:1, y: 2, z:3};
// for (const key in obj) {

//       const element = obj[key] ** 2;

//    console.log(element);
// }

/**Задание 3 */

/**Найдите сумму элементов */

const obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key3: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
};

console.log(
	Object.values(obj)
		.map((element) => Object.values(element))
		.map((element) => element.reduce((a, b) => a + b))
		.reduce((a, b) => a + b)
);

let result = 0;
for (const key in obj) {
	result += Object.values(obj[key]).reduce((a, b) => a + b);
}
console.log(result);
/** Задание 4 */

/**1. Создайте объект riddles */

/**2. Добавьте свойство question, answer */

/** 3. Создайте метод askQuestion котрый задает вопрос question и сравнивает ответ с answer*/

/** 4. Если ответ неверный то в консоль выводится текст: "вы проиграли" */

/** 5. * По жеданию, создать 2 подсказки, если пользователь ответил неверно */

const riddles = {
	question: "Зимой и летом одним цветом",
	answer: "елка",
};

function makeARiddle(question, answer) {
	const userReply = prompt(question);
	if (userReply === answer) {
		confirm("Вы угадали");
	} else {
		confirm("Вы не угадали");
	}
}

makeARiddle(riddles.question, riddles.answer);