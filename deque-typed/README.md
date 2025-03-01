![NPM](https://img.shields.io/npm/l/deque-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/deque-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/deque-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/deque-typed)
![npm](https://img.shields.io/npm/v/deque-typed)

# What

## Brief

This is a standalone Deque data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i deque-typed --save
```

### yarn

```bash
yarn add deque-typed
```

### snippet

[//]: # (No deletion!!! Start of Example Replace Section)

### prize roulette
```typescript
    class PrizeRoulette {
      private deque: Deque<string>;

      constructor(prizes: string[]) {
        // Initialize the deque with prizes
        this.deque = new Deque<string>(prizes);
      }

      // Rotate clockwise to the right (forward)
      rotateClockwise(steps: number): void {
        const n = this.deque.length;
        if (n === 0) return;

        for (let i = 0; i < steps; i++) {
          const last = this.deque.pop(); // Remove the last element
          this.deque.unshift(last!); // Add it to the front
        }
      }

      // Rotate counterclockwise to the left (backward)
      rotateCounterClockwise(steps: number): void {
        const n = this.deque.length;
        if (n === 0) return;

        for (let i = 0; i < steps; i++) {
          const first = this.deque.shift(); // Remove the first element
          this.deque.push(first!); // Add it to the back
        }
      }

      // Display the current prize at the head
      display() {
        return this.deque.first;
      }
    }

    // Example usage
    const prizes = ['Car', 'Bike', 'Laptop', 'Phone', 'Watch', 'Headphones']; // Initialize the prize list
    const roulette = new PrizeRoulette(prizes);

    // Display the initial state
    console.log(roulette.display()); // 'Car' // Car

    // Rotate clockwise by 3 steps
    roulette.rotateClockwise(3);
    console.log(roulette.display()); // 'Phone' // Phone

    // Rotate counterclockwise by 2 steps
    roulette.rotateCounterClockwise(2);
    console.log(roulette.display()); // 'Headphones'
```

### sliding window
```typescript
    // Maximum function of sliding window
    function maxSlidingWindow(nums: number[], k: number): number[] {
      const n = nums.length;
      if (n * k === 0) return [];

      const deq = new Deque<number>();
      const result: number[] = [];

      for (let i = 0; i < n; i++) {
        // Delete indexes in the queue that are not within the window range
        if (deq.length > 0 && deq.first! === i - k) {
          deq.shift();
        }

        // Remove all indices less than the current value from the tail of the queue
        while (deq.length > 0 && nums[deq.last!] < nums[i]) {
          deq.pop();
        }

        // Add the current index to the end of the queue
        deq.push(i);

        // Add the maximum value of the window to the results
        if (i >= k - 1) {
          result.push(nums[deq.first!]);
        }
      }

      return result;
    }

    const nums = [1, 3, -1, -3, 5, 3, 6, 7];
    const k = 3;
    console.log(maxSlidingWindow(nums, k)); // [3, 3, 5, 5, 6, 7]
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
<td>Deque</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Deque.html"><span>Deque</span></a></td>
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
    <td>Deque&lt;E&gt;</td>
    <td>deque&lt;T&gt;</td>
    <td>ArrayDeque&lt;E&gt;</td>
    <td>deque</td>
  </tr>
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)

<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>deque</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push</td><td>14.55</td><td>68.72</td><td>6.91e-4</td></tr><tr><td>1,000,000 push & pop</td><td>23.40</td><td>42.73</td><td>5.94e-4</td></tr><tr><td>1,000,000 push & shift</td><td>24.41</td><td>40.97</td><td>1.45e-4</td></tr><tr><td>1,000,000 unshift & shift</td><td>22.56</td><td>44.32</td><td>1.30e-4</td></tr></table></div>
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



