"use strict"
// * Задача 2. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.*
if (confirm('Почати тестування?')) {

	let sum = 0;
	let num;
	do {
		num = parseInt(prompt(`Введите число`));
		sum += num;
	} while (num !== 0);

	document.write(`Сумма Ваших введеных чисел = ${sum}`)
}
