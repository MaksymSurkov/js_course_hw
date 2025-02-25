"use strict"
// * Задача 9. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком *

if (confirm('Почати тестування?')) {
	let col = 1;

	for (let tab = 0; tab < 3; tab++) {
		
		document.write(`<table class="table" style="margin-top: 10px; margin-right: 25px; display: inline-block;">`)

		for (let row = 0; row < 3; row++) {
			document.write(`<tr style="border:1px solid #ffff">`)

			for (col; col <= 27; col++) {
				document.write(`
				<td class="table__cell">${col}</td>
			`)
			
				if (col % 3 === 0) {
					document.write(`</tr>`)
					col++
					break
				}
			}
		}

		document.write(`</table>`)
	}
}