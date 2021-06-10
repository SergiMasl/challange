const adv = document.querySelector(".adv");
const book = document.querySelectorAll(".book");
const collection = document.querySelector(".books");
const textHead = document.querySelectorAll("a");
const list = document.querySelectorAll("li");
let newLi = document.createElement("li");
element = document.querySelector("body");

console.log(list);
console.log(newLi);
book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[3].after(book[5]);

element.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

textHead[4].textContent = "Книга 3. This и Прототипы Объектов";

adv.remove();

list[4].before(list[6]);
list[4].before(list[8]);
list[9].after(list[2]);

list[49].before(list[55]);
list[50].after(list[48]);
list[53].after(list[51]);
list[53].after(newLi);
newLi.textContent = "Глава 8: За пределами ES6";
console.log(newLi);
