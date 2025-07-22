function mergeArray(nums1, m, nums2, n) {
  for (let index = 0; index < n; index++) {
    nums1[m + index] = nums2[index];
  }
  nums1.sort((a, b) => a - b);
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

mergeArray(nums1, 3, nums2, 3);

console.log(nums1);
