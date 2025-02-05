"use strict"
// * Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).*
// Шаг 0 - Обозначение
// первый месяц - firstMonth
// последний месяц - lastMonth
// первый день - firstDay
// второй день - secondDay
// случайный месяц - someMonth
// случайный день - someDay
// сумма случайных переменных - itemsSum

// Шаг 1 - Вводим необходимые значения
const firstMonth = 1;
const lastMonth = 12;
const firstDay = 0;
const secondDay = 6;

// Шаг 2 - Вычесления результата
let someMonth = firstMonth + Math.floor(Math.random() * (lastMonth - firstMonth + 1));
let someDay = firstDay + Math.floor(Math.random() * (secondDay - firstDay + 1));

let itemsSum = someMonth + someDay;

// Шаг 3 - Выводим результат
document.write(`
	<h3 class="title">Рандомные числа:</h3>
	<ol class="list">
		<li class="item">Месяц: ${someMonth}</li>
		<li class="item">День: ${someDay}</li>
	</ol>
	<h3 class="title">Сумма рандомных чисел: ${itemsSum}</h3>
	<a class="link" href="../hw2.html">Back to tasks</a>
`)
