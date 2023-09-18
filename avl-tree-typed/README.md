# What
## Brief
This is a standalone AVL Tree data structure from the data-structure-typed collection. If you wish to access more data structures or advanced features, you can transition to directly installing the complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package


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
### methods
![](https://github.com/zrwusa/assets/blob/master/images/data-structure-typed/methods-8bit/avl-tree.png?raw=true)

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


## API docs & Examples

[API Docs](https://data-structure-typed-docs.vercel.app)

[Live Examples](https://data-structure-typed-examples.vercel.app)

<a href="https://github.com/zrwusa/data-structure-typed-examples" target="_blank">Examples Repository</a>

## Data Structures

<table>
<thead>
<tr>
<th>Data Structure</th>
<th>Unit Test</th>
<th>Performance Test</th>
<th>API Documentation</th>
<th>Implemented</th>
</tr>
</thead>
<tbody>
<tr>
<td>Binary Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""/>
</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""/>
</td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/BinaryTree.html"><span>Binary Tree</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Binary Search Tree (BST)</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/BST.html"><span>BST</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>AVL Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/AVLTree.html"><span>AVLTree</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Tree Multiset</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/TreeMultiset.html"><span>TreeMultiset</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Segment Tree</td>
<td></td>
<td></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SegmentTree.html"><span>SegmentTree</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Binary Indexed Tree</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/BinaryIndexedTree.html"><span>BinaryIndexedTree</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/AbstractGraph.html"><span>AbstractGraph</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Directed Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/DirectedGraph.html"><span>DirectedGraph</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Undirected Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/UndirectedGraph.html"><span>UndirectedGraph</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SinglyLinkedList.html"><span>SinglyLinkedList</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Singly Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SinglyLinkedList.html"><span>SinglyLinkedList</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Doubly Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/DoublyLinkedList.html"><span>DoublyLinkedList</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Queue.html"><span>Queue</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Object Deque</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/ObjectDeque.html"><span>ObjectDeque</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Array Deque</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/ArrayDeque.html"><span>ArrayDeque</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Stack</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Stack.html"><span>Stack</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>

[//]: # (<tr>)

[//]: # (<td>Hash</td>)

[//]: # (<td></td>)

[//]: # (<td></td>)

[//]: # (<td><a href="https://data-structure-typed-docs.vercel.app/classes/HashTable.html"><span>HashTable</span></a></td>)

[//]: # (<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>)

[//]: # (</tr>)
<tr>
<td>Coordinate Set</td>
<td></td>
<td></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/CoordinateSet.html"><span>CoordinateSet</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Coordinate Map</td>
<td></td>
<td></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/CoordinateMap.html"><span>CoordinateMap</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Heap</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Heap.html"><span>Heap</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/PriorityQueue.html"><span>PriorityQueue</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Max Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/MaxPriorityQueue.html"><span>MaxPriorityQueue</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Min Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/MinPriorityQueue.html"><span>MinPriorityQueue</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
<tr>
<td>Trie</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Trie.html"><span>Trie</span></a></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
</tr>
</tbody>
</table>


# Why

## Complexities

### performance of Big O

<table>
<thead>
<tr>
<th>Big O Notation</th>
<th>Type</th>
<th>Computations for 10 elements</th>
<th>Computations for 100 elements</th>
<th>Computations for 1000 elements</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>O(1)</strong></td>
<td>Constant</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td><strong>O(log N)</strong></td>
<td>Logarithmic</td>
<td>3</td>
<td>6</td>
<td>9</td>
</tr>
<tr>
<td><strong>O(N)</strong></td>
<td>Linear</td>
<td>10</td>
<td>100</td>
<td>1000</td>
</tr>
<tr>
<td><strong>O(N log N)</strong></td>
<td>n log(n)</td>
<td>30</td>
<td>600</td>
<td>9000</td>
</tr>
<tr>
<td><strong>O(N^2)</strong></td>
<td>Quadratic</td>
<td>100</td>
<td>10000</td>
<td>1000000</td>
</tr>
<tr>
<td><strong>O(2^N)</strong></td>
<td>Exponential</td>
<td>1024</td>
<td>1.26e+29</td>
<td>1.07e+301</td>
</tr>
<tr>
<td><strong>O(N!)</strong></td>
<td>Factorial</td>
<td>3628800</td>
<td>9.3e+157</td>
<td>4.02e+2567</td>
</tr>
</tbody>
</table>

### Data Structure Complexity

<table>
<thead>
<tr>
<th>Data Structure</th>
<th>Access</th>
<th>Search</th>
<th>Insertion</th>
<th>Deletion</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Array</strong></td>
<td>1</td>
<td>n</td>
<td>n</td>
<td>n</td>
<td></td>
</tr>
<tr>
<td><strong>Stack</strong></td>
<td>n</td>
<td>n</td>
<td>1</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td><strong>Queue</strong></td>
<td>n</td>
<td>n</td>
<td>1</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td><strong>Linked List</strong></td>
<td>n</td>
<td>n</td>
<td>1</td>
<td>n</td>
<td></td>
</tr>
<tr>
<td><strong>Hash Table</strong></td>
<td>-</td>
<td>n</td>
<td>n</td>
<td>n</td>
<td>In case of perfect hash function costs would be O(1)</td>
</tr>
<tr>
<td><strong>Binary Search Tree</strong></td>
<td>n</td>
<td>n</td>
<td>n</td>
<td>n</td>
<td>In case of balanced tree costs would be O(log(n))</td>
</tr>
<tr>
<td><strong>B-Tree</strong></td>
<td>log(n)</td>
<td>log(n)</td>
<td>log(n)</td>
<td>log(n)</td>
<td></td>
</tr>
<tr>
<td><strong>Red-Black Tree</strong></td>
<td>log(n)</td>
<td>log(n)</td>
<td>log(n)</td>
<td>log(n)</td>
<td></td>
</tr>
<tr>
<td><strong>AVL Tree</strong></td>
<td>log(n)</td>
<td>log(n)</td>
<td>log(n)</td>
<td>log(n)</td>
<td></td>
</tr>
<tr>
<td><strong>Bloom Filter</strong></td>
<td>-</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>False positives are possible while searching</td>
</tr>
</tbody>
</table>

### Sorting Complexity

<table>
<thead>
<tr>
<th>Name</th>
<th>Best</th>
<th>Average</th>
<th>Worst</th>
<th>Memory</th>
<th>Stable</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Bubble sort</strong></td>
<td>n</td>
<td>n<sup>2</sup></td>
<td>n<sup>2</sup></td>
<td>1</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td><strong>Insertion sort</strong></td>
<td>n</td>
<td>n<sup>2</sup></td>
<td>n<sup>2</sup></td>
<td>1</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td><strong>Selection sort</strong></td>
<td>n<sup>2</sup></td>
<td>n<sup>2</sup></td>
<td>n<sup>2</sup></td>
<td>1</td>
<td>No</td>
<td></td>
</tr>
<tr>
<td><strong>Heap sort</strong></td>
<td>n&nbsp;log(n)</td>
<td>n&nbsp;log(n)</td>
<td>n&nbsp;log(n)</td>
<td>1</td>
<td>No</td>
<td></td>
</tr>
<tr>
<td><strong>Merge sort</strong></td>
<td>n&nbsp;log(n)</td>
<td>n&nbsp;log(n)</td>
<td>n&nbsp;log(n)</td>
<td>n</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td><strong>Quick sort</strong></td>
<td>n&nbsp;log(n)</td>
<td>n&nbsp;log(n)</td>
<td>n<sup>2</sup></td>
<td>log(n)</td>
<td>No</td>
<td>Quicksort is usually done in-place with O(log(n)) stack space</td>
</tr>
<tr>
<td><strong>Shell sort</strong></td>
<td>n&nbsp;log(n)</td>
<td>depends on gap sequence</td>
<td>n&nbsp;(log(n))<sup>2</sup></td>
<td>1</td>
<td>No</td>
<td></td>
</tr>
<tr>
<td><strong>Counting sort</strong></td>
<td>n + r</td>
<td>n + r</td>
<td>n + r</td>
<td>n + r</td>
<td>Yes</td>
<td>r - biggest number in array</td>
</tr>
<tr>
<td><strong>Radix sort</strong></td>
<td>n * k</td>
<td>n * k</td>
<td>n * k</td>
<td>n + k</td>
<td>Yes</td>
<td>k - length of longest key</td>
</tr>
</tbody>
</table>

![overview diagram](https://github.com/zrwusa/assets/blob/master/images/data-structure-typed/assets/overview-diagram-of-data-structures.png)

![complexities](https://github.com/zrwusa/assets/blob/master/images/data-structure-typed/assets/complexities-diff.jpg)

![complexities of data structures](https://github.com/zrwusa/assets/blob/master/images/data-structure-typed/assets/data-structure-complexities.jpg)






