function maxSubArray(nums) {
  let maxSum = nums[0];
  let maxCurrentSum = nums[0];

  for (let index = 1; index < nums.length; index++) {
    maxCurrentSum = Math.max(nums[index], maxCurrentSum + nums[index]);
    maxSum = Math.max(maxSum, maxCurrentSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
