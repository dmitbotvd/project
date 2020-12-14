'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
const num = 100;
box.style.cssText = `background-color: green; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'grey';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
//const text = document.createTextNode('тут был я');

div.classList.add('black');

wrapper.prepend(div);
//wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[2]);

//hearts[0].after(div);

//circles[0].remove();
//wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = 'Hello world';
//div.textContent = 'hello';
div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");
