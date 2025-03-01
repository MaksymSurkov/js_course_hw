"use strict"
// * Задача 13. Вивести на екран * 
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23

if (confirm('Почати тестування?')) {
	for (let row = 1; row <= 23; row++) {
		document.write(`<span style="margin-right: 5px;">${row}</span>`);
		for (let num = 1; num <= row; num++) {
			document.write(`<span style="margin-right: 5px;">${num}</span>`);
		}
		document.write(`<br>`);
	}
}