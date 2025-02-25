"use strict"
// * Задача 6. Вивести таблицю з одним рядком і 7 стовпцями. *

if (confirm('Почати тестування?')) {

	document.write(`<table class="table" style="margin-top:10px;">`)

	for (let row = 0; row < 1; row++) { // через цикл, если нужно будет больше чем 1 рядок. Иначе в цикл можно класть только <td></td>
		document.write(`<tr>`)

		for (let col = 1; col <= 7; col++) {
			document.write(`
				<td class="table__cell">${col}</td>
			`)
		}
		
		document.write(`</tr>`)
	}
	
	document.write(`</table>`)

}