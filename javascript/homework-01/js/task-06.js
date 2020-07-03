// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый
// раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно.Если хочешь, в случае
// некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

'use strict';
const buttonTask06Ref = document.querySelector('#task-06-do');

buttonTask06Ref.addEventListener('click', () => {
  let total = 0;
  let input = 0;
  let message;

  do {
    message = 'Enter number [0-9]...';
    input = prompt(message);

    if (input !== null) {
      message = `Your entered ${input}`;
      console.log(message);
      input = Number(input);

      if (Number.isNaN(input) || input == '') {
        message = 'Input error, try entering the number again';
        console.log(message);
        continue;
      }
      input = Number.parseInt(input);

      total += input;

      message = `Sum of all numbers is ${total}`;
      console.log(message);
    } else {
      message = `Total sum of all numbers is ${total}`;
      console.log(message);
      alert(message);
      break;
    }
  } while (true);

  console.log('\n');
});
