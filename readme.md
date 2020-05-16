```
**JS**
*DOM* **https://learn.javascript.ru/dom-nodes**
document.body

*https://learn.javascript.ru/searching-elements-dom*
*document.getElementById или просто id* знайти по ІД
let name = document.getElementById('firstName')
name.innerHTML = "Borus" // By id
name.style.cssText = "color: blue; border: 1px solid black";

<script>
  !! name variable show error
  firstName.style.background = 'red';  // !! Not recommended by id without variable
</script>

*querySelectorAll* знайти всі елементи
let elements = document.querySelectorAll('ol > li:last-child');
for (let elem of elements) {
  elem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}
elements.length //2

*querySelector* знайти перший
let first_element = document.querySelector('ol > li:last-child').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
elements.length //1

*closest* знайти найпершого предка
<!-- li.closest(.contents) == div  -->
<h1>Содержание</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Глава 1</li>
    <li class="chapter">Глава 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  let closest_array = [chapter.closest('.book'), chapter.closest('.contents'), chapter.closest('h1') ];

  for (let list of closest_array) {
    console.log(list)
  }

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (потому что h1 - не предок)
</script>

*getElementsBy*

let divs = document.getElementsByTagName('div');
for (let list of divs) {
  list.innerHTML = 'lorem';
}

let articles = getElementsByClassName('article');

<form name="my-form">
  <div class="article">Article</div>
  <div class="long article">Long article</div>
</form>


**Jquery**
https://api.jquery.com/category/selectors/basic-css-selectors/


**Трохи про +**

Додавання стірнгів // "A B"
"A" + " " + "B";
"A".concat(" B");
`A B`;

Додавання чисел // 1
i = 0;
i++; //1
i = i + 1;
i += 1;
```
