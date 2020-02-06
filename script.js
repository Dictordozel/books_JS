
let list = document.querySelectorAll('ul'),
elem = document.querySelectorAll('li');

console.log(list, elem);

list[5].insertBefore(elem[55], elem[48]);
list[5].insertBefore(elem[48], elem[52]);
list[5].insertBefore(elem[51], elem[54]);

list[0].insertBefore(elem[6], elem[4]);
list[0].insertBefore(elem[8], elem[4]);
list[0].insertBefore(elem[2], elem[10]);

/////////////////////////////////////////////////

let books = document.querySelectorAll('aside'),
book = document.querySelectorAll('div');

//////////////////////////////////////////////////
// let books = document.querySelectorAll('.books'),
// book = document.querySelectorAll('.book');
//////////////////////////////////////////////////

console.log(books, book);

books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[3], book[2]);
books[0].insertBefore(book[5], book[2]);

book[6].remove();

//////////////////////////////////////////////////
// let banner = document.querySelectorAll('.adv');
// banner[0].remove();
///////////////////////////////////////////////////

let title = document.querySelectorAll('a');
console.log(title);
title[2].textContent = 'Книга 3. this и Прототипы Объектов';

////////////////////////////////////////////////////

let newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
console.log(newChapter);
list[2].appendChild(newChapter);
list[2].insertBefore(newChapter, elem[26]);

//////////////////////////////////////////////////////

let newBg = document.querySelector('body');
console.log(newBg);
document.body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)')