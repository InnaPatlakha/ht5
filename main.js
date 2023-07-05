/*Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
- отримати від користувача через три prompt три числа
- показати через alert середнє арифметичне цих чисел*/

let firstDigit = parseInt(prompt ('enter first digit'));
let secondDigit = parseInt(prompt ('enter second digit'));
let thirdDigit = parseInt(prompt ('and one more time'));
let result = (firstDigit + secondDigit + thirdDigit) / 3;

alert (result);