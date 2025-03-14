"use strict"
// * Задача 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн. *

if (confirm('Почати тестування?')) {
	const priceArray = [1000, 1968, 1200, 5100, 170, 10, 9102, 23100, 10520]
	const tax = 0.2;

	document.write(`Масив цін у грн.: ${priceArray} <br>`);

	let getTaxArray = (arr, taxValue) => {
		let taxArray = arr.map(
			element => element * taxValue
		)
		return taxArray;
	}
	
	// Вариант без функции
	// let taxArray = priceArray.map(
	// 	element => element * tax
	// )
	
	document.write(`Налоги по каждой цене: ${getTaxArray(priceArray, tax)}`);
}
