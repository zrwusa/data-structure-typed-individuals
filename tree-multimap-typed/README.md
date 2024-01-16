![NPM](https://img.shields.io/npm/l/tree-multimap-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/tree-multimap-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tree-multimap-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/tree-multimap-typed)
![npm](https://img.shields.io/npm/v/tree-multimap-typed)

# What

## Brief

This is a standalone Tree Multiset data structure from the data-structure-typed collection. If you wish to access more
data structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i tree-multimap-typed --save
```

### yarn

```bash
yarn add tree-multimap-typed
```

### methods

![](https://github.com/zrwusa/assets/blob/master/images/data-structure-typed/methods-8bit/tree-multimap.png?raw=true)

### snippet

#### TS

```typescript

```

#### JS

```javascript

```


## API docs & Examples

[API Docs](https://data-structure-typed-docs.vercel.app)

[Live Examples](https://vivid-algorithm.vercel.app)

<a href="https://github.com/zrwusa/vivid-algorithm" target="_blank">Examples Repository</a>

## Data Structures

<table>
<thead>
<tr>
<th>Data Structure</th>
<th>Unit Test</th>
<th>Performance Test</th>
<th>API Docs</th>
</tr>
</thead>
<tbody>

<tr>
<td>Tree Multimap</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/TreeMultimap.html"><span>TreeMultimap</span></a></td>
</tr>

</tbody>
</table>

## Standard library data structure comparison

<table>
  <thead>
  <tr>
    <th>Data Structure Typed</th>
    <th>C++ STL</th>
    <th>java.util</th>
    <th>Python collections</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>TreeMultimap&lt;K, V&gt;</td>
    <td>multimap&lt;K, V&gt;</td>
    <td>-</td>
    <td>-</td>
  </tr>
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>rb-tree</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>100,000 add</td><td>85.85</td><td>11.65</td><td>0.00</td></tr><tr><td>100,000 add & delete randomly</td><td>211.54</td><td>4.73</td><td>0.00</td></tr><tr><td>100,000 getNode</td><td>37.92</td><td>26.37</td><td>1.65e-4</td></tr></table></div>
    </div>

[//]: # (No deletion!!! End of Replace Section)

## Built-in classic algorithms

<table>
  <thead>
  <tr>
    <th>Algorithm</th>
    <th>Function Description</th>
    <th>Iteration Type</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Binary Tree DFS</td>
    <td>Traverse a binary tree in a depth-first manner, starting from the root node, first visiting the left subtree,
      and then the right subtree, using recursion.
    </td>
    <td>Recursion + Iteration</td>
  </tr>
  <tr>
    <td>Binary Tree BFS</td>
    <td>Traverse a binary tree in a breadth-first manner, starting from the root node, visiting nodes level by level
      from left to right.
    </td>
    <td>Iteration</td>
  </tr>

  <tr>
    <td>Binary Tree Morris</td>
    <td>Morris traversal is an in-order traversal algorithm for binary trees with O(1) space complexity. It allows tree
      traversal without additional stack or recursion.
    </td>
    <td>Iteration</td>
  </tr>
  
  </tbody>
</table>

## Software Engineering Design Standards
<table>
    <tr>
        <th>Principle</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Practicality</td>
        <td>Follows ES6 and ESNext standards, offering unified and considerate optional parameters, and simplifies method names.</td>
    </tr>
    <tr>
        <td>Extensibility</td>
        <td>Adheres to OOP (Object-Oriented Programming) principles, allowing inheritance for all data structures.</td>
    </tr>
    <tr>
        <td>Modularization</td>
        <td>Includes data structure modularization and independent NPM packages.</td>
    </tr>
    <tr>
        <td>Efficiency</td>
        <td>All methods provide time and space complexity, comparable to native JS performance.</td>
    </tr>
    <tr>
        <td>Maintainability</td>
        <td>Follows open-source community development standards, complete documentation, continuous integration, and adheres to TDD (Test-Driven Development) patterns.</td>
    </tr>
    <tr>
        <td>Testability</td>
        <td>Automated and customized unit testing, performance testing, and integration testing.</td>
    </tr>
    <tr>
        <td>Portability</td>
        <td>Plans for porting to Java, Python, and C++, currently achieved to 80%.</td>
    </tr>
    <tr>
        <td>Reusability</td>
        <td>Fully decoupled, minimized side effects, and adheres to OOP.</td>
    </tr>
    <tr>
        <td>Security</td>
        <td>Carefully designed security for member variables and methods. Read-write separation. Data structure software does not need to consider other security aspects.</td>
    </tr>
    <tr>
        <td>Scalability</td>
        <td>Data structure software does not involve load issues.</td>
    </tr>
</table>




