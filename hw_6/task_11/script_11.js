"use strict"
// * Задача 11. Інвестор вклав S тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних. *
// * Визначити за допомогою циклів суму, яку він одержить.*

if (confirm('Почати тестування?')) {
	let userCash = parseInt(prompt(`Введите сумму, которую Вы хотите вложить на депозит под 20% на 20 лет!`));
	// Посчитано сложным процентом (каждый год клиент реинвестирует свою прибыль)
	for (let i = 1; i <= 20; i++) {
		userCash += (userCash * 0.2);
	}
	document.write(`<p>Через 20 лет под 20% Вы получите ${Math.round(userCash)}грн! - Без вычета налогов!</p>`);
	// Посчитано сложным процентом (каждый год клиент реинвестирует свою прибыль)
	for (let k = 1; k <= 17; k++) {
		userCash += (userCash * 0.27);
	}
	document.write(`<p>А потом вложив накопленные деньги на 17 лет под 27%, Вы получите ${Math.round(userCash)}грн! - Без вычета налогов!</p>`);
}