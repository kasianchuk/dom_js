<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Содержание</h1>

    <div class="contents">
      <ul class="book">
        <li class="chapter">Глава 1</li>
        <li class="chapter">Глава 2</li>
      </ul>
    </div>

    <script>
      let chapter = document.querySelector('.chapter'); // LI

      alert(chapter.closest('.book')); // UL
      alert(chapter.closest('.contents')); // DIV

      alert(chapter.closest('h1')); // null (потому что h1 - не предок)
    </script>


  </body>
</html>
