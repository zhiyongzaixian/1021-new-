// 二叉树算法
// a 和 b两个玩游戏，a说我随便想一个1-100之间的数，b来猜是几
// 1-100
// 79
// 1 - 50 || 51 - 100
// 51 - 76 || 77 - 100
// 77 - 88 || 89 - 100
// 77 - 83 || 84 - 88
// 77- 80 || 81 - 83
// 77 - 78 || 79 - 80
// 79

let arr = [2,5,6,3,4,7,1]
// 3  [2,5,6,4,7,1]
// leftArr: [2, 1]
// 3
// rightArr: [5, 6,  4, 7]
function quickSort(arr) {
  if(arr.length <= 1){
    return arr
  }
  let flag = Math.floor(arr.length / 2);
  // let flagValue = arr[flag];
  let flagValue = arr.splice(flag, 1)[0]
  
  let leftArr = [];
  let rightArr = [];
  // 用中间值和原数组PK
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    if(arrItem < flagValue){
      leftArr.push(arrItem)
    }else {
      rightArr.push(arrItem)
    }
  }
  
  leftArr = quickSort(leftArr)
  rightArr = quickSort(rightArr)
  return [...leftArr, flagValue, ...rightArr]
  // leftArr flagValue rightArr
}


console.log(quickSort(arr));
