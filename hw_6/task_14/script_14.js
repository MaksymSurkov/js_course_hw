"use strict"
// * Задача 14. Вивести на екран * 
// 1 1
// 2 1234
// 3 123456789
// 4 1234…16
// 5 1 … 25
// 6 1…36


if (confirm('Почати тестування?')) {
	for (let row = 1; row <= 6; row++) {
		document.write(`<span style="margin-right: 5px;">${row}</span>`);

		let i = row * row;
		
		for (let num = 1; num <= i; num++) {
			document.write(`<span style="margin-right: 5px;">${num}</span>`);
		}
		document.write(`<br>`);
	}
}