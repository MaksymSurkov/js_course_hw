"use strict"
// * Задача 12. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).*

if (confirm('Почати тестування?')) {

	alert("Загадайте число от 0 до 10, а я попробую его угадать с трех попыток");

	for (let i = 1; i ; i++) {
		let randomNumber = Math.floor(Math.random() * 11);
		if (confirm(`Ваше число ${randomNumber} ?`)) {
			document.write(`Ура! Я угадал :) Вы загадали ${randomNumber} ! Спасибо за игру!`);
			break;
		}
	}
}