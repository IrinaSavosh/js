//два варианта функций

// function one(x) {
// 	return x ** 2;
// }

// const two = (x) => x ** 2;


// const summaNumbers = (num1, num2, num3) => {
//    console.log(Number(num1) + Number(num2) + Number(num3));
// }
// summaNumbers(1, '2', "3");
const NUMBER = prompt("Введите число");

function isNumber(input) {
   return !isNaN(+input);
 }

function wagesAfterTax(input){
   let temp = isNumber(input);
   confirm (temp);
   if(temp){
      confirm (`Ваш чистый доход составляет ${input * 0.87}`);
   }else{
   confirm (`Вы ввели не число`);}
};

wagesAfterTax(NUMBER);
