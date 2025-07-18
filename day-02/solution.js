function moveZeroes(nums) {
  let length = nums.length;
  let position = 0;

  for (let index = 0; index < length; index++) {
    if (nums[index] !== 0) {
      nums[position] = nums[index];
      position++;
    }
  }
  for (let fillIndex = position; fillIndex < length; fillIndex++) {
    nums[fillIndex] = 0;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
