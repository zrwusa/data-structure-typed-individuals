![NPM](https://img.shields.io/npm/l/heap-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/heap-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/heap-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/heap-typed)
![npm](https://img.shields.io/npm/v/heap-typed)

# What

## Brief

This is a standalone Heap data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i heap-typed --save
```

### yarn

```bash
yarn add heap-typed
```

### snippet

[//]: # (No deletion!!! Start of Example Replace Section)

### Use Heap to sort an array
```typescript
    function heapSort(arr: number[]): number[] {
      const heap = new Heap<number>(arr, { comparator: (a, b) => a - b });
      const sorted: number[] = [];
      while (!heap.isEmpty()) {
        sorted.push(heap.poll()!); // Poll minimum element
      }
      return sorted;
    }

    const array = [5, 3, 8, 4, 1, 2];
    console.log(heapSort(array)); // [1, 2, 3, 4, 5, 8]
```

### Use Heap to solve top k problems
```typescript
    function topKElements(arr: number[], k: number): number[] {
      const heap = new Heap<number>([], { comparator: (a, b) => b - a }); // Max heap
      arr.forEach(num => {
        heap.add(num);
        if (heap.size > k) heap.poll(); // Keep the heap size at K
      });
      return heap.toArray();
    }

    const numbers = [10, 30, 20, 5, 15, 25];
    console.log(topKElements(numbers, 3)); // [15, 10, 5]
```

### Use Heap to merge sorted sequences
```typescript
    function mergeSortedSequences(sequences: number[][]): number[] {
      const heap = new Heap<{ value: number; seqIndex: number; itemIndex: number }>([], {
        comparator: (a, b) => a.value - b.value // Min heap
      });

      // Initialize heap
      sequences.forEach((seq, seqIndex) => {
        if (seq.length) {
          heap.add({ value: seq[0], seqIndex, itemIndex: 0 });
        }
      });

      const merged: number[] = [];
      while (!heap.isEmpty()) {
        const { value, seqIndex, itemIndex } = heap.poll()!;
        merged.push(value);

        if (itemIndex + 1 < sequences[seqIndex].length) {
          heap.add({
            value: sequences[seqIndex][itemIndex + 1],
            seqIndex,
            itemIndex: itemIndex + 1
          });
        }
      }

      return merged;
    }

    const sequences = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ];
    console.log(mergeSortedSequences(sequences)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Use Heap to dynamically maintain the median
```typescript
    class MedianFinder {
      private low: MaxHeap<number>; // Max heap, stores the smaller half
      private high: MinHeap<number>; // Min heap, stores the larger half

      constructor() {
        this.low = new MaxHeap<number>([]);
        this.high = new MinHeap<number>([]);
      }

      addNum(num: number): void {
        if (this.low.isEmpty() || num <= this.low.peek()!) this.low.add(num);
        else this.high.add(num);

        // Balance heaps
        if (this.low.size > this.high.size + 1) this.high.add(this.low.poll()!);
        else if (this.high.size > this.low.size) this.low.add(this.high.poll()!);
      }

      findMedian(): number {
        if (this.low.size === this.high.size) return (this.low.peek()! + this.high.peek()!) / 2;
        return this.low.peek()!;
      }
    }

    const medianFinder = new MedianFinder();
    medianFinder.addNum(10);
    console.log(medianFinder.findMedian()); // 10
    medianFinder.addNum(20);
    console.log(medianFinder.findMedian()); // 15
    medianFinder.addNum(30);
    console.log(medianFinder.findMedian()); // 20
    medianFinder.addNum(40);
    console.log(medianFinder.findMedian()); // 25
    medianFinder.addNum(50);
    console.log(medianFinder.findMedian()); // 30
```

### Use Heap for load balancing
```typescript
    function loadBalance(requests: number[], servers: number): number[] {
      const serverHeap = new Heap<{ id: number; load: number }>([], { comparator: (a, b) => a.load - b.load }); // min heap
      const serverLoads = new Array(servers).fill(0);

      for (let i = 0; i < servers; i++) {
        serverHeap.add({ id: i, load: 0 });
      }

      requests.forEach(req => {
        const server = serverHeap.poll()!;
        serverLoads[server.id] += req;
        server.load += req;
        serverHeap.add(server); // The server after updating the load is re-entered into the heap
      });

      return serverLoads;
    }

    const requests = [5, 2, 8, 3, 7];
    console.log(loadBalance(requests, 3)); // [12, 8, 5]
```

### Use Heap to schedule tasks
```typescript
    type Task = [string, number];

    function scheduleTasks(tasks: Task[], machines: number): Map<number, Task[]> {
      const machineHeap = new Heap<{ id: number; load: number }>([], { comparator: (a, b) => a.load - b.load }); // Min heap
      const allocation = new Map<number, Task[]>();

      // Initialize the load on each machine
      for (let i = 0; i < machines; i++) {
        machineHeap.add({ id: i, load: 0 });
        allocation.set(i, []);
      }

      // Assign tasks
      tasks.forEach(([task, load]) => {
        const machine = machineHeap.poll()!;
        allocation.get(machine.id)!.push([task, load]);
        machine.load += load;
        machineHeap.add(machine); // The machine after updating the load is re-entered into the heap
      });

      return allocation;
    }

    const tasks: Task[] = [
      ['Task1', 3],
      ['Task2', 1],
      ['Task3', 2],
      ['Task4', 5],
      ['Task5', 4]
    ];
    const expectedMap = new Map<number, Task[]>();
    expectedMap.set(0, [
      ['Task1', 3],
      ['Task4', 5]
    ]);
    expectedMap.set(1, [
      ['Task2', 1],
      ['Task3', 2],
      ['Task5', 4]
    ]);
    console.log(scheduleTasks(tasks, 2)); // expectedMap
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



