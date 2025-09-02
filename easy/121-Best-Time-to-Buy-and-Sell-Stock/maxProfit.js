/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //init minPrice and maxProfit
  let minPrice = Infinity
  let maxProfit = 0

  //loop through prices
  for(let i = 0; i < prices.length; i++){
    if(prices[i] < minPrice){
        minPrice = prices[i]
    }
    //compute profit with current price
    let profit = prices[i] - minPrice

    //update current profit if higher than previous
    if(profit > maxProfit){
        maxProfit = profit
    }
  }
  //return maxProfit
  return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7,6,4,3,1])); // Output: 0