"use strict"
// * Задача 4. Створити клас TBankomat, який моделює роботу банкомата. 
// * Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. 
// * Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

if (confirm('Почати тестування?')) {

	class TBankomat {
		#nominal_5
		#nominal_10
		#nominal_20
		#nominal_50
		#nominal_100
		#nominal_200
		constructor(n5 = 0, n10 = 0, n20 = 0, n50 = 0, n100 = 0, n200 = 0) {
			this.Nominal_5 = n5;
			this.Nominal_10 = n10;
			this.Nominal_20 = n20;
			this.Nominal_50 = n50;
			this.Nominal_100 = n100;
			this.Nominal_200 = n200;
		}
		validateNominal(value) {
			if (typeof value !== 'number' || value < 0) {
				throw new Error(`Номиналом должно быть числом ≥ 0`);
			}
			return value;
		}
		get Nominal_5() {
			return this.#nominal_5;
		}
		set Nominal_5(value) {
			this.#nominal_5 = this.validateNominal(value);
		}
		get Nominal_10() {
			return this.#nominal_10;
		}
		set Nominal_10(value) {
			this.#nominal_10 = this.validateNominal(value);
		}
		get Nominal_20() {
			return this.#nominal_20;
		}
		set Nominal_20(value) {
			this.#nominal_20 = this.validateNominal(value);
		}
		get Nominal_50() {
			return this.#nominal_50;
		}
		set Nominal_50(value) {
			this.#nominal_50 = this.validateNominal(value);
		}
		get Nominal_100() {
			return this.#nominal_100;
		}
		set Nominal_100(value) {
			this.#nominal_100 = this.validateNominal(value);
		}
		get Nominal_200() {
			return this.#nominal_200;
		}
		set Nominal_200(value) {
			this.#nominal_200 = this.validateNominal(value);
		}
		// * --- метод знаходження максимальної суми що може видати банкомат ---
		getMaxSum() {
			return (this.#nominal_5 * 5 + this.#nominal_10 * 10 + this.#nominal_20 * 20 + this.#nominal_50 * 50 + this.#nominal_100 * 100 + this.#nominal_200 * 200)
		}
		// * --- метод знаходження мінімальної суми що може видати банкомат ---
		getMinSum() {
			// if (this.Nominal_5 > 0) return 5;
			// if (this.Nominal_10 > 0) return 10;
			// if (this.Nominal_20 > 0) return 20;
			// if (this.Nominal_50 > 0) return 50;
			// if (this.Nominal_100 > 0) return 100;
			// if (this.Nominal_200 > 0) return 200;
			// return 0;
			const nominals = [5, 10, 20, 50, 100, 200];
			for (const nominal of nominals) {
				if (this[`Nominal_${nominal}`] > 0) {
					return nominal;
				}
			}
			return 0;
		}
		// * --- метод зняття деякої суми ---
		withdrawCash(value) {
			if (value % 5 !== 0) {
				throw new Error("Банкомат може видавати лише суми кратні 5 гривням.");
			}
			const nominals = [200, 100, 50, 20, 10, 5]; // от большей к меньшей чтобы быстрее выдать нужную сумму менимальным количесвтом купюр
			let withdrawCash = value;
			const giveNominals = {};
		
			// Определяем, сколько и каких купюр нужно выдать
			for (const nominal of nominals) {
				const available = this[`Nominal_${nominal}`]; // получаю количество доступных купюр
				const need = Math.floor(withdrawCash / nominal); // узнаю скольок нужно купюр данного номинала
				const count = Math.min(available, need); // узнаю скольок реально можно взять
		
				if (count > 0) {
					giveNominals[nominal] = count;
					withdrawCash -= count * nominal; // уменьшаю сумму которую еще нужно выдать
				}
			}
		
			// Проверяем если выдали правильно
			if (withdrawCash === 0) {
				// Обновляем количество купюр
				for (const nominal in giveNominals) {
					this[`Nominal_${nominal}`] -= giveNominals[nominal]; // вычитаем количесвто выданных купюр из общего количесвтва купюр
				}
				return giveNominals;
			} else {
				throw new Error("Банкомат не може видати потрібну суму доступними купюрами.");
			}
		}
		
		toString() {
			return `В банкомате: ${this.getMaxSum()} грн. Минимально доступная купюра: ${this.getMinSum()} грн.`;
		}
		
	}

	let newBankomat = new TBankomat(10, 15, 6, 3, 30);
	console.log(newBankomat);
	console.log(newBankomat.getMaxSum());
	console.log(newBankomat.getMinSum());
	console.log(newBankomat.withdrawCash(300));
	document.write(newBankomat);
}