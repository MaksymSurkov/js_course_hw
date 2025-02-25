"use strict"
// * Задача 7. Вивести таблицю з 3 рядків і 7 стовпців *

if (confirm('Почати тестування?')) {

	document.write(`<table class="table" style="margin-top:10px;">`);

	for (let row = 0; row < 3; row++) {
		document.write(`<tr style="border:1px solid #ffff">`);

		for (let col = 1; col <= 7; col++) {
			document.write(`
				<td class="table__cell">${col}</td>
			`)
		}

		document.write(`</tr>`);
	}
	
	document.write(`</table>`);

}