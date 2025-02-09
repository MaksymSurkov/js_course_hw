"use strict"
// * Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби *
// Шаг 0 - Обозначение
// случайное число от 1 до 5 - randomNumber
// первое число введеное пользователем - userNumberOne
// второе число введеное пользователем - userNumberTwo

// Шаг 1 - Вводим необходимые значения
let randomNumber = 1 + Math.floor(Math.random() * (5 - 1 + 1));
// console.log(randomNumber);
let userNumber = parseInt(prompt(`Введите число от 1 до 5`));
// console.log(userNumber);

// Шаг 2 - Розв"язок заадачі
if (userNumber !== randomNumber) {
	userNumber = parseInt(prompt(`Введите число еще раз от 1 до 5`));
	// console.log(userNumber);
	if (userNumber !== randomNumber) {
		document.write(`<p class="block">К сожалению Вы не смогли угадать число с двух попыток :(</p>`);
	} else {
		document.write(`<p class="block">Поздравляем Вы угадали число!!!</p>`);
	}
} else {
	document.write(`<p class="block">Поздравляем Вы угадали число!!!</p>`);
}

