"use strict"
// * Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. *
// * Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова. *
// Шаг 0 - Обозначение
// имя первого ребенка - firstChildrenName
// имя второго ребенка - secondChildrenName
// количесвто конфет у первого ребенка - firstChildrenCandyValue
// количесвто конфет у второго ребенка - secondChildrenCandyValue

// Шаг 1 - Вводим необходимые значения
let firstChildrenName = prompt('Введите имя первого ребенка');
let firstChildrenCandyValue = parseInt(prompt(`Введите сколько у ${firstChildrenName} конфет`));
let secondChildrenName = prompt('Введите имя второго ребенка');
let secondChildrenCandyValue = parseInt(prompt(`Введите сколько у ${secondChildrenName} конфет`));

// Шаг 2 - Розв"язок заадачі
if (firstChildrenCandyValue > secondChildrenCandyValue)
	document.write(`<p class="block">У ${firstChildrenName} конфет больше</p>`)
else if (firstChildrenCandyValue < secondChildrenCandyValue)
	document.write(`<p class="block">У ${secondChildrenName} конфет больше</p>`)
else
	document.write(`<p class="block">У ${secondChildrenName} и ${firstChildrenName} конфет одинаково</p>`)

