"use strict"
// * Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)
document.addEventListener('DOMContentLoaded', function () {

	const eurCourse = 45;
	const usdCourse = 40;

	function convert() {
		let uah = parseFloat(document.getElementById('hrn').value);
		let usd = (uah / usdCourse).toFixed(2);
		let eur = (uah / eurCourse).toFixed(2);
		document.getElementById('eur').innerText = eur;
		document.getElementById('usd').innerText = usd;
	}
	
	document.getElementById('dodat').onclick = convert;

})