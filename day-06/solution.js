function duplicate(arr) {
  let flag = false;

  for (let index = 0; index < arr.length; index++) {
    for (let innerIndex = index + 1; innerIndex < arr.length; innerIndex++) {
      if (arr[index] === arr[innerIndex]) {
        flag = true;
      }
    }
  }
  return flag;
}

console.log(duplicate([1, 2, 3, 1]));
console.log(duplicate([1, 2, 3, 4]));
