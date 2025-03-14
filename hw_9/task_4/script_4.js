"use strict"
// * Задача 4. Дано масив елементів. Вивести на екран елементи, що більші за 100 *

if (confirm('Почати тестування?')) {
	const arr = [500, 231, 25, 123, 54, 85, 985, 32, 198]
	for (const item of arr) {
		if(item > 100) document.write(`${item} <br>`);
	}
}
