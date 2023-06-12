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

let word = "botless";
let count = 99;
while (count > 0) {
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer");
  console.log("Take one the down, pass it around,");
  --count;
  if (count === 0) {
    console.log("No more" + " " + word + "  of beer on the wall");
  }
}

// три основных типа выражений - числовые,строковые и логические.
// команды if/else используються для принятия решений в коде.
// команды while/for для многократного выполнения команд в цикле.