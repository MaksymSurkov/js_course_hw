"use strict"
// * Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів.
// * Обчислити вартість кожного товару окремо та загальну вартість.
// * Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
// Шаг 0 - Обозначение
// стоимость первого товара - firstItemPrice
// стоимость второго товара - secondItemPrice
// стоимость третьего товара - thirdItemPrice
// количесвто первого товара - firstItemCount
// количесвто второго товара - secondItemCount
// количесвто третьего товара - thirdItemCount
// общая стоимость первого товара - firstItemTotal
// общая стоимость второго товара - secondItemTotal
// общая стоимость теретьего товара - thirdItemTotal
// стоимость всей покупки - allItemsPrice

// Шаг 1 - Вводим необходимые значения
let firstItemPrice = parseFloat(prompt('Введите стоимость первого товара'));
let firstItemCount = parseInt(prompt('Введите количесвто первого товара'));
let secondItemPrice = parseFloat(prompt('Введите стоимость второго товара'));
let secondItemCount = parseInt(prompt('Введите количесвто второго товара'));
let thirdItemPrice = parseFloat(prompt('Введите стоимость третьего товара'));
let thirdItemCount = parseInt(prompt('Введите количесвто третьего товара'));

// Шаг 2 - Вычесления результата
let firstItemTotal = firstItemPrice * firstItemCount;
let secondItemTotal = secondItemPrice * secondItemCount;
let thirdItemTotal = thirdItemPrice * thirdItemCount;
let allItemsPrice = firstItemTotal + secondItemTotal + thirdItemTotal;

// Шаг 3 - Выводим результат
document.write(`
	<table class="table">
		<tbody>
			<tr class="table__header">
				<th class="table__title">Ваша покупка!</th>
			</tr>
			<tr class="table__header">
				<th class="table__title">**********************************</th>
			</tr>
			<tr class="table__row">
				<th class="table__title">Товар</th>
				<th class="table__title">Цена</th>
				<th class="table__title">Количество</th>
			</tr>
			<tr class="table__row">
				<td class="table__cell">
					<span>Первый товар</span>
				</td>
				<td class="table__cell">
					<span>${firstItemPrice}</span>
				</td>
				<td class="table__cell">
					<span>${firstItemCount}</span>
				</td>
			</tr>
			<tr class="table__row">
				<td class="table__cell">
					<span>Второй товар</span>
				</td>
				<td class="table__cell">
					<span>${secondItemPrice}</span>
				</td>
				<td class="table__cell">
					<span>${secondItemCount}</span>
				</td>
			</tr>
			<tr class="table__row">
				<td class="table__cell">
					<span>Третий товар</span>
				</td>
				<td class="table__cell">
					<span>${thirdItemPrice}</span>
				</td>
				<td class="table__cell">
					<span>${thirdItemCount}</span>
				</td>
			</tr>
			<tr class="table__header">
				<th class="table__title">**********************************</th>
			</tr>
			<tr class="table__row">
				<td class="table__cell">
					<span>Первый товар на сумму</span>
				</td>
				<td class="table__cell">
					<span>${firstItemTotal.toFixed(2)}</span>
				</td>
			</tr>
			<tr class="table__row">
				<td class="table__cell">
					<span>Второй товар на сумму</span>
				</td>
				<td class="table__cell">
					<span>${secondItemTotal.toFixed(2)}</span>
				</td>
			</tr>
			<tr class="table__row">
				<td class="table__cell">
					<span>Третий товар на сумму</span>
				</td>
				<td class="table__cell">
					<span>${thirdItemTotal.toFixed(2)}</span>
				</td>
			</tr>
			<tr class="table__header">
				<th class="table__title">**********************************</th>
			</tr>
			<tr class="table__row">
				<td class="table__cell">
					<span>Общая стоимость покупки на сумму</span>
				</td>
				<td class="table__cell">
					<span>${allItemsPrice.toFixed(2)}</span>
				</td>
			</tr>
		</tbody>
	</table>
	<a class="link" href="../hw2.html">Back to tasks</a>
`)
