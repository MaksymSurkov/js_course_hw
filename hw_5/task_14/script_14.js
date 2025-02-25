"use strict"
// * Задача 14. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.*

if (confirm('Почати тестування?')) {
	let firstUserNumber = parseInt(prompt(`Введите первое число`)); // первое число промежутка
	let secondUserNumber = parseInt(prompt(`Введите второе число`)); // второе число промежутка
	let totalSum = 0;
	let i = 0;

	for (firstUserNumber; firstUserNumber <= secondUserNumber; firstUserNumber++) {
		if (firstUserNumber % 2 !== 0) {
			totalSum += firstUserNumber;
			i++
		} else if (i === 5) {
			break;
		}
	}
	
	document.write(`Сумма всех непарных чисел из предоставленного Вами промежутка = ${totalSum}`);
}