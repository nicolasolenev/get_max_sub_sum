let arr = [-2, -1, 1, 2];

function getArrClone(arr) {
  const arrClone = [];
  for (let el of arr) {
    arrClone.push(el);
  }
  return arrClone;
}
// console.log(getArrClone(arr));

function getConvertedArr(arr) {
  const newArr = [];
  newArr[0] = arr[0];
  for (i = 0, j = 0; i < arr.length - 1; i++) {
    if (newArr[j] > 0 && arr[i + 1] > 0) {
      newArr[j] = newArr[j] + arr[i + 1];
    } else if (newArr[j] <= 0 && arr[i + 1] <= 0) {
      newArr[j] = arr[i + 1] + newArr[j];
    } else {
      j++;
      newArr[j] = arr[i + 1];
    }
  }
  return newArr;
}

// console.log(getConvertedArr(arr));

function getMaxSubSum(arr) {
  if (!arr[0]) return 0;
  let arrClone = getArrClone(arr);
  arrClone = getConvertedArr(arrClone);
  // console.log('Преобразованный массив: ');
  // console.log(arrClone);
  let maxSum = 0;
  let sum = 0;
  while (arrClone.length >= 1) {
    if (arrClone[0] <= 0) {
      arrClone.shift();
      // console.log('Попали в 1 условие, удалили первый элемент:');
      // console.log(arrClone);
      continue;
    }
    if (maxSum < arrClone[0]) {
      maxSum = arrClone[0];
    }
    // console.log('maxSum (1) = ' + maxSum);
    if (arrClone[0] + arrClone[1] <= 0) {
      // console.log('Сюда мы не должны попасть 1');
      arrClone.shift();
      arrClone.shift();
      if (maxSum < arrClone[0]) {
        // console.log('Сюда мы не должны попасть 1.1');
        maxSum = arrClone[0];
      }
      continue;
    }
    // console.log('maxSum (2) = ' + maxSum);
    // console.log('arrClone[0] + arrClone[1] = ' + (arrClone[0] + arrClone[1]));
    if (arrClone[0] + arrClone[1] > 0) {
      // console.log('Сюда мы попадаем 2');
      if (maxSum < arrClone[0] + arrClone[1]) {
        // console.log('Сюда мы не должны попасть 2');
        maxSum = arrClone[0] + arrClone[1];
        arrClone.shift();
        arrClone[0] = maxSum;
      } else {
        sum = arrClone[0] + arrClone[1];
        // console.log('sum = ' + sum);
        arrClone.shift();
        arrClone[0] = sum;
        // console.log(arrClone);
      }
      continue;
    }
    return maxSum;
  }

  return maxSum;
}

// console.log(getMaxSubSum(arr));

// function getMaxSubSum(arr) {
//   if (!arr[0]) return 0;
//   const arrClone = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrClone[i] = arr[i];
//   }
//   let result = 0;
//   let newArr = [];
//   newArr[0] = arrClone[0];
//   for (i = 0, j = 0; i < arrClone.length - 1; i++) {
//     if (newArr[j] > 0 && arrClone[i + 1] > 0) {
//       newArr[j] = newArr[j] + arrClone[i + 1];
//     } else if (newArr[j] <= 0 && arrClone[i + 1] <= 0) {
//       newArr[j] = arrClone[i + 1] + newArr[j];
//     } else {
//       j++;
//       newArr[j] = arrClone[i + 1];
//     }
//   }
//   for (let el of newArr) {
//     result += el;
//   }
//   let first = true;
//   let second = true;
//   while (first && second) {
//     if (result + newArr[0] < result) {
//       first = true;
//       result = result - newArr[0];
//       newArr.shift();
//     } else first = false;
//     if (result + newArr[newArr.length - 1] < result) {
//       second = true;
//       result = result - newArr[newArr.length - 1];
//       newArr.pop();
//     } else second = false;
//   }
//   let indexOfMax = 0;
//   for (i = 0; i < newArr.length; i++) {
//     if (newArr[i] > result) {
//       result = newArr[i];
//       indexOfMax = i;
//     }
//   }
//   if ((newArr[indexOfMax] + newArr[indexOfMax + 1] + newArr[indexOfMax + 2]) > result) {
//     result = newArr[indexOfMax] + newArr[indexOfMax + 1] + newArr[indexOfMax + 2];
//   }
//   if ((newArr[indexOfMax] + newArr[indexOfMax - 1] + newArr[indexOfMax - 2]) > result) {
//     result = newArr[indexOfMax] + newArr[indexOfMax - 1] + newArr[indexOfMax - 2];
//   }
//   return result;
// }


console.log(getMaxSubSum([-1, 2, 3, -9]) + ' = 5');
console.log(getMaxSubSum([2, -1, 2, 3, -9]) + ' = 6');
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) + ' = 11');
console.log(getMaxSubSum([-2, -1, 1, 2]) + ' = 3');
console.log(getMaxSubSum([100, -9, 2, -3, 5]) + ' = 100');
console.log(getMaxSubSum([1, 2, 3]) + ' = 6');
console.log(getMaxSubSum([-1, -2, -3]) + ' = 0');
console.log(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]) + ' = 6');
console.log(getMaxSubSum([]) + ' = 0');