"use strict"
// * Задача 6. Відобразити трикутник за допомогою символів «о» *
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо

if (confirm('Почати тестування?')) {

	for (let i = 0; i < 3; i++) {
		for (let row = 0; row < 5; row++) {
			for (let letter = 0; letter <= row; letter++) {
				document.write(`<span style="margin-right: 5px;">o</span>`);
			}
			document.write(`<br>`);
		}	
	}
	
}
