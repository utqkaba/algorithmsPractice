function maxSubArray(nums) {
  let maxSum = nums[0];

  for (let index = 0; index < nums.length; index++) {
    let currentSum = 0;
    for (let innerIndex = index; innerIndex < nums.length; innerIndex++) {
      currentSum += nums[innerIndex];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
