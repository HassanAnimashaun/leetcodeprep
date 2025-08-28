# [217]. Contains Duplicates

## Problem Statement

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Difficulty:** Easy
**Topics:** Array, Hash Table, Sorting
**LeetCode Link:** https://leetcode.com/problems/contains-duplicate/description/

---

## My Thought Process

Iterate through the array using an empty array storying values that haven't seen into the original array

### Initial Analysis

- Problem understanding
  array of integers and a target integer.
- Constraints
  Data sets can be extremly large
- First intuition
  nested loops (brute force) would solve it but isn’t optimal for large arrays.

### Approach Exploration

1. **Brute Force Approach**

   - Time: O(n^2)
   - Space: O(1)
   - Why it works but isn't optimal
     checks and compares each value to find a dupe, too slow for larg arrays 

2. **Optimized Approach**
   - Key insight for optimization
      *The use of Set stores numbers as you iterate
      *If the number belongs to the set return true 
      *Else place into set
   - Time: O(n)
   - Space: O(n)

### Edge Cases Considered

- Empty input
    false
- Single element
    false
- Duplicates
    True 
- Negative numbers 
    Set includes signs 
