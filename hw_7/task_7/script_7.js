"use strict"
// * Задача 7. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).*

if (confirm('Почати тестування?')) {

	function doTable (rows, cols) {
		for (let row = 0; row < rows; row++) {
			document.write(`<tr style="border:1px solid #ffff">`);
	
			for (let col = 1; col <= cols; col++) {
				document.write(`
					<td class="table__cell">${col}</td>
				`)
			}
	
			document.write(`</tr>`);
		}
	}

	let userRows = parseInt(prompt(`Введите желаемое количество рядков`));
	let userCols = parseInt(prompt(`Введите желаемое количество столбцов`));

	document.write(`<table class="table" style="margin-top:10px;">`);
	doTable(userRows, userCols);
	document.write(`</table>`);
}
