"use strict"
// * Задача 8. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)*

if (confirm('Почати тестування?')) {
	const firstImage = 'img/cherry.png';
	const secondImage = 'img/grape.jpg';
	const thirdImage = 'img/strawberry.png';
	const fourthImage = 'img/watermelon.png';

	let imageLink = (img1, img2, img3, img4) => {
		let randomNumber = 1 + Math.floor(Math.random() * 4);
		switch (randomNumber) {
			case 1: imageLink = img1
				break;
			case 2: imageLink = img2
				break;
			case 3: imageLink = img3
				break;
			case 4: imageLink = img4
				break;
		}
		document.write(`<img src="${imageLink}" alt="Image" style = "width: 150px">`);
	}

	imageLink(firstImage, secondImage, thirdImage, fourthImage);
}
