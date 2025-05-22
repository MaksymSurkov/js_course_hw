"use strict"
// * Задача 4. Наперед задано у скрипті масив зі списком бажань.
// * Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

const wishes = [
	"Хочу выспаться",
	"Хочу пиццу на ужин",
	"Хочу новую футболку",
	"Хочу сходить в кино",
	"Хочу отпуск",
	"Хочу не думать ни о чём хотя бы день",
	"Хочу хороший интернет без лагов",
	"Хочу, чтобы всё само как-то сделалось",
	"Хочу горячий душ и тишину",
	"Хочу просто посидеть и залипнуть в YouTube"
];
 

function showMyWish(count, arr) {
	for (let i = 0; i < count; i++) {
		let div = document.createElement('div');
		div.innerText = getRandomWish(arr);
		document.getElementById('wish').append(div);
	}
	function getRandomWish(items) {
		const wish = Math.floor(Math.random() * items.length);
		return items[wish];
	}
}



document.addEventListener('DOMContentLoaded', function () {
	showMyWish(3, wishes);
})