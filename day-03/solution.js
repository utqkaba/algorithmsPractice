// solution 1
function stock(prices) {
  let maxProfit = 0;

  for (let index = 0; index < prices.length; index++) {
    for (
      let secondIndex = index + 1;
      secondIndex < prices.length;
      secondIndex++
    ) {
      const profit = prices[secondIndex] - prices[index];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}

console.log(stock([7, 1, 5, 3, 6, 4]));
console.log(stock([7, 6, 4, 3, 1]));
