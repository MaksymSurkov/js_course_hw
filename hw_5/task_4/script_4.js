"use strict"
// * Задача 4. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем. *

if (confirm('Почати тестування?')) {
	const userRandomNumbers = parseInt(prompt('Введите желаемое количество случайных чисел'));
	document.write(`<ul style="margin-top: 10px;">`)
	for (let i = 0; i < userRandomNumbers; i++) {
		let randomNumber = 1 + Math.floor(Math.random() * 100); // случайное число от 1-100
		document.write(`<li style="margin-top: 5px;">${randomNumber}</li>`)
	}
	document.write(`</ul>`)
}
