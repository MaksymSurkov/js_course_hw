"use strict"
// * Задача 6. Відобразити трикутник за допомогою символів «о» *
//ooooooooooooooo
//ooooooooooooo
//ooooooooooo
//oooooоооо
//ooооооо
//.....
//о

if (confirm('Почати тестування?')) {
	
	document.write(`<div style="display: flex; flex-direction: column-reverse;">`);

	for (let row = 0; row < 12; row++) {

		document.write(`<div class="block-pyramid__item">`);

		for (let letter = 0; letter <= row; letter++) {
			document.write(`<span>o</span>`);
		}

		document.write(`</div>`);

	}

	document.write(`</div>`);
}
