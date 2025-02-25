"use strict"
// * Задача 19. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. *
// * Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня. *

if (confirm('Почати тестування?')) {

	let totalStoreProfit = 0; // Общий доход магазина за все время
	let weakProfit; // Недельный доход магазина

	// Цикл недель
	for (let i = 1; i <= 2; i++) {

		weakProfit = 0;

		// Цикл дней
		for (let d = 1; d <= 7; d++) {
			let dayStoreProfit = parseFloat(prompt(`Введите доход магазина за ${d} день ${i} недели!`));
			weakProfit = weakProfit + dayStoreProfit;
		}

		totalStoreProfit = totalStoreProfit + weakProfit;

		document.write(`<p class = "block">Общий доход магазина за ${i} неделю составил ${weakProfit} грн!</p>`);
	}

	document.write(`<p class = "block">Общий доход магазина за весь период составил ${totalStoreProfit} грн!</p>`);
}