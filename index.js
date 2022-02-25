//создаем констатны, чтобы получить доступ к кнопкам
const back = document.querySelector("#back");
const next = document.querySelector("#next");

//создаем массив, для доступа к фоткам
const photos = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg"];

//переменная индекс
let i = 0;

next.addEventListener("click", () => {//функция - при клике на кнопку картинки перелистываются вперед
  i++; //прибавляется 1
  if (i > photos.length - 1) {//если порядковый номер больше, чем длина массива, тогда вернись в начало и покажи самую первую фотографию иначе будет ошибка
  i = 0;
  }
  document.querySelector("#pictures").src = photos[i];// получаем доступ к фото i - доступ к разным номерам фото, в зависимости на которой находится пользователь
})

back.addEventListener("click", () => { //функция - при клике на кнопку картинки перелистываются назад
  i--; //уменьшается на 1
  if (i < 0) { //если порядковый номер массива меньше 0 (то чего не существует в массиве), номер равен длине массива минус 1
    i = photos.length - 1;
  }
  document.querySelector("#pictures").src = photos[i];
})
