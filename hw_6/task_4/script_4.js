"use strict"
// * Задача 4. Відобразити трикутник за допомогою символів «о» *
// о
// оо
// ооо
// оооо
// ооооо
// оооооо
// ооооооо

if (confirm('Почати тестування?')) {

	for (let row = 0; row < 7; row++) {
		for (let letter = 0; letter <= row; letter++) {
			document.write(`<span style="margin-right: 5px;">o</span>`);
		}
		document.write(`<br>`);
	}
}
