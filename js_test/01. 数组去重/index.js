let arr = [2,1,4,3,2,5,3,4]

// ES5
function uniqArr(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    let arrItem = arr[i];
    // 如果result中没有arrItem，就放入arrItem
    if(result.indexOf(arrItem) === -1){
      result.push(arrItem);
    }
  }
  return result;
}


console.log(uniqArr(arr));

// ES6
console.log(...new Set(arr));
function uniqArr2(arr) {
  let result = [];
  // set容器
  let set = new Set(arr)
  // for of专门用于有iterator接口的数据消费
  for(let item of set){
    result.push(item)
  }
  
  return result;
}

console.log(uniqArr2(arr));

//
// function uniqArr3(arr) {
//   let result = [];
//   // set容器
//   // let set = new Set(arr)
//   result.push(...new Set(arr))
//
//   return result;
// }



let uniqArr3 = arr => [...new Set(arr)]
console.log(uniqArr3(arr));
