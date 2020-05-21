// 数组分块

let arr = [1,2,3,4,5,6,7,8,9]  // lodash.chunk(arr, 3)
// [[1,2,3]  [4,5,6], [7,8,9] [10]]

// slice
// console.log(arr.slice(0, 3));
// console.log(arr);

// splice
// console.log(arr.splice(0, 3));
// console.log(arr.splice(0, 3));
// console.log(arr.splice(0, 3));
// console.log(arr);

function chunk(arr, size) {
  if(!Array.isArray(arr) || size <=0 ||Object.prototype.toString.call(num).slice(8, -1) !== 'Number' || size >= arr.length){
    return arr;
  }
  
  let result = [];
  while(arr.length >= size){
    result.push(arr.splice(0, size))
  }
  arr.length && result.push(arr)
  return result;
}
let num = 3;
// console.log(Object.prototype.toString.call(num).slice(8, -1));
// console.log(arr.toString());
// console.log(chunk(arr, 3));
console.log(chunk(num, 3));
console.log(chunk(arr, -3));
console.log(chunk(arr, 'abc'));
console.log(chunk(arr, 9));
