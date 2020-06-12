// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый
// раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно.Если хочешь, в случае
// некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

const buttonTask06Ref = document.querySelector('#task-06-do');

buttonTask06Ref.addEventListener('click', () => {
  let total = 0;
  let input = 0;

  do {
    input = prompt('Enter nomber [0-9]...');

    if (input !== null) {
      console.log(`Your entered ${input}`);

      input = Number(input);
      if (Number.isNaN(input)) {
        console.log('Input error, try entering the number again');
        continue;
      }
      input = Number.parseInt(input);

      total = total + input;

      console.log(`Sum of all numbers is ${total}`);
    } else {
      console.log(`Total sum of all numbers is ${total}`);
      break;
    }
  } while (true);

  console.log('\n');
});
