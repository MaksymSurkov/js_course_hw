"use strict"
// * Задача 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2 *

if (confirm('Почати тестування?')) {
	const userArr = [1, -2, 3, -1, 5, 8, -9, 32, -19]
	document.write(`данно массив: ${userArr} <br>`);

	userArr.forEach((item, index, arr) => {
		if (index > 0) {
			if (item > arr[0]) {
				arr[index] = item * 2;
			}
		}
	});
	
	document.write(`новый массив: ${userArr}`);
}
