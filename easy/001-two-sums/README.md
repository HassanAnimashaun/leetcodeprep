# [1]. Two Sums

## Problem Statement

Given an array of integers **nums** and an integer **target***, return the indices of the two numbers such that they add up to **target**.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Difficulty:** Easy
**Topics:** Array, Hash Table
**LeetCode Link:** https://leetcode.com/problems/two-sum/description/

---

## My Thought Process

We are looking for two numbers in the array that sum up to the target.
Initially, I thought of looping through every possible pair (i, j) and checking if their sum equals the target. If it does, return their indices.

### Initial Analysis

- Problem understanding
  array of integers and a target integer.
- Constraints
  exactly one solution exists, can’t use the same element twice.
- First intuition
  nested loops (brute force) would solve it but isn’t optimal for large arrays.

### Approach Exploration

1. **Brute Force Approach**

   - Time: O(n^2)
   - Space: O(1)
   - Why it works but isn't optimal
     checks every combination to find the target sum but is too slow for larger arrays

2. **Optimized Approach**
   - Key insight for optimization
    *While iterating store each number in a hash map as key and its index as value 
    *For each **num** check if **target - num** exisits in the map
    *If it exist return indcies immediately
   - Time: O(n)
   - Space: O(n)

### Edge Cases Considered

- Empty input
    Empty list
- Single element
    Empty list
- Duplicates
    Hash map handles duplicates natuarlly 
- Negative numbers 
    Hash maps stores numbers as keys regardless of signs
