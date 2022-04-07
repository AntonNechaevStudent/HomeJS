
// let a = 1, b = 1, c, d;

//   /*
//   инкремент увеличивает a на 1 с=2
//    */
//   c = ++a;
//   console.log(c);

//   /*
//   постфиксная форма возвращает старое значение до инкремента d=1
//    */
//   d = b++;
//   console.log(d);

//   /*
//   значение a = 2 после предыдущего, ++a добавляет еще 1 с=5
//    */
//   c = 2 + ++a;
//   console.log(c);

//   /*
//   постфиусная форма в предыдущем примере увеличила b и теперь b=3 но в этом примере постфиксная форма передаёт предыдущее значение b=2 поэтому d=4
//    */
//   d = 2 + b++;
//   console.log(d);

//   console.log(a);
//   console.log(b);

  //2
  
//   "use strict";

//   let a = 2;
//   let x = 1 + (a *= 2);

//   /*
//   a *= 2 равносильно a = a*2, то есть переменной a присвоили новое значение 
//   x = 1 + 4

//    */
//   console.log(x);
//   console.log(a);

  // //3
  // const a = Number(prompt (`Введите a`));
  // const b = Number(prompt (`Введите b`));
  
  // function result(c,d) {
  //   if (c>=0 && d>=0) {
  //     console.log(c-d)
  //   } else if (c<=0 && d<=0) {
  //     console.log(c*d)
  //   } else if ((c>0 && d<0) || (c<0 && d>0)) {
  //     console.log(c+d)
  //   }
  // }
  // result(a,b);
  // //4
  // const sum = (a, b) =>  a + b;
  // const raznost = (a,b) => {
  //   if (a >= b) {
  //     return(a - b)} 
  //     else { 
  //       return(b - a) }};
  // const del = (a,b) => a/b;
  // const umnog = (a,b) => a*b;
  
  // console.log(sum (1, 10));
  //5
  function declinationOfNumber(count, one, two, five) {
    const lastDigit = count % 10;
    switch (lastDigit) {
      case 0: return (five);
      case 1: return (one);
      case 2: return (two);
      case 3: return (two);
      case 4: return (two);
      case 5: return (five);
      case 6: return (five);
      case 7: return (five);
      case 8: return (five);
      case 9: return (five);
      default:
        break;
    }
  } 
  const applesNumber = 15553;
  // Получаем от функции одно из слов "яблоко", "яблока" или "яблок".
  const word = declinationOfNumber(applesNumber, "яблоко", "яблока", "яблок");
  // Выводим корректную строку, например:
  // "У меня есть 1 яблоко."
  // "У меня есть 2 яблока."
  // "У меня есть 5 яблок."
  // При любом целом, положительном числе в applesNumber, строка, которая
  // выводится в console.log, должна иметь правильное склонение слова "яблоко".
  console.log(`У меня есть ${applesNumber} ${word}.`);

