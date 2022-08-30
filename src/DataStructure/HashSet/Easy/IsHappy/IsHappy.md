# [Happy Number](https://leetcode.com/problems/happy-number/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Easy (53.93%) | 6533 | 814 |

<details>
  <summary><strong>Tags</strong></summary>

  [hash-table](https://leetcode.com/tag/hash-table) | [math](https://leetcode.com/tag/math)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  airbnb | twitter | uber

</details>
<br />
<p>Write an algorithm to determine if a number <code>n</code> is happy.</p>

<p>A <strong>happy number</strong> is a number defined by the following process:</p>

<ul>
  <li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li>
  <li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li>
  <li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li>
</ul>

<p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><code><strong>Input:</strong> n = 19
<strong>Output:</strong> true
<strong>Explanation:</strong>
1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1</code></pre>

<p><strong>Example 2:</strong></p>

<pre><code><strong>Input:</strong> n = 2
<strong>Output:</strong> false</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

