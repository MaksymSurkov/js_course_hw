"use strict"
// * Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.*

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
	
	// Функция сортировки
	let insertArr = (arr) => {
		for (let k = 0; k < arr.length; k++) {
			const currentElement = arr[k];
			let i = k - 1;
			while (i >= 0 && arr[i].length > currentElement.length) {
				arr[i + 1] = arr[i];
				i = i - 1;
			}
			arr[i + 1] = currentElement;
		}
	}
	// Функция бинарного поиска
	function binarySearch(arr, searchElement) {
		let start = 0;
		let end = arr.length - 1;
		while (start <= end) {
			const middle = Math.floor((start + end) / 2);
			if (arr[middle].length === searchElement) return middle;

			if (arr[middle].length < searchElement) start = middle + 1;

			if (arr[middle].length > searchElement) end = middle - 1;
		}
		return false;
	}
	
	// Сортируем
	insertArr(englishNames);

	// Ищем
	let answer = binarySearch(englishNames, 5);
	answer ? alert(`ім’я довжиною 5 символів под номером ${answer + 1} !`) : alert('Такого имени нет в базе!');

}

