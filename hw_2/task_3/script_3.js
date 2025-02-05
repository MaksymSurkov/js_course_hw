"use strict"
// * Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).*
// Шаг 0 - Обозначение
// стоимость еденицы товара - unitCost
// количество товара - unitQuantity
// общая стоимость - totalCost
// ПДВ (%) = vatPercent
// ПДВ от общей стоимости = vatCount

// Шаг 1 - Вводим необходимые значения
const vatPercent = 5;
let unitCost = parseFloat(prompt('Введите стоимость товара'));
let unitQuantity = parseInt(prompt('Введите количество товара'));

// Шаг 2 - Вычесления результата
let totalCost = unitCost * unitQuantity;
let vatCount = ((totalCost * vatPercent) / 100).toFixed(3);

// Шаг 3 - Выводим результат
document.write(`
	<p class="item">Стоимость еденицы товара: ${unitCost}</p>
	<p class="item">Количество товара: ${unitQuantity}</p>
	<h3 class="title">Общая стоимость покупки: ${totalCost}</h3>
	<p class="item">ПДВ от общей стоимости: ${vatCount}</p>
	<a class="link" href="../hw2.html">Back to tasks</a>
`)
