![NPM](https://img.shields.io/npm/l/min-heap-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/min-heap-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/min-heap-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/min-heap-typed)
![npm](https://img.shields.io/npm/v/min-heap-typed)

# What

## Brief

This is a standalone Min Heap data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i min-heap-typed --save
```

### yarn

```bash
yarn add min-heap-typed
```

### snippet

#### TS

```typescript
    import {MinHeap} from 'data-structure-typed';
    // /* or if you prefer */ import {MinHeap} from 'heap-typed';

    const minNumHeap = new MinHeap<number>();
    minNumHeap.add(1).add(6).add(2).add(0).add(5).add(9);
    minNumHeap.has(1)        //  true
    minNumHeap.has(2)        //  true
    minNumHeap.poll()        //  0
    minNumHeap.poll()        //  1
    minNumHeap.peek()        //  2
    minNumHeap.has(1);       // false
    minNumHeap.has(2);       // true
    const arrFromHeap = minNumHeap.toArray();
    arrFromHeap.length       //  4
    arrFromHeap[0]           //  2
    arrFromHeap[1]           //  5
    arrFromHeap[2]           //  9
    arrFromHeap[3]           //  6
    minNumHeap.sort()        //  [2, 5, 6, 9]
```

#### JS

```javascript
    const {MinHeap} = require('data-structure-typed');
    // /* or if you prefer */ const {MinHeap} = require('heap-typed');

    const minNumHeap = new MinHeap();
    minNumHeap.add(1).add(6).add(2).add(0).add(5).add(9);
    minNumHeap.has(1)        //  true
    minNumHeap.has(2)        //  true
    minNumHeap.poll()        //  0
    minNumHeap.poll()        //  1
    minNumHeap.peek()        //  2
    minNumHeap.has(1);       // false
    minNumHeap.has(2);       // true
    const arrFromHeap = minNumHeap.toArray();
    arrFromHeap.length       //  4
    arrFromHeap[0]           //  2
    arrFromHeap[1]           //  5
    arrFromHeap[2]           //  9
    arrFromHeap[3]           //  6
    minNumHeap.sort()        //  [2, 5, 6, 9]
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
<td>Heap</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Heap.html"><span>Heap</span></a></td>
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
    <td>Heap&lt;E&gt;</td>
    <td>priority_queue&lt;T&gt;</td>
    <td>PriorityQueue&lt;E&gt;</td>
    <td>heapq</td>
  </tr>
  
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>heap</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>10,000 add & pop</td><td>5.80</td><td>172.35</td><td>8.78e-5</td></tr><tr><td>10,000 fib add & pop</td><td>357.92</td><td>2.79</td><td>0.00</td></tr></table></div>
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



