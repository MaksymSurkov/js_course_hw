"use strict"
// * Задача 1. Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I

if (confirm('Почати тестування?')) {

	let char1Code = 'A'.charCodeAt(0);
	// Выводим 5 рядков
	for (let row = 0; row < 5; row++) {
		// Выводим 5 букв в каждом рядке
		for (let letter = 0; letter < 5; letter++) {
			document.write(`<span style="margin-right: 5px;">${String.fromCharCode(char1Code)}</span>`);
			char1Code++;
		}

		document.write(`<br>`);
		char1Code -= 4; // Каждый новый рядок будет начинаться с буквы идущей после той с которой начинался предыдущий :))
	}
}
