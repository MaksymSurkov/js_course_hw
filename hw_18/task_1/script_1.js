"use strict"
// * Задача 1. Розробити калькулятор
document.addEventListener('DOMContentLoaded', function () {

	function getSum() {
		let first = parseFloat(document.getElementById('first').value);
		let second = parseFloat(document.getElementById('second').value);
		let sum = first + second;
		result.innerText = sum;
	}
	function getSub() {
		let first = parseFloat(document.getElementById('first').value);
		let second = parseFloat(document.getElementById('second').value);
		let sum = first - second;
		result.innerText = sum;
	}
	function getMulti() {
		let first = parseFloat(document.getElementById('first').value);
		let second = parseFloat(document.getElementById('second').value);
		let sum = first * second;
		result.innerText = sum;
	}
	function getDiv() {
		let first = parseFloat(document.getElementById('first').value);
		let second = parseFloat(document.getElementById('second').value);
		let sum = first / second;
		result.innerText = sum.toFixed(2);
	}
	
	let result = document.getElementById('result');

	document.getElementById('dodat').onclick = getSum;
	document.getElementById('vidnat').onclick = getSub;
	document.getElementById('pomnoz').onclick = getMulti;
	document.getElementById('podelit').onclick = getDiv;

})