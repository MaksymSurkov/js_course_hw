"use strict"
// * Задача 4. Розробити Класи House, Dog, Bird
class VisualElement {
	constructor(x, y, imageSrc) {
		this.positionX = x;
		this.positionY = y;
		this.imageSrc = imageSrc;
	}
	
	renderElement(containerSelector) {
		const img = document.createElement('img');
		img.src = this.imageSrc;
		img.className = 'image';
		img.style.top = this.positionY + '%';
		img.style.left = this.positionX + '%';
		this.image = img;
		if (containerSelector) {
			document.querySelector(containerSelector).append(img);
		}
	}
}

class House extends VisualElement {
	constructor(x, y, imageSrc, updateInterval) {
		super(x, y, imageSrc);
		this.updateInterval = updateInterval;
	}

	renderElement(containerSelector) {
		super.renderElement(containerSelector);
		this.image.classList.add('house');
	}

	// збільшення або зменшення масштабу (об’єкт не рухається)
	updatingScale(scale) {
		if(scale <= 0) throw new Error('the value must be more than 0')
		setInterval(() => {
			this.image.style.transform = `scale(${Math.random() * scale})`;
		}, this.updateInterval);
	}
}

class Dog extends VisualElement {
	constructor(x, y, imageSrc, updateInterval) {
		super(x, y, imageSrc);
		this.updateInterval = updateInterval;
	}

	renderElement(containerSelector) {
		super.renderElement(containerSelector);
		this.image.classList.add('dog');
	}

	updatingPosition(min, max) {
		setInterval(() => {
			this.image.style.left = ((Math.random() * (max - min + 1)) + min) + '%';
		}, this.updateInterval);
	}
}

class Bird extends VisualElement {
	constructor(x, y, imageSrc, updateInterval) {
		super(x, y, imageSrc);
		this.updateInterval = updateInterval;
	}

	renderElement(containerSelector) {
		super.renderElement(containerSelector);
		this.image.classList.add('bird');
	}

	updatingPosition(min, max) {
		setInterval(() => {
			this.image.style.left = ((Math.random() * (max - min + 1)) + min) + '%';
			this.image.style.top = ((Math.random() * (max - min + 1)) + min) + '%';
		}, this.updateInterval);
	}
}

window.onload = function () {
	try {
		// ----- House -------
		const myHouse = new House(35, 35, 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-house-with-no-background-png-image_13001602.png', 3000);
		myHouse.renderElement('.main__garden');
		myHouse.updatingScale(2);
		// ----- Dog ---------
		const myDog = new Dog(15, 50, 'https://file.aiquickdraw.com/imgcompressed/img/compressed_44336fe27edcc0d0c65a833856d206ad.webp', 2000);
		myDog.renderElement('.main__garden');
		myDog.updatingPosition(0, 20);
		// ----- Bird ---------
		const myBird = new Bird(70, 15, 'https://pngimg.com/d/angry_birds_PNG42.png', 1000);
		myBird.renderElement('.main__garden');
		myBird.updatingPosition(0, 50);
	} catch (err) {
		console.log(err.message);
	}
}