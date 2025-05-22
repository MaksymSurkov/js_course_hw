"use strict"
// * Задача 7. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту
// * (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів
// * (використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

function getTotalPrice() {

	function getSumBySelector(selector) {
		const list = document.querySelectorAll(selector);
		return Array.from(list).reduce((prevEl, el) => el.checked ? prevEl += parseFloat(el.value) : prevEl, 0);
	}

	// вартість транспорту
	const transportListItems = document.querySelectorAll('.transport__choice');
	let transportTotalPrice = Array.from(transportListItems).reduce((prevEl, el) => prevEl += parseFloat(el.value), 0);

	// вартість сніданок
	let breakfastTotalPrice = getSumBySelector('.breakfast__input');

	// вартість обід
	let lunchTotalPrice = getSumBySelector('.lunch__input');

	// вартість вечеря
	let dinnerTotalPrice = getSumBySelector('.dinner__input');

	// вартість гідів
	let guidesTotalPrice = getSumBySelector('.guides__input');

	const totalSum = transportTotalPrice + breakfastTotalPrice + lunchTotalPrice + dinnerTotalPrice + guidesTotalPrice;

	document.getElementById('result').innerText = totalSum;
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('calc-btn').onclick = getTotalPrice;
})