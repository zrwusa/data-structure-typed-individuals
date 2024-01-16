![NPM](https://img.shields.io/npm/l/graph-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/graph-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/graph-typed)
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
<td>Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/AbstractGraph.html"><span>AbstractGraph</span></a></td>
</tr>
<tr>
<td>Directed Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/DirectedGraph.html"><span>DirectedGraph</span></a></td>
</tr>
<tr>
<td>Undirected Graph</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/UndirectedGraph.html"><span>UndirectedGraph</span></a></td>
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
    <td>DirectedGraph&lt;V, E&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>UndirectedGraph&lt;V, E&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>directed-graph</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000 addVertex</td><td>0.10</td><td>9534.93</td><td>8.72e-7</td></tr><tr><td>1,000 addEdge</td><td>6.30</td><td>158.67</td><td>0.00</td></tr><tr><td>1,000 getVertex</td><td>0.05</td><td>2.16e+4</td><td>3.03e-7</td></tr><tr><td>1,000 getEdge</td><td>22.31</td><td>44.82</td><td>0.00</td></tr><tr><td>tarjan</td><td>210.90</td><td>4.74</td><td>0.01</td></tr><tr><td>tarjan all</td><td>214.72</td><td>4.66</td><td>0.01</td></tr><tr><td>topologicalSort</td><td>172.52</td><td>5.80</td><td>0.00</td></tr></table></div>
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
    <td>Graph DFS</td>
    <td>Traverse a graph in a depth-first manner, starting from a given node, exploring along one path as deeply as
      possible, and backtracking to explore other paths. Used for finding connected components, paths, etc.
    </td>
    <td>Recursion + Iteration</td>
  </tr>
  <tr>
    <td>Graph BFS</td>
    <td>Traverse a graph in a breadth-first manner, starting from a given node, first visiting nodes directly connected
      to the starting node, and then expanding level by level. Used for finding shortest paths, etc.
    </td>
    <td>Recursion + Iteration</td>
  </tr>
  <tr>
    <td>Graph Tarjan's Algorithm</td>
    <td>Find strongly connected components in a graph, typically implemented using depth-first search.</td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph Bellman-Ford Algorithm</td>
    <td>Finding the shortest paths from a single source, can handle negative weight edges</td>
    <td>Iteration</td>
  </tr>
  <tr>
    <td>Graph Dijkstra's Algorithm</td>
    <td>Finding the shortest paths from a single source, cannot handle negative weight edges</td>
    <td>Iteration</td>
  </tr>
  <tr>
    <td>Graph Floyd-Warshall Algorithm</td>
    <td>Finding the shortest paths between all pairs of nodes</td>
    <td>Iteration</td>
  </tr>
  <tr>
    <td>Graph getCycles</td>
    <td>Find all cycles in a graph or detect the presence of cycles.</td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph getCutVertexes</td>
    <td>Find cut vertices in a graph, which are nodes that, when removed, increase the number of connected components in
      the graph.
    </td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph getSCCs</td>
    <td>Find strongly connected components in a graph, which are subgraphs where any two nodes can reach each other.
    </td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph getBridges</td>
    <td>Find bridges in a graph, which are edges that, when removed, increase the number of connected components in the
      graph.
    </td>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Graph topologicalSort</td>
    <td>Perform topological sorting on a directed acyclic graph (DAG) to find a linear order of nodes such that all
      directed edges go from earlier nodes to later nodes.
    </td>
    <td>Recursion</td>
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


