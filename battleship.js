// const age = 15;
// const nameUser = "Oven";

// if (age > 14) {
//   alert("Sorry");
// } else {
//   alert("welocome" + nameUser + "!");
// }

// const winner = 2;
// const name = "Duke";
// const isEligible = false;

// имя переменной долно начинаться сбуквы,подчеркивания либо знака доллара.
// потом могут следовать буквы,цифры,подчеркивания и знаки доллара-в любом колличестве.
// также нальзя использовать зарезервированые слова.

// регистр символов учитываеться
// Count и count - разные пременные

// const total = price - price * (discount / 100);
// расчет скидки

// const temp = 10;
// console.log((9 / 5) * temp + 32);
// калькулятор пересчета температуры по Цельсию в Фаренгейты.

// циклы
// while,for,for in,forEach

// while (scoops > 0) {
//   document.write("Another scoops!");
//   scoops = scoops - 1;
// }

// ЦИКЛЫ

// // переменной призваиваеться знавчение 5
// let scoops = 5;
// // проверяеться условие.истина или ложь
// // будет проверяться пока не станет ложью
// while (scoops > 0) {
//   // т.к условие истинно код выполняеться.
//   console.log("Another scoops!");
//   // уменьшает значение на 1
//   --scoops;
// }
// // если условие становиться ложью то вы водиться вот это условие
// console.log("Life without ice cream isn`t the same");

// // есть команда if. if выполняеться только если условие истинно

// if (scoops < 3) {
//   // усли условие истинно то код выполняеться
//   console.log("Ice cream is running low");
// }

// if позволяет выполнять несколько проверок.для этого нужно добавить else if

// if (scoops >= 5) {
//   console.log("1");
// } else if (scoops < 3) {
//   console.log("2");
// }

// сначала проверяеться одно условие,если оно  не верно то выполняеться следующее
// else if может быть сколько угодно

// if (scoops >= 5) {
//   console.log("5");
// } else if (scoops === 3) {
//   console.log("3");
// } else if (scoops === 2) {
//   console.log("2");
// } else if (scoops === 1) {
//   console.log("1");
// } else if (scoops === 0) {
//   console.log("0");
// } else {
//   // если ни одно из условий не окажеться истинным то выполниться этот код
//   console.log("end");
// }

// все команды блока обр одну группу,которая выполняеться как единое целое.
// например если while истинно то выполняються все команды в блоке.
// это относиться и к блокам if и else.
// любая переменная которая содержит не пустую строку считаеться истинной,а переменной которой значени не присвоено считаеться ложью.

// let name = "Joe";
// let i = 0;
// while (i < 2) {
//   console.log("Happy Bithday to you");
//   ++i
// }
// console.log("Happy Bithday dear " + name + ",");
// console.log("Happy Bithday to you.");

// let word = "botless";
// let count = 99;
// while (count > 0) {
//   console.log(count + " " + word + " of beer on the wall");
//   console.log(count + " " + word + " of beer");
//   console.log("Take one the down, pass it around,");
//   --count;
//   if (count === 0) {
//     console.log("No more" + " " + word + "  of beer on the wall");
//   }
// }

// три основных типа выражений - числовые,строковые и логические.
// команды if/else используються для принятия решений в коде.
// команды while/for для многократного выполнения команд в цикле.

// console.log("Battleship");

// let randomLoc = Math.floor(Math.random() * 5);
// let location1 = randomLoc;
// let location2 = location1 + 1;
// let location3 = location2 + 1;
// let guess; //кординаты выстрела
// let hits = 0;
// let guesses = 0;
// let isSunk = false;

// // пока корабль не будет потоплен
// while (isSunk == false) {
//   // получитить координаты выстрела
//   // результаты выстрела присваиваються переменной guess
//   guess = prompt("Готов, цель, огонь! (enter a number 0-6):");
//   // проверяем коректность ввода.убедиться что значение в диапазоне от 0 до 6
//   // результат будет true если значение меньше 0 или больше 6.
//   // если выполниться хотябы одно из условий то значение будет некорректно
//   if (guess < 0 || guess > 6) {
//     // если пользователь ввел некоректное значение
//     alert("Пожалуйста, введите действительный номер");
//   } else {
//     // если значение корректно то значение guesses увеличиваем на 1
//     ++guesses;
//     if (guess == location1 || guess == location2 || guess == location3) {
//       alert("Попал!");
//       ++hits;
//       if (hits == 3) {
//         isSunk = true;
//         alert("Ты потопил мой линкор");
//       }
//     } else {
//       alert("Мазила");
//     }
//   }
// }

// let stats =
//   "Ты взял " +
//   guesses +
//   " попытки потопить линкор, " +
//   "значит ваша точность стрельбы была " +
//   3 / guesses;

// alert(stats);

// РАСПРОДАЖА

// // сначала проверяем есть ли товар в наличии
// if (inStock == true) {
//   // проверяем участвует ли товар в распродаже
//   if (onSale == true) {
//     // если оба условия выполняються тогда покупаем
//     alert("buy buy buy");
//   }
// }
// // упрощаем код
// // такой код читаеться лучше
// if (inStock == true && onSale == true);
// // этот код выполниться если оба условия true

// if (inStock == true && (onSale == true || price < 60)) {
//   alert("buy buy buy");
// }
// здесь операторы И и ИЛИ задесйтвованы в одном условном выражении.это выражение ознаяает следующее: если товар имееться в наличии и учавствует в распродаже,или цена меньше 60 -покупаем.

// круглые скобки группируют условия,чтобы сначала был вычеслен результат операции ИЛИ ,а потом этот результат был использован для вычисления результата И.

// if (inStock == true) {
//   // в условиях if булевские пременные часто проверяються на истинность или ложность.
// }

// if (inStock) {
//   // если просто указать логическую переменную саму по себе,т о в случае истинности это переменнойусловие тоже будет истинным,а блок будет выполнен.
//   // а если переменная inStock ложна,то и условие ложно,и программный блок пропускаеться.
// }

// Math.random - получаем случайное число.- генерирует число от 0 до 1,не включая 1
// Math.floor - округляет числа,отбрасывая дробную часть.
// помните в ИЛИ для истинности всего выражения достаточно истинности одного условия.

// ------------------------------------------------

// ФУНКЦИИ

let dogName = "rover";
let dogWeigth = 23;

let dog2 Name = "spot";
let dog2Weigth = 13;

let dog3Name = "spike";
let dog3Weigth = 53;

let dog4Name = "lady";
let dog4Weigth = 17;

function gav(dogName, dogWeigth) {
  if (dogWeigth > 20) {
    console.log(dogName + " says WOFF WOFF");
  } else {
    console.log(dogName + " says woof woof");
  }
}

gav("rover");
gav("spot");
gav("spike");
gav("lady");


