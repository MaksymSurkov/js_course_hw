"use strict"
// * Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок,
// * то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості
// * кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).

function getRandomNumber(min = 1, max = 100) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createTable(num) {
	// Контейнер таблицы
	const tableContainer = document.createElement('div');
	tableContainer.classList.add('table__container');
	// Заголовок таблицы
	let tableTitle = document.createElement('h2');
	tableTitle.innerText = `Таблица №${num} / Clicks: `;
	// Счетчки кликов
	let counterEl = document.createElement('span'); //
	counterEl.dataset.clicks = 0
	counterEl.innerText = counterEl.dataset.clicks;
	tableTitle.append(counterEl);



	const table = document.createElement('table');
	table.classList.add('table');

	for (let row = 0; row < 3; row++) {
		const tr = document.createElement('tr');
		for (let col = 0; col < 3; col++) {
			const td = document.createElement('td');
			td.innerText = getRandomNumber();
			td.classList.add('table__title');
			tr.append(td);
		}

		table.append(tr);
	}
	// Наполняем контейнер содержимым (таблицей)
	tableContainer.append(tableTitle);
	tableContainer.append(table);
	return tableContainer;
}

function markTable(e){
	if (e.target.tagName === 'TD') {
		let td = e.target;
		let tableContainer = td.closest('.table__container');
		tableContainer.style.border = '1px solid red';

		let tableCounter = tableContainer.querySelector('[data-clicks]');
		//console.log(tableCounter);
		tableCounter.dataset.clicks = Number(tableCounter.dataset.clicks) + 1;
		tableCounter.innerText = tableCounter.dataset.clicks;
	}
}

document.addEventListener('DOMContentLoaded', function () {
	for (let i = 1; i <= 3; i++) {
		document.querySelector('.main__list-2').append(createTable(i));
	}

	document.querySelectorAll('.table__container').forEach((table) => table.addEventListener('click', markTable));
})