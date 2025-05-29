"use strict"
// * Задача 5. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
const products = [
	{
		title: "Ноутбук Acer Aspire 7 A715-42G-R5EZ",
		price: "30 999 ₴",
		image: "img/42.jpg",
		badge: "ТОП ПРОДАЖ"
	},
	{
		title: "Ноутбук ASUS X515EA-BQ2066",
		price: "19 999 ₴",
		image: "img/42.jpg",
		badge: "ТОП ПРОДАЖ"
	},
	{
		title: "Ноутбук Lenovo IdeaPad 1 15ADA7",
		price: "13 999 ₴",
		image: "img/42.jpg",
		badge: "АКЦИЯ"
	},
	{
		title: "Ноутбук Apple MacBook Air 13” M1",
		price: "39 999 ₴",
		image: "img/42.jpg",
		badge: "ТОП ПРОДАЖ"
	}
];

function renderCards(items) {
	const container = document.getElementById('products-container');
	const template = document.getElementById('template');

	//container.replaceChildren(); // удаляем все содержимое контейнера что бы не создавались при повторном нажатии дополнительные списки

	items.forEach(item => {
		const clone = template.content.cloneNode(true); // глубокая копия шаблона

		const lable = clone.querySelector('.item-lable');
		item.badge ? lable.innerText = item.badge : lable.remove(); // если в обьекте карточки есть бейдж - добавляем, если нет то удаляем из шаблона элемент.

		clone.querySelector('img').src = item.image;
		clone.querySelector('img').alt = item.title;
		clone.querySelector('h2').innerText = item.title;
		clone.querySelector('.price').innerText = item.price;

		container.append(clone);
	});
}

function markItem(e) {
	if (e.target.closest('.item-card')) {
		//console.log('hello');
		let cardEl = e.target.closest('.item-card');
		cardEl.classList.toggle('toggle');
	}
}

renderCards(products);

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.main__products').addEventListener('click', markItem);
})
