/**Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени*/

const NUMBER1 = prompt("Введите первое число, которое нужно возвести в степень");
const DEGREE1 = prompt("Введите степень, в которую нужно возвести первое число");
const NUMBER2 = prompt("Введите второе число, которое нужно возвести в степень");
const DEGREE2 = prompt("Введите степень, в которую нужно возвести второе число");

const degreeСonversion = (NUMBER, DEGREE) => {
	return NUMBER ** DEGREE;
};

const RESULT = degreeСonversion(NUMBER1, DEGREE1) + degreeСonversion(NUMBER2, DEGREE2);
confirm(`Мы сложили результат ваших чисел возведенных в степень. Результат: ${RESULT}`);

/**Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/

const NUMBER = prompt("Введите число");

function isNumber(input) {
   return !isNaN(+input);
 }

function wagesAfterTax(input){
   let temp = isNumber(input);
   confirm (temp);
   if(temp){
      return (`Ваш чистый доход составляет ${input * 0.87}`);
   }
   return (`Вы ввели не число`);
};
const MESSAGE = wagesAfterTax(NUMBER);
confirm(MESSAGE);

/**Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/
const NUM1 = prompt("Введите первое число");
const NUM2 = prompt("Введите второе число");
const NUM3 = prompt("Введите третье число");

function maxNumber (num1, num2, num3){
   if(num1 > num2 & num1>num3){
      return(`Максимальное число из введенных: ${num1}`);
   }
   else if(num2>num3){
      return(`Максимальное число из введенных: ${num2}`);
   }
   else {
      return(`Максимальное число из введенных: ${num3}`);
   }
}

const MESSAGE = maxNumber(NUM1, NUM2, NUM3);
confirm(MESSAGE);

/**Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/

function sum(firstSummand, secondSummand) {
	return firstSummand + secondSummand;
}

function subtraction(num1, num2) {
	if (num1 > num2) {
		return num1 - num2;
	} else if (num1 == num2) {
		return 0;
	} else {
		return num2 - num1;
	}
}

function multiplication(firstMultiplier, secondMultiplier) {
	return firstMultiplier * secondMultiplier;
}

function division(num1, num2) {
	if (num1 > num2) {
		return num1 / num2;
	} else if (num1 == num2) {
		return 1;
	} else {
		return num2 / num1;
	}
}

const resSum = sum(5, 6);
const resSub = subtraction(5, 6);
const resMult = multiplication(5, 6);
const resDiv = division(5, 6);

console.log(`Сложение: ${resSum}; Вычетание: ${resSub}; Умножение: ${resMult}; Деление: ${resDiv}.`);
