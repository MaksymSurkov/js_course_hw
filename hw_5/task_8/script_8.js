"use strict"
// * Задача 8. Вивести таблицю *

if (confirm('Почати тестування?')) {

	document.write(`<table class="table" style="margin-top:10px;">`)

	let col = 1;
	for (let row = 0; row < 3; row++) {
		document.write(`<tr style="border:1px solid #ffff">`)

		for (col; col <= 9; col++) {
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