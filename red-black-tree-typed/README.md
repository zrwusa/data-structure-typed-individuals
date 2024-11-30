![NPM](https://img.shields.io/npm/l/red-black-tree-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/red-black-tree-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/red-black-tree-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/red-black-tree-typed)
![npm](https://img.shields.io/npm/v/red-black-tree-typed)

# What

## Brief

This is a standalone Red Black Tree data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i red-black-tree-typed --save
```

### yarn

```bash
yarn add red-black-tree-typed
```


### snippet

#### TS

```typescript
import {RedBlackTree} from 'data-structure-typed';
// /* or if you prefer */ import {RedBlackTree} from 'red-black-tree-typed';

const rbTree = new RedBlackTree<number>();

const idsOrVals = [11, 3, 15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5];
rbTree.addMany(idsOrVals);

const node6 = rbTree.getNode(6);
node6 && rbTree.getHeight(node6)           // 3
node6 && rbTree.getDepth(node6)            // 1
const getNodeById = rbTree.getNodeByKey(10);
getNodeById?.id                             // 10

const getMinNodeByRoot = rbTree.getLeftMost();
getMinNodeByRoot?.id                        // 1

const node15 = rbTree.getNodeByKey(15);
const getMinNodeBySpecificNode = node15 && rbTree.getLeftMost(node15);
getMinNodeBySpecificNode?.id                // 12

const lesserSum = rbTree.lesserSum(10);
lesserSum                                   // 45

const node11 = rbTree.getNodeByKey(11);
node11?.id                                  // 11

const dfs = rbTree.dfs('in');
dfs[0].id                                   // 1 
rbTree.perfectlyBalance();
const bfs = rbTree.bfs('node');
rbTree.isPerfectlyBalanced() && bfs[0].id  // 8 

rbTree.delete(11, true)[0].deleted?.id     // 11
rbTree.isAVLBalanced();                    // true
node15 && rbTree.getHeight(node15)         // 2
rbTree.delete(1, true)[0].deleted?.id      // 1
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 4

rbTree.delete(4, true)[0].deleted?.id      // 4
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 4

rbTree.delete(10, true)[0].deleted?.id     // 10
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(15, true)[0].deleted?.id     // 15
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(5, true)[0].deleted?.id      // 5
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(13, true)[0].deleted?.id     // 13
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(3, true)[0].deleted?.id      // 3
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(8, true)[0].deleted?.id      // 8
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(6, true)[0].deleted?.id      // 6
rbTree.delete(6, true).length              // 0
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 2

rbTree.delete(7, true)[0].deleted?.id      // 7
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 2

rbTree.delete(9, true)[0].deleted?.id      // 9
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 2

rbTree.delete(14, true)[0].deleted?.id     // 14
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 1

rbTree.isAVLBalanced();                    // true
const lastBFSIds = rbTree.BFS();
lastBFSIds[0]                               // 12 

const lastBFSNodes = rbTree.BFS('node');
lastBFSNodes[0].id                          // 12
```

#### JS

```javascript
const {RedBlackTree} = require('data-structure-typed');
// /* or if you prefer */ const {RedBlackTree} = require('red-black-tree-typed');

const rbTree = new RedBlackTree();

const idsOrVals = [11, 3, 15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5];
rbTree.addMany(idsOrVals, idsOrVals);

const node6 = rbTree.getNodeByKey(6);
node6 && rbTree.getHeight(node6)           // 3
node6 && rbTree.getDepth(node6)            // 1
const getNodeById = rbTree.get(10, 'id');
getNodeById?.id                             // 10

const getMinNodeByRoot = rbTree.getLeftMost();
getMinNodeByRoot?.id                        // 1

const node15 = rbTree.getNodeByKey(15);
const getMinNodeBySpecificNode = node15 && rbTree.getLeftMost(node15);
getMinNodeBySpecificNode?.id                // 12

const node11 = rbTree.getNodeByKey(11);
node11?.id                                  // 11

const dfs = rbTree.dfs('in');
dfs[0].id                                   // 1 
rbTree.perfectlyBalance();
const bfs = rbTree.bfs('node');
rbTree.isPerfectlyBalanced() && bfs[0].id  // 8 

rbTree.delete(11, true)[0].deleted?.id     // 11
rbTree.isAVLBalanced();                    // true
node15 && rbTree.getHeight(node15)         // 2
rbTree.delete(1, true)[0].deleted?.id      // 1
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 4

rbTree.delete(4, true)[0].deleted?.id      // 4
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 4

rbTree.delete(10, true)[0].deleted?.id     // 10
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(15, true)[0].deleted?.id     // 15
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(5, true)[0].deleted?.id      // 5
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(13, true)[0].deleted?.id     // 13
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(3, true)[0].deleted?.id      // 3
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(8, true)[0].deleted?.id      // 8
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 3

rbTree.delete(6, true)[0].deleted?.id      // 6
rbTree.delete(6, true).length              // 0
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 2

rbTree.delete(7, true)[0].deleted?.id      // 7
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 2

rbTree.delete(9, true)[0].deleted?.id      // 9
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 2

rbTree.delete(14, true)[0].deleted?.id     // 14
rbTree.isAVLBalanced();                    // true
rbTree.getHeight()                         // 1

rbTree.isAVLBalanced();                    // true
const lastBFSIds = rbTree.bfs();
lastBFSIds[0]                               // 12 

const lastBFSNodes = rbTree.bfs('node');
lastBFSNodes[0].id                          // 12
```

[//]: # (No deletion!!! Start of Example Replace Section)

### Find elements in a range
```typescript
    const bst = new RedBlackTree<number>([10, 5, 15, 3, 7, 12, 18]);
    console.log(bst.search(new Range(5, 10))); // [5, 10, 7]
    console.log(bst.search(new Range(4, 12))); // [5, 10, 12, 7]
    console.log(bst.search(new Range(15, 20))); // [15, 18]
```

### using Red-Black Tree as a price-based index for stock data
```typescript
    // Define the structure of individual stock records
    interface StockRecord {
      price: number; // Stock price (key for indexing)
      symbol: string; // Stock ticker symbol
      volume: number; // Trade volume
    }

    // Simulate stock market data as it might come from an external feed
    const marketStockData: StockRecord[] = [
      { price: 142.5, symbol: 'AAPL', volume: 1000000 },
      { price: 335.2, symbol: 'MSFT', volume: 800000 },
      { price: 3285.04, symbol: 'AMZN', volume: 500000 },
      { price: 267.98, symbol: 'META', volume: 750000 },
      { price: 234.57, symbol: 'GOOGL', volume: 900000 }
    ];

    // Extend the stock record type to include metadata for database usage
    type StockTableRecord = StockRecord & { lastUpdated: Date };

    // Create a Red-Black Tree to index stock records by price
    // Simulates a database index with stock price as the key for quick lookups
    const priceIndex = new RedBlackTree<number, StockTableRecord, StockRecord>(marketStockData, {
      toEntryFn: stockRecord => [
        stockRecord.price, // Use stock price as the key
        {
          ...stockRecord,
          lastUpdated: new Date() // Add a timestamp for when the record was indexed
        }
      ]
    });

    // Query the stock with the highest price
    const highestPricedStock = priceIndex.getRightMost();
    console.log(priceIndex.get(highestPricedStock)?.symbol); // 'AMZN' // Amazon has the highest price

    // Query stocks within a specific price range (200 to 400)
    const stocksInRange = priceIndex.rangeSearch(
      [200, 400], // Price range
      node => priceIndex.get(node)?.symbol // Extract stock symbols for the result
    );
    console.log(stocksInRange); // ['GOOGL', 'MSFT', 'META']
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
<td>Red Black Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/RedBlackTree.html"><span>RedBlackTree</span></a></td>
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
    <td>RedBlackTree&lt;K, V&gt;</td>
    <td>map&lt;K, V&gt;</td>
    <td>TreeMap&lt;K, V&gt;</td>
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




