// var name = "Соёл";
// var age = 25;

// age >= 18
//   ? console.log(name + " бол насанд хүрсэн хүн")
//   : console.log(name + " бол хүүхэд байна");

// var who = age >= 18 ? "том хүн" : "хүүхэд";
// console.log(who);

// who === "том хүн"
//   ? console.log(name + " бол баранд орж болно")
//   : console.log(name + "бол баранд орж болохгүй");

// var avgDun = 15;
// var name = "Соёл";

// information("95", "Bold");

// function information(avgDun, name) {
//   switch (true) {
//     case avgDun >= 90:
//       console.log(name + " бол онц сурлагатан");
//       break;
//     case avgDun < 90 && avgDun >= 80:
//       console.log(name + " бол сайн ");
//       break;
//     case avgDun < 80 && avgDun >= 70:
//       console.log(name + " бол Дунд ");
//       break;
//     default:
//       console.log(name + " бол муу");
//   }
// }

// тооны модулийг хилдэг функц
// |-15| = 15

////->>>Function
// var modul = function (number) {
//   console.log("expression working" + number);
// };

// function mod(number) {
//   console.log("statement function working " + number);
// }

// modul(-225);
// mod(112);

// function greeting(parameterVariable) {
//   console.log("Hello, World!" + "\n" + parameterVariable);
// }
// greeting("Welcome to 10 Days of JavaScript!");

//--->> Object

var c1 = {
  name: "Соёл",
  age: 25,
  job: "accountant",
};

var c2 = {
  name: "ESTR",
  age: 27,
  job: "Actress",
};

console.log(c1.name + " ч сайхан амьтандаа. " + c1.age + "-тай");
console.log(
  c2.name +
    " 27 шүргэж яваа хот шээкший амьтан л даа. сайхан амьтан мээнь бавчихиймсандаа"
);

console.log();
