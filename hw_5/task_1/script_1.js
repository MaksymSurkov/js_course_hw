"use strict"
// * Задача 1. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних. *

if (confirm('Почати тестування?')) {

	let pairedNumbers = 0; // количество парных чисел
	let unpairedNumbers = 0; // количестсво непарных чисел

	// Генерируем 100 раз случайное число
	for (let i = 0; i < 100; i++) {
		let randomNumber = 1 + Math.floor(Math.random() * 1000); // рандомное число от 1 до 1000
		if (randomNumber % 2 === 0) //проверяем если рандомное число парное (делится на 2 без остатка), то добавляем 1 к количеству парных, если нет то к непарным
			pairedNumbers++
		else
			unpairedNumbers++
	}

	// Выводим сколько всего получилось парных и не парных чисел
	document.write(`<p class="block">Количество парных чисел = ${pairedNumbers}</p>`)
	document.write(`<p class="block">Количество непарных чисел = ${unpairedNumbers}</p>`)

	// Сравниваем каких чисел больше
	if (pairedNumbers > unpairedNumbers)
		document.write(`<p class="block">Парных чисел больше!</p>`)
	else if (pairedNumbers < unpairedNumbers)
		document.write(`<p class="block">Непарных чисел больше!</p>`)
	else
		document.write(`<p class="block">Парных и непарных чисел одинаковое количесвто!</p>`)
}
