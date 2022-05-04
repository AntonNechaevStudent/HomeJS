// //1
// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,
//   }
//   for (let key in numbers) {
//     if (numbers[key] >=3) {
//       console.log(`Key: ${key}, volume: ${numbers[key]} >= 3`);
//     }
//   }

// //2
// const post = {
//   author: "John", // вывести этот текст
//   postId: 23,
//   comments: [
//     {
//       userId: 10,
//       userName: "Alex",
//       text: "lorem ipsum",
//       rating: {
//         likes: 10,
//         dislikes: 2, // вывести это число
//       },
//     },
//     {
//       userId: 5, // вывести это число
//       userName: "Jane",
//       text: "lorem ipsum 2", // вывести этот текст
//       rating: {
//         likes: 3,
//         dislikes: 1,
//       },
//     },
//   ],
// };
// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);

// //3
// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];
// products.forEach(element => {
//   element.price = element.price * 0.85;
//   console.log(element);
// });

//4
// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: [
//       "1.jpg",
//       "2.jpg",
//     ],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: [
//       "3.jpg",
//     ],
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ];
// console.log(products.filter(
//   product => "photos" in product && product.photos.length !== 0
// ));

// products.sort((product1, product2) => product1.price - product2.price);
// console.log(products);

// //5
// const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// //const obj = {key}
// en.forEach((element, i) => {
//   let obj = {[element]: ru[i]} 
//   //console.log(obj);
//   en[i] = obj;
// });
// console.log(en);

//6
const numbers = {
  key1: {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  },
  key2: {
  keyin1: 4,
  keyin2: 5,
  keyin3: 6,
  },
  }
function allKeys (key) {
  
  for (let n in key) {
      console.log(n);
      
  }
}
allKeys(numbers);


