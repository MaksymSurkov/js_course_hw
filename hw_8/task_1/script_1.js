"use strict"
// * Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься *
// * (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)). *

if (confirm('Почати тестування?')) {
	// Массив с оценками пользователя
	// Можно сделать что бы оценки вводитились пользователем и добавлялись в массив с помощью .push
	const userGrade = [5, 4, 5, 5, 5, 3, 5, 4,];

	// функция возвращает среднее значение элементов массива
	let getAvgUserGrade = (arr) => {
		let sum = 0;
		let min = 5;
		let cat;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		switch (min) {
			case 5: cat = 'Отличник'
				break;
			case 4:cat = 'Хорошист'
				break;
			case 3:cat = 'Троишник'
				break;
			case 2:cat = 'Двоишник'
				break;
			default: throw new Error("Введены некоректные оценки");
		}

		return {avg: sum / arr.length, cat };
	};
	
	try {
		let result = getAvgUserGrade(userGrade);
		document.write(`<p>Средняя оценка ученика: ${(result.avg).toFixed(2)}</p><p>Ученик: '${result.cat}'</p>`)
	} catch (error) {
		document.write(`<p>${error.message}</p>`)
	} finally {
		document.write(`<p>Thank You!</p>`)
	}
}
