# [121]. Best Time to Buy and Sell Stock

## Problem Statement

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

**Difficulty:** Easy
**Topics:** Array, Dynamic Programming
**LeetCode Link:** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

## My Thought Process

Compare each day’s price with potential future sell prices to find the max profit.
Track the minimum price so far and compute profit on each day.

### Initial Analysis

- What is the problem asking?
  \*\*Find the maxProfit that can be made after the initial buy price
- What are the constraints?
  **We can't sell before we buy
  **prices must be positive
  \*\*if we can't achieve a max profit return 0
- What's my first intuition?
  Go through each day to find the max profit we can obtain

### Approach Exploration

1. **Brute Force Approach**

   - Time: O(n^2)
   - Space: O(n^2)
   - Why this works but isn't optimal

2. **Optimized Approach**
   - Key insight that led to optimization
     Track minPrice (smallest price so far) and maxProfit while iterating.
     For each price:
     Update minPrice if the current price is lower.
     Compute profit = currentPrice - minPrice.
     Update maxProfit if profit is larger.
    - Time: O(n)
    - Space: O(1)

### Edge Cases Considered

- Empty input
    return 0
- Single element
    return 0
- All same elements
    return 0
- etc.
