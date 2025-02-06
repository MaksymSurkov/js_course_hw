"use strict"
// * Задача 0. Обчислити значення виразів *
// Шаг 0 - Обозначение
// значение "а" - a
// значение "b" - b
// значение "c" - c
// первое известное число - numberFirstExample
// второе известное число - numberSecondExample
// результат первого выражения - resultFirstExample
// результат второго выражения - resultSecondExample
// результат третьего выражения - resultThirdExample
// результат четвертого выражения - resultFourthExample


// Шаг 1 - Вводим необходимые значения
let a = parseFloat(prompt('Введите переменную "a"'));
let b = parseFloat(prompt('Введите переменную "b"'));
let c = parseFloat(prompt('Введите переменную "c"'));

const numberFirstExample = 12; // не обязательно в таких примерах литералы обозначать отдельными константами
const numberSecondExample = 2; // не обязательно в таких примерах литералы обозначать отдельными константами

// Шаг 2 - Вычесления результата
let resultFirstExample = (a + numberFirstExample + b).toFixed(1);
let resultSecondExample = (Math.sqrt((a + b) / (numberSecondExample * a))).toFixed(1);
let resultThirdExample = (Math.cbrt((a + b) * c)).toFixed(1);
let resultFourthExample = (Math.sin(a / -b)).toFixed(1);

// Шаг 3 - Выводим результат
document.write(`
	<div class="title">
		<p>Ваши результаты:</p> 
	</div>
	<ol class="list">
		<li class="item">
			S<sub>1</sub> = ${resultFirstExample}
		</li>
		<li class="item">
			S<sub>2</sub> = ${resultSecondExample}
		</li>
		<li class="item">
			S<sub>3</sub> = ${resultThirdExample}
		</li>
		<li class="item">
			S<sub>4</sub> = ${resultFourthExample}
		</li>
	</ol>
	<a class="link" href="../hw2.html">Back to tasks</a>
`);
