![NPM](https://img.shields.io/npm/l/queue-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/queue-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/queue-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/queue-typed)
![npm](https://img.shields.io/npm/v/queue-typed)

# What

## Brief

In the usual gig, we make do with Array.push and Array.shift to play Queue in JavaScript, but here's the kicker – native
JavaScript Array isn't exactly Queue VIP. That shift move? It's a bit of a slow dance with a time complexity
of [linear time complexity](https://medium.com/@ariel.salem1989/an-easy-to-use-guide-to-big-o-time-complexity-5dcf4be8a444#:~:text=O(N)%E2%80%94Linear%20Time)
*O(n)*. When you're working with big data, you don't want to be caught slow-shifting. So, we roll up our sleeves and
craft a Queue that's got a
speedy [constant time complexity](https://medium.com/@ariel.salem1989/an-easy-to-use-guide-to-big-o-time-complexity-5dcf4be8a444#:~:text=O(1)%20%E2%80%94%20Constant%20Time)
O(1) Queue.enqueue(), a snappy O(1) Queue.dequeue(), and a lightning-fast O(1)
Queue.getAt(). Yep, it's Queue-tastic!

<table>
<thead>
<tr><th>Data Structure</th><th>Enqueue</th><th>Dequeue</th><th>Access</th><th>Enqueue & Dequeue 100000</th><th>Access 100000</th></tr>
</thead>
<tbody>
<tr><td>Queue Typed</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>22.60ms</td><td>10.60ms</td></tr>
<tr><td>JavaScript Native Array</td><td>O(1)</td><td>O(n)</td><td>O(1)</td><td>931.10ms</td><td>8.60ms</td></tr>
<tr><td>Other Queue</td><td>O(1)</td><td>O(1)</td><td>O(n)</td><td>28.90ms</td><td>17175.90ms</td></tr>
</tbody>
</table>

## more data structures

This is a standalone Queue data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i queue-typed --save
```

### yarn

```bash
yarn add queue-typed
```

### snippet

#### TS

```typescript
import {Queue} from 'queue-typed';
// /* or if you prefer */ import {Queue} from 'queue-typed';

const queue = new Queue<number>();
for (let i = 0; i < magnitude; i++) {
    queue.enqueue(i);
}
for (let i = 0; i < magnitude; i++) {
    queue.dequeue();
}

for (let i = 0; i < magnitude; i++) {
    console.log(queue.getAt(i));        // 0, 1, 2, 3, ...
}
```

#### JS

```javascript
const {Queue} = require('queue-typed');
// /* or if you prefer */ const {Queue} = require('queue-typed');

const queue = new Queue();
for (let i = 0; i < magnitude; i++) {
    queue.enqueue(i);
}
for (let i = 0; i < magnitude; i++) {
    queue.dequeue();
}

for (let i = 0; i < magnitude; i++) {
    console.log(queue.getAt(i));        // 0, 1, 2, 3, ...
}
```

[//]: # (No deletion!!! Start of Example Replace Section)

### Sliding Window using Queue
```typescript
    const nums = [2, 3, 4, 1, 5];
    const k = 2;
    const queue = new Queue<number>();

    let maxSum = 0;
    let currentSum = 0;

    nums.forEach(num => {
      queue.push(num);
      currentSum += num;

      if (queue.length > k) {
        currentSum -= queue.shift()!;
      }

      if (queue.length === k) {
        maxSum = Math.max(maxSum, currentSum);
      }
    });

    console.log(maxSum); // 7
```

### Breadth-First Search (BFS) using Queue
```typescript
    const graph: { [key in number]: number[] } = {
      1: [2, 3],
      2: [4, 5],
      3: [],
      4: [],
      5: []
    };

    const queue = new Queue<number>();
    const visited: number[] = [];

    queue.push(1);

    while (!queue.isEmpty()) {
      const node = queue.shift()!;
      if (!visited.includes(node)) {
        visited.push(node);
        graph[node].forEach(neighbor => queue.push(neighbor));
      }
    }

    console.log(visited); // [1, 2, 3, 4, 5]
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
<td>Queue</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Queue.html"><span>Queue</span></a></td>
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
    <td>Queue&lt;E&gt;</td>
    <td>queue&lt;T&gt;</td>
    <td>Queue&lt;E&gt;</td>
    <td>-</td>
  </tr>
  
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>queue</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push</td><td>39.90</td><td>25.07</td><td>0.01</td></tr><tr><td>1,000,000 push & shift</td><td>81.79</td><td>12.23</td><td>0.00</td></tr></table></div>
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




