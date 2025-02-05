"use strict"
// * Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.*
// Шаг 0 - Обозначение
// количество пройденых секунд - secCount
// количесвто часов - hourCount
// количесвто минут - minuteCount
// количесвто секунд в минуте = secPerMinute
// количесвто секунд в часе = secPerHour

// Шаг 1 - Вводим необходимые значения
const secPerMinute = 60;
const secPerHour = 3600;
let secCount = parseInt(prompt('Введите количесвто пройденых секунд'));

// Шаг 2 - Вычесления результата
let minuteCount = (secCount / secPerMinute).toFixed(3);
let hourCount = (secCount / secPerHour).toFixed(6);

// Шаг 3 - Выводим результат
document.write(`
	<p class="item">Заданное количество пройденых секунд: ${secCount}</p>
	<h3 class="title">В минутах это: ${minuteCount} минут</h3>
	<h3 class="title">А в часах: ${hourCount} часов</h3>
	<a class="link" href="../hw2.html">Back to tasks</a>
`)
