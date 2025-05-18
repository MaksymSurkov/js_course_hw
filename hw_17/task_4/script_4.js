"use strict"
// * Задача 4. Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, 
// * кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, 
// * фільтрація за назвою товару, фільтрація за назвою фірми

if (confirm('Почати тестування?')) {
	class Manufacturer {
		#name
		#id
		constructor(name, id) {
			this.Name = name;
			this.RegNumber = id;
		}
		get Name() {
			return this.#name;
		}
		set Name(newName) {
			if (newName.lenght === 0) throw new Error('Некоректное значение!');
			this.#name = newName;
		}
		get RegNumber() {
			return this.#id;
		}
		set RegNumber(number) {
			if (number.lenght === 0) throw new Error('Некоректное значение!');
			this.#id = number;
		}
		toString() {
			return `Производитель: ${this.Name}, регистрационный номер: ${this.RegNumber}`;
		}
	}
	
	class Product {
		#name
		#unit
		#quantity
		#manufacturer
		constructor(name, unit, quantity, manufacturer) {
			this.Name = name;
			this.Unit = unit;
			this.Quantity = quantity;
			this.Manufacturer = manufacturer;
		}
		get Name() {
			return this.#name;
		}
		set Name(newName) {
			if (newName.lenght === 0) throw new Error('Некоректное значение!');
			this.#name = newName;
		}
		get Unit() {
			return this.#unit;
		}
		set Unit(unit) {
			if (unit.lenght === 0) throw new Error('Некоректное значение!');
			this.#unit = unit;
		}
		get Quantity() {
			return this.#quantity;
		}
		set Quantity(count) {
			if (count.lenght === 0 || typeof count !== 'number' || count < 0) throw new Error('Некоректное значение!');
			this.#quantity = count;
		}
		get Manufacturer() {
			return this.#manufacturer;
		}
		set Manufacturer(manufacturer) {
			if (manufacturer.lenght === 0) throw new Error('Некоректное значение!');
			this.#manufacturer = manufacturer;
		}
		toString() {
			return `${this.Name} - количество: ${this.Quantity}${this.Unit} - ${this.Manufacturer}`
		}
	}

	class Warehouse {
		constructor(products = []) {
			this.products = products;
		}
		
		// * --- реєстрація ---
		addProduct(newProduct) {
			for (let product of this.products) {
				if (product.Name === newProduct.Name) {
					console.log(`Додано на склад: ${newProduct.Quantity}${newProduct.Unit}: ${newProduct.Name}`);
					product.Quantity += newProduct.Quantity;
					return;
				}
			}
			this.products.push(newProduct);
			console.log(`Додано на склад: ${newProduct}`);
		}
		// * --- відвантаження товарів ---
		shipmentProd(name, quantity) {
			for (let product of this.products) {
				if (product.Name === name) {
					if (product.Quantity < quantity) throw new Error(`${product.Name} доступно: ${product.Quantity}${product.Unit}`);
					product.Quantity -= quantity;
					console.log(`Выдано ${quantity}${product.Unit} ${product.Name}`);
					return;
				} else {
					throw new Error(`${product.Name} нет на складе!`);
				}
			}
		}
		// * --- фільтрація за назвою товару ---
		filterByProductName(name) {
			return this.products.filter((product) => product.Name === name);
		}
		// * --- фільтрація за назвою фірми ---
		filterByManufacturer(name) {
			return this.products.filter((product) => product.Manufacturer.Name === name);
		}
	}

	let manufacturer_1 = new Manufacturer('Nestle', 123);
	let manufacturer_2 = new Manufacturer('Roshen', 321);

	let prod_1 = new Product('prod1', 'шт', 5, manufacturer_1);
	let prod_2 = new Product('prod2', 'шт', 5, manufacturer_2);
	let prod_3 = new Product('prod3', 'шт', 5, manufacturer_1);
	let prod_4 = new Product('prod4', 'шт', 5, manufacturer_2);
	let prod_5 = new Product('prod5', 'шт', 5, manufacturer_1);

	let warehouse_1 = new Warehouse([prod_1, prod_2, prod_3, prod_4, prod_5]);

	console.log(warehouse_1);

	warehouse_1.addProduct(prod_5);
	warehouse_1.shipmentProd('prod1', 2);
	console.log(warehouse_1.filterByProductName('prod3'));
	console.log(warehouse_1.filterByManufacturer('Nestle'));
}