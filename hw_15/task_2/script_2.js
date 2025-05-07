"use strict"
// * Задача 2. Створити об’єкт «Авто».

if (confirm('Почати тестування?')) {
	
	class Auto {
		constructor(initBrand, initFuelTank, initAvailableFuel, initCapacity, initPassengers) {
			this.brand = initBrand;
			this.fuelTank = initFuelTank;
			this.availableFuel = initAvailableFuel;
			this.carCapacity = initCapacity;
			this.passengers = initPassengers;
		}

		// Заправка на вказану кількість літрів
		fillTank(litr) {
			const maxFuel = this.fuelTank - this.availableFuel;
			if (maxFuel < litr) {
				console.log(`В Ваш бак не поместиться столько топлива. Вы можете залить максимум - ${maxFuel}`)
			} else {
				this.availableFuel += litr;
			}
			//console.log(this.availableFuel);
		}

		// Виведення кількості пасажирів
		showPassengers() {
			console.log(this.passengers);
		}

		// Додавання пасажирів
		addPassengers(value) {
			const maxAdd = this.carCapacity - this.passengers;
			if (maxAdd < value) {
				console.log(`В Вашу машину столько не поместится пассажиров. Вы можете посадить максимум еще - ${maxAdd}`)
			} else {
				this.passengers += value;
			}
			//console.log(this.passengers);
		}

		// Висадка пасажирів
		getOutPassengers(value) {
			this.passengers -= value;
			//console.log(this.passengers);
		}
	}

	const auto = new Auto('audi', 65, 35, 5, 2);
	console.log(auto);
	//auto.addPassengers(2);
	//auto.fillTank(40);
	//auto.showPassengers();
	//auto.getOutPassengers(1);
}