"use strict"
// * Задача 3. Вивести на екран 8 кнопок з написом “Hello”. *

if (confirm('Почати тестування?')) {

	for (let i = 0; i < 8; i++) {
		document.write(`
			<button type="button" class="button">Hello</button>
		`)
	}
}
