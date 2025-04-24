"use strict"
// * Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.*
if (confirm('Почати тестування?')) {

	function generateOptions(arr) {

		function addElement(startIndex, currentArr) {
			// console.log(currentArr);
			document.write(`[${currentArr}] `)
			for (let i = startIndex; i < arr.length; i++) {
				addElement(i + 1, [...currentArr, arr[i]]);
			}
		}
	 
		addElement(0, []);
	}

	const myArr = [1, 2, 3];
	generateOptions(myArr);
}