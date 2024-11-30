![NPM](https://img.shields.io/npm/l/bst-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/bst-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/bst-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/bst-typed)
![npm](https://img.shields.io/npm/v/bst-typed)

# What

## Brief

This is a standalone BST (Binary Search Tree) data structure from the data-structure-typed collection. If you wish to
access more data structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i bst-typed --save
```

### yarn

```bash
yarn add bst-typed
```


### snippet

#### TS

```typescript
import {BST, BSTNode} from 'data-structure-typed';
// /* or if you prefer */ import {BST, BSTNode} from 'bst-typed';

const bst = new BST();
bst instanceof BST;                    // true
bst.add(11);
bst.add(3);
const idsAndValues = [15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5];
bst.addMany(idsAndValues);
bst.root instanceof BSTNode;           // true

if (bst.root) bst.root.id;             // 11

bst.size;                              // 16

bst.has(6);                            // true

const node6 = bst.get(6);
node6 && bst.getHeight(6);             // 2
node6 && bst.getDepth(6);              // 3

const nodeId10 = bst.get(10);
nodeId10?.id;                          // 10

const nodeVal9 = bst.get(9, 'val');
nodeVal9?.id;                          // 9


const leftMost = bst.getLeftMost();
leftMost?.id;                          // 1

const node15 = bst.get(15);
const minNodeBySpecificNode = node15 && bst.getLeftMost(node15);
minNodeBySpecificNode?.id;             // 12

const subTreeSum = node15 && bst.subTreeSum(15);
subTreeSum;                            // 70

const lesserSum = bst.lesserSum(10);
lesserSum;                             // 45

node15 instanceof BSTNode;             // true

const node11 = bst.get(11);
node11 instanceof BSTNode;             // true

const dfsInorderNodes = bst.DFS('in', 'node');
dfsInorderNodes[0].id;                 // 1
dfsInorderNodes[dfsInorderNodes.length - 1].id;            // 16

bst.perfectlyBalance();
bst.isPerfectlyBalanced();                                  // true

const bfsNodesAfterBalanced = bst.BFS('node');
bfsNodesAfterBalanced[0].id;                                // 8);
bfsNodesAfterBalanced[bfsNodesAfterBalanced.length - 1].id; // 16

const removed11 = bst.remove(11, true);
removed11 instanceof Array;                                 // true


if (removed11[0].deleted) removed11[0].deleted.id;          // 11

bst.isAVLBalanced();                                        // true

bst.getHeight(15);                                          // 1

const removed1 = bst.remove(1, true);
removed1 instanceof Array; // true

if (removed1[0].deleted) removed1[0].deleted.id;            // 1

bst.isAVLBalanced();                                        // true

bst.getHeight();                                            // 4

const removed4 = bst.remove(4, true);
removed4 instanceof Array;                                   // true

if (removed4[0].deleted) removed4[0].deleted.id;            // 4
bst.isAVLBalanced();                                        // true
bst.getHeight();                                            // 4

const removed10 = bst.remove(10, true);

if (removed10[0].deleted) removed10[0].deleted.id;           // 10
bst.isAVLBalanced();                                         // false
bst.getHeight();                                             // 4

const removed15 = bst.remove(15, true);

if (removed15[0].deleted) removed15[0].deleted.id;           // 15

bst.isAVLBalanced();                                         // true
bst.getHeight();                                             // 3

const removed5 = bst.remove(5, true);

if (removed5[0].deleted) removed5[0].deleted.id;              // 5

bst.isAVLBalanced();                                          // true
bst.getHeight();                                              // 3

const removed13 = bst.remove(13, true);
if (removed13[0].deleted) removed13[0].deleted.id;            // 13
bst.isAVLBalanced();                                          // true
bst.getHeight();                                              // 3

const removed3 = bst.remove(3, true);
if (removed3[0].deleted) removed3[0].deleted.id;               // 3
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 3

const removed8 = bst.remove(8, true);
if (removed8[0].deleted) removed8[0].deleted.id;               // 8
bst.isAVLBalanced();                                           // true
bst.getHeight();                                               // 3

const removed6 = bst.remove(6, true);
if (removed6[0].deleted) removed6[0].deleted.id;               // 6
bst.remove(6, true).length;                                    // 0
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 3

const removed7 = bst.remove(7, true);
if (removed7[0].deleted) removed7[0].deleted.id;               // 7
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 3

const removed9 = bst.remove(9, true);
if (removed9[0].deleted) removed9[0].deleted.id;               // 9
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 3

const removed14 = bst.remove(14, true);
if (removed14[0].deleted) removed14[0].deleted.id;             // 14
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 2

bst.isAVLBalanced();                                           // false

const bfsIDs = bst.BFS();
bfsIDs[0];                                                     // 2
bfsIDs[1];                                                     // 12
bfsIDs[2];                                                     // 16

const bfsNodes = bst.BFS('node');
bfsNodes[0].id;                                                // 2
bfsNodes[1].id;                                                // 12
bfsNodes[2].id;                                                // 16
```

#### JS

```javascript
const {BST, BSTNode} = require('data-structure-typed');
// /* or if you prefer */ const {BST, BSTNode} = require('bst-typed');

const bst = new BST();
bst instanceof BST;                    // true
bst.add(11);
bst.add(3);
const idsAndValues = [15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5];
bst.addMany(idsAndValues);
bst.root instanceof BSTNode;           // true

if (bst.root) bst.root.id;             // 11

bst.size;                              // 16

bst.has(6);                            // true

const node6 = bst.get(6);
node6 && bst.getHeight(6);             // 2
node6 && bst.getDepth(6);              // 3

const nodeId10 = bst.get(10);
nodeId10?.id;                          // 10

const nodeVal9 = bst.get(9, 'val');
nodeVal9?.id;                          // 9


const leftMost = bst.getLeftMost();
leftMost?.id;                          // 1

const node15 = bst.get(15);
const minNodeBySpecificNode = node15 && bst.getLeftMost(node15);
minNodeBySpecificNode?.id;             // 12

const subTreeSum = node15 && bst.subTreeSum(15);
subTreeSum;                            // 70

const lesserSum = bst.lesserSum(10);
lesserSum;                             // 45

node15 instanceof BSTNode;             // true

const node11 = bst.get(11);
node11 instanceof BSTNode;             // true

const dfsInorderNodes = bst.DFS('in', 'node');
dfsInorderNodes[0].id;                 // 1
dfsInorderNodes[dfsInorderNodes.length - 1].id;            // 16

bst.perfectlyBalance();
bst.isPerfectlyBalanced();                                  // true

const bfsNodesAfterBalanced = bst.BFS('node');
bfsNodesAfterBalanced[0].id;                                // 8);
bfsNodesAfterBalanced[bfsNodesAfterBalanced.length - 1].id; // 16

const removed11 = bst.remove(11, true);
removed11 instanceof Array;                                 // true


if (removed11[0].deleted) removed11[0].deleted.id;          // 11

bst.isAVLBalanced();                                        // true

bst.getHeight(15);                                          // 1

const removed1 = bst.remove(1, true);
removed1 instanceof Array; // true

if (removed1[0].deleted) removed1[0].deleted.id;            // 1

bst.isAVLBalanced();                                        // true

bst.getHeight();                                            // 4

const removed4 = bst.remove(4, true);
removed4 instanceof Array;                                   // true

if (removed4[0].deleted) removed4[0].deleted.id;            // 4
bst.isAVLBalanced();                                        // true
bst.getHeight();                                            // 4

const removed10 = bst.remove(10, true);

if (removed10[0].deleted) removed10[0].deleted.id;           // 10
bst.isAVLBalanced();                                         // false
bst.getHeight();                                             // 4

const removed15 = bst.remove(15, true);

if (removed15[0].deleted) removed15[0].deleted.id;           // 15

bst.isAVLBalanced();                                         // true
bst.getHeight();                                             // 3

const removed5 = bst.remove(5, true);

if (removed5[0].deleted) removed5[0].deleted.id;              // 5

bst.isAVLBalanced();                                          // true
bst.getHeight();                                              // 3

const removed13 = bst.remove(13, true);
if (removed13[0].deleted) removed13[0].deleted.id;            // 13
bst.isAVLBalanced();                                          // true
bst.getHeight();                                              // 3

const removed3 = bst.remove(3, true);
if (removed3[0].deleted) removed3[0].deleted.id;               // 3
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 3

const removed8 = bst.remove(8, true);
if (removed8[0].deleted) removed8[0].deleted.id;               // 8
bst.isAVLBalanced();                                           // true
bst.getHeight();                                               // 3

const removed6 = bst.remove(6, true);
if (removed6[0].deleted) removed6[0].deleted.id;               // 6
bst.remove(6, true).length;                                    // 0
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 3

const removed7 = bst.remove(7, true);
if (removed7[0].deleted) removed7[0].deleted.id;               // 7
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 3

const removed9 = bst.remove(9, true);
if (removed9[0].deleted) removed9[0].deleted.id;               // 9
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 3

const removed14 = bst.remove(14, true);
if (removed14[0].deleted) removed14[0].deleted.id;             // 14
bst.isAVLBalanced();                                           // false
bst.getHeight();                                               // 2

bst.isAVLBalanced();                                           // false

const bfsIDs = bst.BFS();
bfsIDs[0];                                                     // 2
bfsIDs[1];                                                     // 12
bfsIDs[2];                                                     // 16

const bfsNodes = bst.BFS('node');
bfsNodes[0].id;                                                // 2
bfsNodes[1].id;                                                // 12
bfsNodes[2].id;                                                // 16
```

[//]: # (No deletion!!! Start of Example Replace Section)

### Merge 3 sorted datasets
```typescript
    const dataset1 = new BST<number, string>([
      [1, 'A'],
      [7, 'G']
    ]);
    const dataset2 = [
      [2, 'B'],
      [6, 'F']
    ];
    const dataset3 = new BST<number, string>([
      [3, 'C'],
      [5, 'E'],
      [4, 'D']
    ]);

    // Merge datasets into a single BinarySearchTree
    const merged = new BST<number, string>(dataset1);
    merged.addMany(dataset2);
    merged.merge(dataset3);

    // Verify merged dataset is in sorted order
    console.log([...merged.values()]); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
```

### Find elements in a range
```typescript
    const bst = new BST<number>([10, 5, 15, 3, 7, 12, 18]);
    console.log(bst.search(new Range(5, 10))); // [10, 5, 7]
    console.log(bst.rangeSearch([4, 12], node => node.key.toString())); // ['10', '12', '5', '7']
    console.log(bst.search(new Range(4, 12, true, false))); // [10, 5, 7]
    console.log(bst.rangeSearch([15, 20])); // [15, 18]
    console.log(bst.search(new Range(15, 20, false))); // [18]
```

### Find lowest common ancestor
```typescript
    const bst = new BST<number>([20, 10, 30, 5, 15, 25, 35, 3, 7, 12, 18]);

    // LCA helper function
    const findLCA = (num1: number, num2: number): number | undefined => {
      const path1 = bst.getPathToRoot(num1);
      const path2 = bst.getPathToRoot(num2);
      // Find the first common ancestor
      return findFirstCommon(path1, path2);
    };

    function findFirstCommon(arr1: number[], arr2: number[]): number | undefined {
      for (const num of arr1) {
        if (arr2.indexOf(num) !== -1) {
          return num;
        }
      }
      return undefined;
    }

    // Assertions
    console.log(findLCA(3, 10)); // 7
    console.log(findLCA(5, 35)); // 15
    console.log(findLCA(20, 30)); // 25
```

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
<td>Binary Search Tree (BST)</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/BST.html"><span>BST</span></a></td>
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
    <td>BST&lt;K, V&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>

  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>bst</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>10,000 add randomly</td><td>31.59</td><td>31.66</td><td>2.74e-4</td></tr><tr><td>10,000 add & delete randomly</td><td>74.56</td><td>13.41</td><td>8.32e-4</td></tr><tr><td>10,000 addMany</td><td>29.16</td><td>34.30</td><td>0.00</td></tr><tr><td>10,000 get</td><td>29.24</td><td>34.21</td><td>0.00</td></tr></table></div>
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



