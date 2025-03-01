"use strict"
// * Задача 12. Вивести на екран послідовність символів *
// * а о а о а о а о а о … *
// * Всього символів 82. *

if (confirm('Почати тестування?')) {
	let firstSymbol = 'a';
	let secondSymbol = 'o';
	for (let i = 0; i < 41; i++) {
		document.write(`<span>${firstSymbol}${secondSymbol}</span>`);
	}
}