# [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (44.09%) | 7429 | 211 |

<details>
  <summary><strong>Tags</strong></summary>

  [array](https://leetcode.com/tag/array) | [two-pointers](https://leetcode.com/tag/two-pointers) | [binary-search](https://leetcode.com/tag/binary-search)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  facebook

</details>
<br />
<p>Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return the minimal length of a <strong>contiguous subarray</strong> <code>[nums<sub>l</sub>, nums<sub>l+1</sub>, ..., nums<sub>r-1</sub>, nums<sub>r</sub>]</code> of which the sum is greater than or equal to <code>target</code>. If there is no such subarray, return <code>0</code> instead.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><code><strong>Input:</strong> target = 7, nums = [2,3,1,2,4,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The subarray [4,3] has the minimal length under the problem constraint.</code></pre>

<p><strong>Example 2:</strong></p>

<pre><code><strong>Input:</strong> target = 4, nums = [1,4,4]
<strong>Output:</strong> 1</code></pre>

<p><strong>Example 3:</strong></p>

<pre><code><strong>Input:</strong> target = 11, nums = [1,1,1,1,1,1,1,1]
<strong>Output:</strong> 0</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= target &lt;= 10<sup>9</sup></code></li>
  <li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
  <li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution of which the time complexity is <code>O(n log(n))</code>.
