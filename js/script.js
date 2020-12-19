"use strict";
// defer - загружает скрипт в фоновом режиме (отложенный скрипт)
// async - запускаеться как только он был загружен (не знаешь какой из скриптов загрузился первый)
const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript('test.js');
