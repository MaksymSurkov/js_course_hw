"use strict"
// * Задача 10. Вивести на екран N абзаців (N вводиться користувачем) за зразком *

if (confirm('Почати тестування?')) {

	let paragraphCount = parseInt(prompt("Введите количесвто желаемых абзацев"));

	for (let i = 1; i <= paragraphCount; i++) {
		document.write(`<h1 style = "margin-top: 10px; font-size: 24px;">Заголовок ${i}</h1>`);

		for (let p = 1; p <= i; p++) {
			document.write(`
				<p>Роздел ${i}, параграф ${p}</p>
			`);
		}

		document.write(`<hr style = "width: 100%; height: 1px; background-color: #ffff; margin: 5px 0px 0px 0px;">`);
	}
}