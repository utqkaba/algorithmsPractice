function twoSum(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    for (let innerIndex = index + 1; innerIndex < nums.length; innerIndex++) {
      if (nums[index] + nums[innerIndex] === target) {
        return [index, innerIndex];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
