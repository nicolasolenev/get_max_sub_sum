function getMaxSubSum(arr) {
  if (!arr[0]) return 0;
  const arrClone = [];
  for (let i = 0; i < arr.length; i++) {
    arrClone[i] = arr[i];
  }
  let result = 0;
  let newArr = [];
  newArr[0] = arrClone[0];
  for (i = 0, j = 0; i < arrClone.length - 1; i++) {
    if (newArr[j] > 0 && arrClone[i + 1] > 0) {
      newArr[j] = newArr[j] + arrClone[i + 1];
    } else if (newArr[j] <= 0 && arrClone[i + 1] <= 0) {
      newArr[j] = arrClone[i + 1] + newArr[j];
    } else {
      j++;
      newArr[j] = arrClone[i + 1];
    }
  }
  for (let el of newArr) {
    result += el;
  }
  let first = true;
  let second = true;
  while (first && second) {
    if (result + newArr[0] < result) {
      first = true;
      result = result - newArr[0];
      newArr.shift();
    } else first = false;
    if (result + newArr[newArr.length - 1] < result) {
      second = true;
      result = result - newArr[newArr.length - 1];
      newArr.pop();
    } else second = false;
  }
  let indexOfMax = 0;
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] > result) {
      result = newArr[i];
      indexOfMax = i;
    }
  }
  if ((newArr[indexOfMax] + newArr[indexOfMax + 1] + newArr[indexOfMax + 2]) > result) {
    result = newArr[indexOfMax] + newArr[indexOfMax + 1] + newArr[indexOfMax + 2];
  }
  if ((newArr[indexOfMax] + newArr[indexOfMax - 1] + newArr[indexOfMax - 2]) > result) {
    result = newArr[indexOfMax] + newArr[indexOfMax - 1] + newArr[indexOfMax - 2];
  }
  return result;
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