"use strict"
// * Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. 
// * Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, 
// * при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 

if (confirm('Почати тестування?')) {

	class TMoney {
		#moneyAmount
		#rate
		constructor(amountMoney, rate) {
			this.MoneyAmount = amountMoney/rate;
			this.Rate = rate;
		}
		get MoneyAmount() {
			return this.#moneyAmount
		}
		set MoneyAmount(value) {
			if (value < 0) throw new Error('Некоректное значение!');
			this.#moneyAmount = value;
		}
		get Rate() {
			return this.#rate
		}
		set Rate(value) {
			if (value < 0) throw new Error('Некоректное значение!');
			this.#rate = value;
		}
		toString() {
			return `
				<p>Общая сумма на счету: ${this.#moneyAmount} долларов</p>
				<p>Курс доллара: ${this.#rate}</p>
			`
		}
		// --- метод додавання грошової маси ---
		addMoney(money) {
			if (money < 0) throw new Error('Некоректное значение!');
			let usdValue = money / this.Rate;
			this.MoneyAmount += usdValue;
			console.log(`Вы добавили ${money}uah. Курс долара, при якому сума у гривнях збільшиться на 100: ${((money + 100) / usdValue).toFixed(2)}`);
			//document.write(`курсу долара, при якому сума у гривнях збільшиться на 100: ${((money + 100) / usdValue).toFixed(2)}`);
		}
		// --- метод вилучення грошової маси ---
		removeMoney(money) {
			if (money < 0) throw new Error('Некоректное значение!');
			let usdValue = money / this.Rate;
			if (usdValue > this.MoneyAmount) throw new Error('Недостаточно денег на счету!');
			this.MoneyAmount -= usdValue;
			console.log(`Вы забрали ${money}uah. Курс долара, при якому сума у гривнях збільшиться на 100: ${((money + 100) / usdValue).toFixed(2)}`);
			//document.write(`курсу долара, при якому сума у гривнях збільшиться на 100: ${((money + 100) / usdValue).toFixed(2)}`);
		}
	}

	try {
		const money = new TMoney(1500, 40);
		console.log(money);
		money.addMoney(3000);
		console.log(money);
		money.removeMoney(2000);
		console.log(money);
	} catch (error) {
		alert(error.message);
	}
}