![NPM](https://img.shields.io/npm/l/graph-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/graph-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/graph-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/graph-typed)
![npm](https://img.shields.io/npm/v/graph-typed)

# What

## Brief

This is a standalone Graph data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i graph-typed --save
```

### yarn

```bash
yarn add graph-typed
```

### methods

Directed Graph
![directed-graph](https://github.com/zrwusa/assets/blob/master/images/data-structure-typed/methods-8bit/directed-graph.png?raw=true)
Undirected Graph
![undirected-graph](https://github.com/zrwusa/assets/blob/master/images/data-structure-typed/methods-8bit/undirected-graph.png?raw=true)

### snippet

#### TS

##### DirectedGraph

```typescript
import {DirectedGraph, DirectedVertex, DirectedEdge} from 'data-structure-typed';
// /* or if you prefer */ import {DirectedGraph, DirectedVertex, DirectedEdge} from 'graph-typed';

const graph = new DirectedGraph();
const vertexA = new DirectedVertex('A');
const vertexB = new DirectedVertex('B');
const vertexC = new DirectedVertex('C');
const edgeAB = new DirectedEdge('A', 'B');
const edgeBC = new DirectedEdge('B', 'C');

graph.addVertex(vertexA);
graph.addVertex(vertexB);
graph.addVertex(vertexC);
graph.addEdge(edgeAB);
graph.addEdge(edgeBC);

const topologicalOrder = graph.topologicalSort();
if (topologicalOrder) expect(topologicalOrder).toEqual(['A', 'B', 'C'])
```

##### MapGraph

```typescript
import {MapGraph, MapVertex} from 'data-structure-typed';
// /* or if you prefer */ import {MapGraph, MapVertex} from 'graph-typed';

const mapGraph = new MapGraph([5.500338, 100.173665]);

mapGraph.addVertex(new MapVertex('Surin', 5.466724, 100.274805));
mapGraph.addVertex(new MapVertex('Batu Feringgi Beach', 5.475141, 100.276670));
mapGraph.addVertex(new MapVertex('Lotus', 5.459044, 100.308767));
mapGraph.addVertex(new MapVertex('The Breeza', 5.454197, 100.307859));
mapGraph.addVertex(new MapVertex('Hard Rock Hotel', 5.467850, 100.241876));
mapGraph.addVertex(new MapVertex('Mira', 5.456749, 100.286650));
mapGraph.addVertex(new MapVertex('Penang Bible Church', 5.428683, 100.314825));
mapGraph.addVertex(new MapVertex('Queensbay', 5.332760, 100.306651));
mapGraph.addVertex(new MapVertex('Saanen Goat Farm', 5.405738, 100.207699));
mapGraph.addVertex(new MapVertex('Trinity Auto', 5.401126, 100.303739));
mapGraph.addVertex(new MapVertex('Penang Airport', 5.293185, 100.265772));
mapGraph.addEdge('Surin', 'Lotus', 4.7);
mapGraph.addEdge('Lotus', 'The Breeza', 1);
mapGraph.addEdge('Batu Feringgi Beach', 'Hard Rock Hotel', 5.2);
mapGraph.addEdge('Surin', 'Mira', 2.8);
mapGraph.addEdge('Mira', 'Penang Bible Church', 7.0);
mapGraph.addEdge('Lotus', 'Penang Bible Church', 5.7);
mapGraph.addEdge('Penang Bible Church', 'Queensbay', 13.9);
mapGraph.addEdge('Hard Rock Hotel', 'Saanen Goat Farm', 18.5);
mapGraph.addEdge('The Breeza', 'Trinity Auto', 9.1);
mapGraph.addEdge('Trinity Auto', 'Saanen Goat Farm', 26.3);
mapGraph.addEdge('The Breeza', 'Penang Airport', 24.8);
mapGraph.addEdge('Penang Airport', 'Saanen Goat Farm', 21.2);
const expected1 = ['Surin', 'Lotus', 'The Breeza', 'Trinity Auto', 'Saanen Goat Farm'];

const minPathBetween = mapGraph.getMinPathBetween('Surin', 'Saanen Goat Farm');
expect(minPathBetween?.map(v => v.id)).toEqual(expected1);
const surinToSaanenGoatFarmDij = mapGraph.dijkstra('Surin', 'Saanen Goat Farm', true, true);
expect(surinToSaanenGoatFarmDij?.minPath.map(v => v.id)).toEqual(expected1);
expect(surinToSaanenGoatFarmDij?.minDist).toBe(41.1);
mapGraph.addEdge('Surin', 'Batu Feringgi Beach', 1.5);
const expected2 = ['Surin', 'Batu Feringgi Beach', 'Hard Rock Hotel', 'Saanen Goat Farm'];
const minPathBetweenViaBFB = mapGraph.getMinPathBetween('Surin', 'Saanen Goat Farm', true);
expect(minPathBetweenViaBFB?.map(v => v.id)).toEqual(expected2);
const surinToSaanenGoatFarmViaDij = mapGraph.dijkstra('Surin', 'Saanen Goat Farm', true, true);
expect(surinToSaanenGoatFarmViaDij?.minPath.map(v => v.id)).toEqual(expected2);
expect(surinToSaanenGoatFarmViaDij?.minDist).toBe(25.2);
```

#### JS

##### DirectedGraph

```typescript
const {DirectedGraph, DirectedVertex, DirectedEdge} = require('data-structure-typed');
// /* or if you prefer */ const {DirectedGraph, DirectedVertex, DirectedEdge} = require('graph-typed');

const graph = new DirectedGraph();
const vertexA = new DirectedVertex('A');
const vertexB = new DirectedVertex('B');
const vertexC = new DirectedVertex('C');
const edgeAB = new DirectedEdge('A', 'B');
const edgeBC = new DirectedEdge('B', 'C');

graph.addVertex(vertexA);
graph.addVertex(vertexB);
graph.addVertex(vertexC);
graph.addEdge(edgeAB);
graph.addEdge(edgeBC);

const topologicalOrder = graph.topologicalSort();
if (topologicalOrder) expect(topologicalOrder).toEqual(['A', 'B', 'C'])
```

##### MapGraph

```javascript
const {MapGraph, MapVertex} =  require('data-structure-typed');
// /* or if you prefer */ const {MapGraph, MapVertex} = require('graph-typed');

const mapGraph = new MapGraph([5.500338, 100.173665]);

mapGraph.addVertex(new MapVertex('Surin', 5.466724, 100.274805));
mapGraph.addVertex(new MapVertex('Batu Feringgi Beach', 5.475141, 100.276670));
mapGraph.addVertex(new MapVertex('Lotus', 5.459044, 100.308767));
mapGraph.addVertex(new MapVertex('The Breeza', 5.454197, 100.307859));
mapGraph.addVertex(new MapVertex('Hard Rock Hotel', 5.467850, 100.241876));
mapGraph.addVertex(new MapVertex('Mira', 5.456749, 100.286650));
mapGraph.addVertex(new MapVertex('Penang Bible Church', 5.428683, 100.314825));
mapGraph.addVertex(new MapVertex('Queensbay', 5.332760, 100.306651));
mapGraph.addVertex(new MapVertex('Saanen Goat Farm', 5.405738, 100.207699));
mapGraph.addVertex(new MapVertex('Trinity Auto', 5.401126, 100.303739));
mapGraph.addVertex(new MapVertex('Penang Airport', 5.293185, 100.265772));
mapGraph.addEdge('Surin', 'Lotus', 4.7);
mapGraph.addEdge('Lotus', 'The Breeza', 1);
mapGraph.addEdge('Batu Feringgi Beach', 'Hard Rock Hotel', 5.2);
mapGraph.addEdge('Surin', 'Mira', 2.8);
mapGraph.addEdge('Mira', 'Penang Bible Church', 7.0);
mapGraph.addEdge('Lotus', 'Penang Bible Church', 5.7);
mapGraph.addEdge('Penang Bible Church', 'Queensbay', 13.9);
mapGraph.addEdge('Hard Rock Hotel', 'Saanen Goat Farm', 18.5);
mapGraph.addEdge('The Breeza', 'Trinity Auto', 9.1);
mapGraph.addEdge('Trinity Auto', 'Saanen Goat Farm', 26.3);
mapGraph.addEdge('The Breeza', 'Penang Airport', 24.8);
mapGraph.addEdge('Penang Airport', 'Saanen Goat Farm', 21.2);
const expected1 = ['Surin', 'Lotus', 'The Breeza', 'Trinity Auto', 'Saanen Goat Farm'];

const minPathBetween = mapGraph.getMinPathBetween('Surin', 'Saanen Goat Farm');
expect(minPathBetween?.map(v => v.id)).toEqual(expected1);
const surinToSaanenGoatFarmDij = mapGraph.dijkstra('Surin', 'Saanen Goat Farm', true, true);
expect(surinToSaanenGoatFarmDij?.minPath.map(v => v.id)).toEqual(expected1);
expect(surinToSaanenGoatFarmDij?.minDist).toBe(41.1);
mapGraph.addEdge('Surin', 'Batu Feringgi Beach', 1.5);
const expected2 = ['Surin', 'Batu Feringgi Beach', 'Hard Rock Hotel', 'Saanen Goat Farm'];
const minPathBetweenViaBFB = mapGraph.getMinPathBetween('Surin', 'Saanen Goat Farm', true);
expect(minPathBetweenViaBFB?.map(v => v.id)).toEqual(expected2);
const surinToSaanenGoatFarmViaDij = mapGraph.dijkstra('Surin', 'Saanen Goat Farm', true, true);
expect(surinToSaanenGoatFarmViaDij?.minPath.map(v => v.id)).toEqual(expected2);
expect(surinToSaanenGoatFarmViaDij?.minDist).toBe(25.2);
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
<td><a href="https://data-structure-typed-docs.vercel.app/classes/TreeMultimap.html"><span>TreeMultimap</span></a></td>
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






