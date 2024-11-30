![NPM](https://img.shields.io/npm/l/avl-tree-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/avl-tree-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/avl-tree-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/avl-tree-typed)
![npm](https://img.shields.io/npm/v/avl-tree-typed)

# What

## Brief

This is a standalone AVL Tree data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i avl-tree-typed --save
```

### yarn

```bash
yarn add avl-tree-typed
```

### snippet

#### TS

```typescript
import {AVLTree, AVLTreeNode} from 'data-structure-typed';
// /* or if you prefer */ import {AVLTree} from 'avl-tree-typed';

const avlTree = new AVLTree<AVLTreeNode<number>>();

const idsOrVals = [11, 3, 15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5];
avlTree.addMany(idsOrVals, idsOrVals);

const node6 = avlTree.get(6);
node6 && avlTree.getHeight(node6)           // 3
node6 && avlTree.getDepth(node6)            // 1
const getNodeById = avlTree.get(10, 'id');
getNodeById?.id                             // 10

const getMinNodeByRoot = avlTree.getLeftMost();
getMinNodeByRoot?.id                        // 1

const node15 = avlTree.get(15);
const getMinNodeBySpecificNode = node15 && avlTree.getLeftMost(node15);
getMinNodeBySpecificNode?.id                // 12

const subTreeSum = node15 && avlTree.subTreeSum(node15);
subTreeSum                                  // 70

const lesserSum = avlTree.lesserSum(10);
lesserSum                                   // 45

const node11 = avlTree.get(11);
node11?.id                                  // 11

const dfs = avlTree.DFS('in', 'node');
dfs[0].id                                   // 1 
avlTree.perfectlyBalance();
const bfs = avlTree.BFS('node');
avlTree.isPerfectlyBalanced() && bfs[0].id  // 8 

avlTree.remove(11, true)[0].deleted?.id     // 11
avlTree.isAVLBalanced();                    // true
node15 && avlTree.getHeight(node15)         // 2
avlTree.remove(1, true)[0].deleted?.id      // 1
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 4

avlTree.remove(4, true)[0].deleted?.id      // 4
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 4

avlTree.remove(10, true)[0].deleted?.id     // 10
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(15, true)[0].deleted?.id     // 15
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(5, true)[0].deleted?.id      // 5
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(13, true)[0].deleted?.id     // 13
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(3, true)[0].deleted?.id      // 3
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(8, true)[0].deleted?.id      // 8
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(6, true)[0].deleted?.id      // 6
avlTree.remove(6, true).length              // 0
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 2

avlTree.remove(7, true)[0].deleted?.id      // 7
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 2

avlTree.remove(9, true)[0].deleted?.id      // 9
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 2

avlTree.remove(14, true)[0].deleted?.id     // 14
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 1

avlTree.isAVLBalanced();                    // true
const lastBFSIds = avlTree.BFS();
lastBFSIds[0]                               // 12 

const lastBFSNodes = avlTree.BFS('node');
lastBFSNodes[0].id                          // 12
```

#### JS

```javascript
const {AVLTree} = require('data-structure-typed');
// /* or if you prefer */ const {AVLTree} = require('avl-tree-typed');

const avlTree = new AVLTree();

const idsOrVals = [11, 3, 15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5];
avlTree.addMany(idsOrVals, idsOrVals);

const node6 = avlTree.get(6);
node6 && avlTree.getHeight(node6)           // 3
node6 && avlTree.getDepth(node6)            // 1
const getNodeById = avlTree.get(10, 'id');
getNodeById?.id                             // 10

const getMinNodeByRoot = avlTree.getLeftMost();
getMinNodeByRoot?.id                        // 1

const node15 = avlTree.get(15);
const getMinNodeBySpecificNode = node15 && avlTree.getLeftMost(node15);
getMinNodeBySpecificNode?.id                // 12

const subTreeSum = node15 && avlTree.subTreeSum(node15);
subTreeSum                                  // 70

const lesserSum = avlTree.lesserSum(10);
lesserSum                                   // 45

const node11 = avlTree.get(11);
node11?.id                                  // 11

const dfs = avlTree.DFS('in', 'node');
dfs[0].id                                   // 1 
avlTree.perfectlyBalance();
const bfs = avlTree.BFS('node');
avlTree.isPerfectlyBalanced() && bfs[0].id  // 8 

avlTree.remove(11, true)[0].deleted?.id     // 11
avlTree.isAVLBalanced();                    // true
node15 && avlTree.getHeight(node15)         // 2
avlTree.remove(1, true)[0].deleted?.id      // 1
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 4

avlTree.remove(4, true)[0].deleted?.id      // 4
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 4

avlTree.remove(10, true)[0].deleted?.id     // 10
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(15, true)[0].deleted?.id     // 15
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(5, true)[0].deleted?.id      // 5
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(13, true)[0].deleted?.id     // 13
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(3, true)[0].deleted?.id      // 3
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(8, true)[0].deleted?.id      // 8
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 3

avlTree.remove(6, true)[0].deleted?.id      // 6
avlTree.remove(6, true).length              // 0
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 2

avlTree.remove(7, true)[0].deleted?.id      // 7
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 2

avlTree.remove(9, true)[0].deleted?.id      // 9
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 2

avlTree.remove(14, true)[0].deleted?.id     // 14
avlTree.isAVLBalanced();                    // true
avlTree.getHeight()                         // 1

avlTree.isAVLBalanced();                    // true
const lastBFSIds = avlTree.BFS();
lastBFSIds[0]                               // 12 

const lastBFSNodes = avlTree.BFS('node');
lastBFSNodes[0].id                          // 12
```

[//]: # (No deletion!!! Start of Example Replace Section)


[//]: # (No deletion!!! End of Example Replace Section)

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
<td>AVL Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/AVLTree.html"><span>AVLTree</span></a></td>
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
    <td>AVLTree&lt;K, V&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
 
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>avl-tree</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>10,000 add randomly</td><td>31.32</td><td>31.93</td><td>3.67e-4</td></tr><tr><td>10,000 add & delete randomly</td><td>70.90</td><td>14.10</td><td>0.00</td></tr><tr><td>10,000 addMany</td><td>40.58</td><td>24.64</td><td>4.87e-4</td></tr><tr><td>10,000 get</td><td>27.31</td><td>36.62</td><td>2.00e-4</td></tr></table></div>
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





