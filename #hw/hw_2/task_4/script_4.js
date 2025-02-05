"use strict"
// * Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.*
// Шаг 0 - Обозначение
// длина в сантиметрах - lengthUnit
// длина 1метр (см) - oneMeterLength
// длина 1километр (см) - oneKilometerLength
// значение в метрах = meterValue
// значение в километрах = kilometerValue

// Шаг 1 - Вводим необходимые значения
const oneMeterLength = 100;
const oneKilometerLength = 100000;
let lengthUnit = parseInt(prompt('Введите длину в сантиметрах'));

// Шаг 2 - Вычесления результата
let meterValue = (lengthUnit / oneMeterLength).toFixed(3);
let kilometerValue = (lengthUnit / oneKilometerLength).toFixed(6);

// Шаг 3 - Выводим результат
document.write(`
	<p class="item">Заданная длина в сантиметрах: ${lengthUnit}</p>
	<h3 class="title">В метрах это: ${meterValue} метра</h3>
	<h3 class="title">А в километрах: ${kilometerValue} километра</h3>
	<a class="link" href="../hw2.html">Back to tasks</a>
`)
