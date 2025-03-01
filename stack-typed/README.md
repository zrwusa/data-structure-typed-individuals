![NPM](https://img.shields.io/npm/l/stack-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/stack-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/stack-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/stack-typed)
![npm](https://img.shields.io/npm/v/stack-typed)

# What

## Brief

This is a standalone Stack data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i stack-typed --save
```

### yarn

```bash
yarn add stack-typed
```

### snippet


[//]: # (No deletion!!! Start of Example Replace Section)

### Balanced Parentheses or Brackets
```typescript
    type ValidCharacters = ')' | '(' | ']' | '[' | '}' | '{';

    const stack = new Stack<string>();
    const input: ValidCharacters[] = '[({})]'.split('') as ValidCharacters[];
    const matches: { [key in ValidCharacters]?: ValidCharacters } = { ')': '(', ']': '[', '}': '{' };
    for (const char of input) {
      if ('([{'.includes(char)) {
        stack.push(char);
      } else if (')]}'.includes(char)) {
        if (stack.pop() !== matches[char]) {
          fail('Parentheses are not balanced');
        }
      }
    }
    console.log(stack.isEmpty()); // true
```

### Expression Evaluation and Conversion
```typescript
    const stack = new Stack<number>();
    const expression = [5, 3, '+']; // Equivalent to 5 + 3
    expression.forEach(token => {
      if (typeof token === 'number') {
        stack.push(token);
      } else {
        const b = stack.pop()!;
        const a = stack.pop()!;
        stack.push(token === '+' ? a + b : 0); // Only handling '+' here
      }
    });
    console.log(stack.pop()); // 8
```

### Depth-First Search (DFS)
```typescript
    const stack = new Stack<number>();
    const graph: { [key in number]: number[] } = { 1: [2, 3], 2: [4], 3: [5], 4: [], 5: [] };
    const visited: number[] = [];
    stack.push(1);
    while (!stack.isEmpty()) {
      const node = stack.pop()!;
      if (!visited.includes(node)) {
        visited.push(node);
        graph[node].forEach(neighbor => stack.push(neighbor));
      }
    }
    console.log(visited); // [1, 3, 5, 2, 4]
```

### Backtracking Algorithms
```typescript
    const stack = new Stack<[number, number]>();
    const maze = [
      ['S', ' ', 'X'],
      ['X', ' ', 'X'],
      [' ', ' ', 'E']
    ];
    const start: [number, number] = [0, 0];
    const end = [2, 2];
    const directions = [
      [0, 1], // To the right
      [1, 0], // down
      [0, -1], // left
      [-1, 0] // up
    ];

    const visited = new Set<string>(); // Used to record visited nodes
    stack.push(start);
    const path: number[][] = [];

    while (!stack.isEmpty()) {
      const [x, y] = stack.pop()!;
      if (visited.has(`${x},${y}`)) continue; // Skip already visited nodes
      visited.add(`${x},${y}`);

      path.push([x, y]);

      if (x === end[0] && y === end[1]) {
        break; // Find the end point and exit
      }

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          maze[nx]?.[ny] === ' ' || // feasible path
          maze[nx]?.[ny] === 'E' // destination
        ) {
          stack.push([nx, ny]);
        }
      }
    }

    expect(path).toContainEqual(end);
```

### Function Call Stack
```typescript
    const functionStack = new Stack<string>();
    functionStack.push('main');
    functionStack.push('foo');
    functionStack.push('bar');
    console.log(functionStack.pop()); // 'bar'
    console.log(functionStack.pop()); // 'foo'
    console.log(functionStack.pop()); // 'main'
```

### Simplify File Paths
```typescript
    const stack = new Stack<string>();
    const path = '/a/./b/../../c';
    path.split('/').forEach(segment => {
      if (segment === '..') stack.pop();
      else if (segment && segment !== '.') stack.push(segment);
    });
    console.log(stack.elements.join('/')); // 'c'
```

### Stock Span Problem
```typescript
    const stack = new Stack<number>();
    const prices = [100, 80, 60, 70, 60, 75, 85];
    const spans: number[] = [];
    prices.forEach((price, i) => {
      while (!stack.isEmpty() && prices[stack.peek()!] <= price) {
        stack.pop();
      }
      spans.push(stack.isEmpty() ? i + 1 : i - stack.peek()!);
      stack.push(i);
    });
    console.log(spans); // [1, 1, 1, 2, 1, 4, 6]
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
<td>Stack</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Stack.html"><span>Stack</span></a></td>
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
    <td>Stack&lt;E&gt;</td>
    <td>stack&lt;T&gt;</td>
    <td>Stack&lt;E&gt;</td>
    <td>-</td>
  </tr>
  
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>stack</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push</td><td>37.60</td><td>26.60</td><td>0.00</td></tr><tr><td>1,000,000 push & pop</td><td>47.01</td><td>21.27</td><td>0.00</td></tr></table></div>
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



