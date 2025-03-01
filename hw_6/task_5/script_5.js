"use strict"
// * Задача 5. Відобразити трикутник за допомогою символів «о» *
//       о
//      оо
//     ооо
//    оооо
//   ооооо
//  оооооо
// ооооооо

if (confirm('Почати тестування?')) {
	
	document.write(`<div class="block-pyramid">`);

	for (let row = 0; row < 7; row++) {

		document.write(`<div class="block-pyramid__item">`);

		for (let letter = 0; letter <= row; letter++) {
			document.write(`<span>o</span>`);
		}

		document.write(`</div>`);

	}

	document.write(`</div>`);
}
