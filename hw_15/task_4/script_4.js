"use strict"
// * Задача 4. Розробити клас Baner.

if (confirm('Почати тестування?')) {
	const links = [
		{
			img: 'img/icons8-google-logo-240.png',
			url: 'https://www.google.com'
		},
		{
			img: 'img/icons8-youtube-logo-240.png',
			url: 'https://www.youtube.com'
		},
		{
			img: 'img/icons8-github-logo-375.png',
			url: 'https://github.com'
		},
		{
			img: 'img/icons8-twitter-logo-240.png',
			url: 'https://twitter.com'
		},
		{
			img: 'img/icons8-twitter-logo-240.png',
			url: 'https://www.linkedin.com'
		}
	];
	
	
	class Baner {
		constructor(arr) {
			this.banners = arr;
		}

		// Метод випадкового вибору об’єкта (графічного зображення та посилання)
		getRandomItem() {
			return this.banners[Math.floor(Math.random() * this.banners.length)];
		}

		// Метод виведення випадкового банера
		showBanner() {
			let banner = this.getRandomItem();
			document.write(`
				<a href="${banner.url}" style="display: block; width: 240px; height:240px;">
					<img src="${banner.img}" style="max-width:100%">
				</a>
			`)
		}
	}
	
	let baner = new Baner(links);

	baner.showBanner();
}