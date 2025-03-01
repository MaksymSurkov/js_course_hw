"use strict"
// * Задача 9. Інвестор вклав S тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).*

if (confirm('Почати тестування?')) {
	let userCash = parseInt(prompt(`Введите сумму, которую Вы хотите вложить на депозит под 20% на 20 лет!`));
	for (let i = 1; i <= 20; i++) {
		userCash += (userCash * 0.2);
		document.write(`<p>Year:${i}: ${Math.round(userCash)}грн</p>`);
	}
	document.write(`<p>Через 20 лет Вы получите ${Math.round(userCash)}грн! - Без вычета налогов!</p>`);
}
