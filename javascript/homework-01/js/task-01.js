// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара(сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

const name = 'Shield generator';

let price = 1000;
console.log(`Selected "${name}", unit price ${price} credits`);

price = 2000;
console.log(`Selected "${name}", unit price ${price} credits`);

console.log('\n');
