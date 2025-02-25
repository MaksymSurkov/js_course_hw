"use strict"
// * Задача 5. Створити 10 елементів для введення цін продуктів *

if (confirm('Почати тестування?')) {
	
	for (let i = 1; i <= 10; i++) {
		document.write(`
			<div class="form-element">
				<label for="product-1">Product #${i}</label>
				<input id="product-1">
			</div>
		`)
	}
}