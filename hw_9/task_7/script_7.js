"use strict"
// * Задача 7. Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки. *

if (confirm('Почати тестування?')) {
	const priceArray = [1000, 1968, 1200, 5100, 170, 10, 9102, 23100, 10520]
	const discont = 0.7;

	document.write(`цены товаров (в грн.) без скидки: ${priceArray} <br>`);

	let newPriceArray = (arr, dsct, maxPrice) => {
		arr.forEach((item, index, arr) => {
			if (item > maxPrice) {
				arr[index] = parseInt((item * dsct).toFixed(2));
			}
		});
		return arr;
	}
	
	document.write(`цены товаров (в грн.) со скидкой: ${newPriceArray(priceArray, discont, 1000)}`);
}
