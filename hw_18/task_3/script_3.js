"use strict"
// * Задача 3. Зробити конвертер валют (курси валют – константи у скрипті)
document.addEventListener('DOMContentLoaded', function () {

	const curentYear = 2025;

	function userAge() {
		let userBirthday = parseFloat(document.getElementById('user-birthday').value);
		let age = curentYear - userBirthday;
		document.getElementById('user-age').innerText = age;
	}
	document.querySelector('#user-birthday').onblur = userAge;
})