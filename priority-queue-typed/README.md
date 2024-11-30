![NPM](https://img.shields.io/npm/l/priority-queue-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/priority-queue-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/priority-queue-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/priority-queue-typed)
![npm](https://img.shields.io/npm/v/priority-queue-typed)

# What

## Brief

This is a standalone Priority Queue data structure from the data-structure-typed collection. If you wish to access more
data structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i priority-queue-typed --save
```

### yarn

```bash
yarn add priority-queue-typed
```

### snippet

#### TS

```typescript
    import {PriorityQueue, MinPriorityQueue} from 'data-structure-typed';
    // /* or if you prefer */ import {PriorityQueue, MinPriorityQueue} from 'priority-queue-typed';

    const minPQ = new PriorityQueue<number>({nodes: [5, 2, 3, 4, 6, 1], comparator: (a, b) => a - b});
    minPQ.toArray()             //  [1, 2, 3, 4, 6, 5]
    minPQ.poll();
    minPQ.poll();
    minPQ.poll();
    minPQ.toArray()             //  [4, 5, 6]
    minPQ.peek()                //  4
    PriorityQueue.heapify({
        nodes: [3, 2, 1, 5, 6, 7, 8, 9, 10],
        comparator: (a, b) => a - b
    }).toArray()                //  [1, 2, 3, 5, 6, 7, 8, 9, 10]

    const priorityQueue = new MinPriorityQueue<number>();
    priorityQueue.add(5);
    priorityQueue.add(3);
    priorityQueue.add(7);
    priorityQueue.add(1);
    const sortedArray = priorityQueue.sort(); //  [1, 3, 5, 7]);

    const minPQ1 = new PriorityQueue<number>({nodes: [2, 5, 8, 3, 1, 6, 7, 4], comparator: (a, b) => a - b});
    const clonedPriorityQueue = minPQ1.clone();
    clonedPriorityQueue.getNodes()  //  minPQ1.getNodes()
    clonedPriorityQueue.sort()      //  [1, 2, 3, 4, 5, 6, 7, 8]
    minPQ1.DFS('in')                //  [4, 3, 2, 5, 1, 8, 6, 7]
    minPQ1.DFS('post')              //  [4, 3, 5, 2, 8, 7, 6, 1]
    minPQ1.DFS('pre')               //  [1, 2, 3, 4, 5, 6, 8, 7]
```

#### JS

```javascript
    const {PriorityQueue, MinPriorityQueue} = require('data-structure-typed');
    // /* or if you prefer */ const {PriorityQueue, MinPriorityQueue} = require('priority-queue-typed');

    const minPQ = new PriorityQueue({nodes: [5, 2, 3, 4, 6, 1], comparator: (a, b) => a - b});
    minPQ.toArray()             //  [1, 2, 3, 4, 6, 5]
    minPQ.poll();
    minPQ.poll();
    minPQ.poll();
    minPQ.toArray()             //  [4, 5, 6]
    minPQ.peek()                //  4
    PriorityQueue.heapify({
        nodes: [3, 2, 1, 5, 6, 7, 8, 9, 10],
        comparator: (a, b) => a - b
    }).toArray()                //  [1, 2, 3, 5, 6, 7, 8, 9, 10]
    
    const priorityQueue = new MinPriorityQueue();
    priorityQueue.add(5);
    priorityQueue.add(3);
    priorityQueue.add(7);
    priorityQueue.add(1);
    const sortedArray = priorityQueue.sort(); //  [1, 3, 5, 7]);
    
    const minPQ1 = new PriorityQueue<number>({nodes: [2, 5, 8, 3, 1, 6, 7, 4], comparator: (a, b) => a - b});
    const clonedPriorityQueue = minPQ1.clone();
    clonedPriorityQueue.getNodes()  //  minPQ1.getNodes()
    clonedPriorityQueue.sort()      //  [1, 2, 3, 4, 5, 6, 7, 8]
    minPQ1.DFS('in')                //  [4, 3, 2, 5, 1, 8, 6, 7]
    minPQ1.DFS('post')              //  [4, 3, 5, 2, 8, 7, 6, 1]
    minPQ1.DFS('pre')               //  [1, 2, 3, 4, 5, 6, 8, 7]
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
<td>Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/PriorityQueue.html"><span>PriorityQueue</span></a></td>
</tr>
<tr>
<td>Max Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/MaxPriorityQueue.html"><span>MaxPriorityQueue</span></a></td>
</tr>
<tr>
<td>Min Priority Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/MinPriorityQueue.html"><span>MinPriorityQueue</span></a></td>
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
    <td>PriorityQueue&lt;E&gt;</td>
    <td>priority_queue&lt;T&gt;</td>
    <td>PriorityQueue&lt;E&gt;</td>
    <td>-</td>
  </tr>

  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>max-priority-queue</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>10,000 refill & poll</td><td>8.91</td><td>112.29</td><td>2.26e-4</td></tr></table></div>
    </div>
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>priority-queue</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>100,000 add & pop</td><td>103.59</td><td>9.65</td><td>0.00</td></tr></table></div>
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



