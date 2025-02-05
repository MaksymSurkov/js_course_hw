"use strict"
// * Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці *
// Шаг 0 - Обозначение
// значение "первое число" - a
// значение "второе число" - b
// сумма чисел - sumResult
// произведение чисел - multiplyResult
// деление чисел - divideResult

// Шаг 1 - Вводим необходимые значения
let a = parseFloat(prompt('Введите первое число'));
let b = parseFloat(prompt('Введите второе число'));

// Шаг 2 - Вычесления результата
let sumResult = (a + b).toFixed(2);
let multiplyResult = (a * b).toFixed(2);
let divideResult = (a / b).toFixed(2);

// Шаг 3 - Выводим результат
document.write(`
	<h3 class="title">Ваши числа:</h3>
	<ol class="list">
		<li class="item">Первое число: ${a}</li>
		<li class="item">Второе число: ${b}</li>
	</ol>
	<h3 class="title">Результаты</h3>
	<table class="table">
		<tbody>
			<tr class="table__row">
				<th class="table__title">Сумма</th>
				<th class="table__title">Умножение</th>
				<th class="table__title">Деление</th>
			</tr>
			<tr class="table__row">
				<td class="table__cell">
					<span>${sumResult}</span>
				</td>
				<td class="table__cell">
					<span>${multiplyResult}</span>
				</td>
				<td class="table__cell">
					<span>${divideResult}</span>
				</td>
			</tr>
		</tbody>
	</table>
	<a class="link" href="../hw2.html">Back to tasks</a>
`)