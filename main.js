// //1
// for (let i = 0; i <= 11; i++) {
//   if (i === 0) {
//     console.log(`0 - это ноль`)}
//     else if (i % 2 === 0) {
//       console.log(`${i} - это чётное число`)
//     }else console.log(`${i} - это нечётное число`);
  
// }
//2
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

//3
// function randomArrItem() {
//   return Math.floor(Math.random() * 11);
// }
// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = randomArrItem();
// }
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Math.pow(arr[i],2);
// }
// console.log(arr);

//4
// function randomArrItem() {
//   return Math.floor(Math.random() * 11);
// }
// let arr = new Array(5);
// const arrFree3 = [];
// const arr10 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = randomArrItem();
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 3) {
//     arrFree3.push(arr[i]);
//     arr10.push(arr[i] + arr[i] / 10);
//   } 
// }
// console.log(arr, arrFree3, arr10);

// //5
// function logs(a) {
//   console.log(a);
//   let b = a + 1;
//   return b;  
// }
// // let i = 15
// // i = logs(i);
// // console.log(i);
// for (let i = 0; i <= 9; i = logs (i)){/* здесь пусто */}

//6
function xString(s) {
  return x = s + 'x';
}
let str = '';
for (i = 0; i < 20; i++) {
  console.log(xString(str));
  str = xString(str);
}