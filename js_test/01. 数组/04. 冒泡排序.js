// 从数组的第一位开始，与后边的元素比较，升序(如果前边的元素大于后边的元素，就交换位置1)
let arr = [3,2,5,6, 1,4]
// [2,3,5,6, 1,4]
// [2,3,5, 1,6,4]
// [2,3,5, 1,4, 6]

let a = 1;
let b = 2;

a = a + b;
b = a - b;
a = a - b;




function maopao(arr) {
  // PK的轮数
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]){
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];
      }
    }
  }
  
  return arr;
}

console.log(maopao(arr));
