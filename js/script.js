"use strict";
// defer - загружает скрипт в фоновом режиме (отложенный скрипт)
// async - запускаеться как только он был загружен (не знаешь какой из скриптов загрузился первый)
// const p = document.querySelectorAll('p');
// console.log(p);

// function loadScript(src) {
//   const script = document.createElement('script');
//   script.src = src;
//   script.async = false;
//   document.body.append(script);
// }

// loadScript('test.js');

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWitchText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Текст ${this.text}, цвет ${this.bgColor}`);
  }
}
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());
const div = new ColoredRectangleWitchText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());