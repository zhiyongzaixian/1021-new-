// 数组扁平化： 将二维或者多维数组转换成一维数组
let arr = [1,2, [3, 4, [5, 6]]]

let test = [1,2,3]
// concat不会影响原数组，会返回一个新的数组
// console.log(test.concat(4));
// console.log(test.concat([5,6]));

function arrFlutten(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    // 如果arrItem还是数组，考虑里边是否嵌套数组
    if(Array.isArray(arrItem)){
      result = result.concat(arrFlutten(arrItem))
    }else {
      result = result.concat(arrItem)
    }
  }
  return result;
}


console.log(arrFlutten(arr));


// reduce
// let testArr = [1,2,3,4]
// let resultTest = testArr.reduce((pre, item) => {
//   console.log(pre,item);
//
//   return pre + item;
// }, 0)
//
// console.log(resultTest);

function arrFlutten2(arr) {
  return arr.reduce((pre, arrItem) => {
    return pre.concat(Array.isArray(arrItem)?arrFlutten2(arrItem):arrItem)
  }, [])
}

console.log(arrFlutten2(arr));

let arrFlutten3 = arr => arr.reduce((pre, arrItem) => pre.concat(Array.isArray(arrItem)?arrFlutten2(arrItem):arrItem), [])
console.log(arrFlutten3(arr));
