// ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)


const root = document.querySelector('#root');

const btn = document.querySelector('.btn');
const container = document.querySelector('.cont');

btn.addEventListener('click', () => {
  const text = document.createElement('p');
  text.innerText = 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). Source: Wikipedia.';
  text.classList.add('text');
  text.style.color = 'green';
  container.append(text);
});

// ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.

// const root = document.querySelector('#root');

// const btn = document.querySelector('.btn');

// const cont = document.querySelector('.cont');

// btn.addEventListener('click', () => {
//   const square = document.createElement('div');
//   square.classList.add('square');
//   cont.append(square);
// })