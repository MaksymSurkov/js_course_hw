"use strict"
// * Задача 9. Створити функцію, яка виводить банер, у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення *
// * (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a> *

if (confirm('Почати тестування?')) {
	const image = 'img/01.jpg';
	const mainlink = `https://www.google.com`;
	let userTitle = prompt(`Введите заголовок для баннера`);

	let imageLink = (img, title, link) => {
		document.write(`
			<a class = "banner" href="${link}">
				<img src="${img}" alt="Image">
				<h2>${title}</h2>
			</a>
		`);
	}

	imageLink(image, userTitle, mainlink);
}
