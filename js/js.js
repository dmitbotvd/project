// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// // const width = box.clientWidth;
// // const height = box.clientHeight;

// // const width = box.offsetWidth;
// // const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//   //box.style.height = box.scrollHeight + 'px';
//   console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style.display);

// console.log(document.documentElement.clientWidth);
// //document.documentElement.scrollTop = 0;
//asdasdadasdasdad
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log(`hello ${this.name}`);
//   };
// }

// User.prototype.exit = function() {
//   console.log(`Пользователь ${this.name} ушел`);
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);
// ivan.exit();
// ivan.hello();
// alex.hello();
// console.log(ivan);
// console.log(alex);
//'use strict';
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4,5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this);
//     }
//   }
// };
//obj.sum();


// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log('Hello' + this.name);
//   };
// }
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smitch', 'asdasd');
// sayName.apply(user, ['Smitch']);

// function count(num) {
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));
//1) обычная функция this = window если use sctict то будет undefined
//2) контекст у методов обьекта это будет сам обьект
//3) this в конструкторах и классах это новый экземпляр обьекта 
//4) ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
//   //console.log(this);
//   e.target.style.backgroundColor = 'red';
// });

// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this);
//     };
//     say();
//   }
// };
// obj.sayNumber();

// const double = a => a * 2;
// console.log(double(4));
