# [1480]. Running Sum of 1d Array

## Problem Statement

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

**Difficulty:** Easy 
**Topics:** Array, Prefix Sum
**LeetCode Link:** https://leetcode.com/problems/running-sum-of-1d-array/description/

## My Thought Process

### Initial Analysis

- What is the problem asking?
   - Each index contains the sum of all elements up to that index
- What are the constraints?
   - Inputs can be large, avoid nested loops
   - Values can be negative, addition must handle all integers
- What's my first intuition?
   - Use a prefix sum so each new value reuses previous work instead of recomputing sums 

### Approach Exploration

1. **Brute Force Approach**
   For every index i sum all elements from 0 to i using a loop
   - Time: O(n^2)
   - Space: O(1)
   - Why this works but isn't optimal
      - Each prefix sum is recomputed from scractch, causing repeated work

2. **Optimized Approach**
   - Key insight that led to optimization
      - Traverse the array once and update each element using previous cumulative sum
   - Time: O(n)
   - Space: O(1)

### Edge Cases Considered

- Empty Array
- Single element
- Negative numbers
