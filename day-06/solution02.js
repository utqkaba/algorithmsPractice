function duplicate(nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

console.log(duplicate([1, 2, 3, 1]));
console.log(duplicate([1, 2, 3, 4]));
