function stock(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let index = 1; index < prices.length; index++) {
    minPrice = Math.min(minPrice, prices[index]);
    const currentProfit = prices[index] - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
  }

  return maxProfit;
}

console.log(stock([7, 1, 5, 3, 6, 4]));
console.log(stock([7, 6, 4, 3, 1]));
