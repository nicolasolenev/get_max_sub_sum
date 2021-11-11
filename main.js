function getArrClone(arr) {
  const arrClone = [];
  for (let el of arr) {
    arrClone.push(el);
  }
  return arrClone;
}

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

function getMaxSubSum(arr) {
  if (!arr[0]) return 0;
  let arrClone = getArrClone(arr);
  arrClone = getConvertedArr(arrClone);
  let maxSum = 0;
  let sum = 0;

  while (arrClone.length >= 1) {
    if (arrClone[0] <= 0) {
      arrClone.shift();
      continue;
    }

    if (maxSum < arrClone[0]) {
      maxSum = arrClone[0];
    }

    if (arrClone[0] + arrClone[1] <= 0) {
      arrClone.shift();
      arrClone.shift();
      if (maxSum < arrClone[0]) {
        maxSum = arrClone[0];
      }
      continue;
    }

    if (arrClone[0] + arrClone[1] > 0) {
      if (maxSum < arrClone[0] + arrClone[1]) {
        maxSum = arrClone[0] + arrClone[1];
        arrClone.shift();
        arrClone[0] = maxSum;
      } else {
        sum = arrClone[0] + arrClone[1];
        arrClone.shift();
        arrClone[0] = sum;
      }
      continue;
    }

    return maxSum;

  }

  return maxSum;
}


console.log(getMaxSubSum([-1, 2, 3, -9]) + ' = 5');
console.log(getMaxSubSum([2, -1, 2, 3, -9]) + ' = 6');
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) + ' = 11');
console.log(getMaxSubSum([-2, -1, 1, 2]) + ' = 3');
console.log(getMaxSubSum([100, -9, 2, -3, 5]) + ' = 100');
console.log(getMaxSubSum([1, 2, 3]) + ' = 6');
console.log(getMaxSubSum([-1, -2, -3]) + ' = 0');
console.log(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]) + ' = 6');
console.log(getMaxSubSum([]) + ' = 0');