"use strict"
// * Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.*

if (confirm('Почати тестування?')) {
	let englishNames = [
		"James",
		"Emily",
		"Oliver",
		"Sophia",
		"Liam",
		"Isabella",
		"Noah",
		"Ava",
		"William",
		"Mia",
		"Ethan",
		"Charlotte",
		"Lucas",
		"Amelia",
		"Benjamin"
	];
	// Функция бинарного поиска
	function binarySearch(arr, searchElement) {
		let start = 0;
		let end = arr.length - 1;
		while (start <= end) {
			const middle = Math.floor((start + end) / 2);
			if (arr[middle] === searchElement) return true;

			if (arr[middle] < searchElement) start = middle + 1;

			if (arr[middle] > searchElement) end = middle - 1;
		}
		return false;
	}
	// Перевожу все имена в верхний регистр, что бы избежать ошибок с вводом
	englishNames = englishNames.map(element => element.toUpperCase());
	// Сортируем массив
	englishNames.sort();
	
	let searchName = prompt('Какое имя Вы хотите найти?').toUpperCase();
	let answer = binarySearch(englishNames, searchName) ? alert(`Имя которые Вы ищете в базе под номером ${englishNames.indexOf(searchName) + 1} !`) : alert('Такого имени нет в базе!');
}

