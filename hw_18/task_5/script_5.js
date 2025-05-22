"use strict"
// * Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

document.addEventListener('DOMContentLoaded', function () {

	function createTable(rowsNum, colsNum, minRandValue = 0, maxRandValue = 100) {
		const tableEl = document.createElement('table');
		tableEl.classList.add('table');
		for (let rowIndex = 0; rowIndex < rowsNum; rowIndex++) {
			//створити tr
			const trEl = document.createElement('tr');
			trEl.classList.add('table__title');
			//наповнити елементами td
			for (let colIndex = 0; colIndex < colsNum; colIndex++) {
				//створити td
				const tdEl = document.createElement('td');
				tdEl.classList.add('table__cell');
				//наповнити вмістом (випадкове число)
				tdEl.innerText = minRandValue + Math.floor(Math.random() * (maxRandValue - minRandValue + 1));
				//вставити у tr
				trEl.append(tdEl)
			}
			//вставити у table
			tableEl.append(trEl)
		}
		return tableEl
	}

	const table1 = createTable(3, 4);
	document.getElementById('table').append(table1);
})