"use strict"
// * Задача 4. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

if (confirm('Почати тестування?')) {
	let num1 = parseInt(prompt(`Введите число`));
	let num2 = parseInt(prompt(`Введите число`));
	let num3 = parseInt(prompt(`Введите число`));
	let num4 = parseInt(prompt(`Введите число`));

	// функция которая находит сумму 4 чисел
	let sum = (num1 = 0, num2 = 0, num3 = 0, num4 = 0) => num1 + num2 + num3 + num4;

	// функция которая находит произведение 4 чисел
	let multiply = (num1 = 0, num2 = 0, num3 = 0, num4 = 0) => num1 * num2 * num3 * num4;

	// функция которая находит среднее арифметическое 4 чисел
	let avg = (num1 = 0, num2 = 0, num3 = 0, num4 = 0) => (num1 + num2 + num3 + num4) / 4;

	// функция которая находит минимальное значение 4 чисел
	let min = (num1 = 0, num2 = 0, num3 = 0, num4 = 0) => Math.min(num1, num2, num3, num4);

	document.write(`<p class="block">Сумма введеных чисел: ${sum(num1, num2, num3, num4)}</p>`);
	document.write(`<p class="block">Произведение введеных чисел: ${multiply(num1, num2, num3, num4)}</p>`);
	document.write(`<p class="block">Среднее арифметическое введеных чисел: ${avg(num1, num2, num3, num4)}</p>`);
	document.write(`<p class="block">Минимальное значение из введеных чисел: ${min(num1, num2, num3, num4)}</p>`);
}
