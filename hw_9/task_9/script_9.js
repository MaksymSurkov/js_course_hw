"use strict"
// * Задача 9. Дано масив імен. Сформувати масив з перших літер цих імен. *

if (confirm('Почати тестування?')) {
	const namesArray = ['Максим', 'Катя', 'Ваня', 'Ира', 'Света', 'Миша', 'Олег', 'Юра', 'Маша']

	document.write(`База имен: ${namesArray} <br>`);

	let lettersArray = namesArray.map(
		element => element.charAt(0)
	)
	
	document.write(`Первые буквы имен из базы: ${lettersArray}`);
}
