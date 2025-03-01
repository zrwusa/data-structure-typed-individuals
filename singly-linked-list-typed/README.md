![NPM](https://img.shields.io/npm/l/singly-linked-list-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/singly-linked-list-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/singly-linked-list-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/singly-linked-list-typed)
![npm](https://img.shields.io/npm/v/singly-linked-list-typed)

# What

## Brief

This is a standalone Singly Linked List data structure from the data-structure-typed collection. If you wish to access
more data structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i singly-linked-list-typed --save
```

### yarn

```bash
yarn add singly-linked-list-typed
```

### snippet

[//]: # (No deletion!!! Start of Example Replace Section)

### implementation of a basic text editor
```typescript
    class TextEditor {
      private content: SinglyLinkedList<string>;
      private cursorIndex: number;
      private undoStack: Stack<{ operation: string; data?: any }>;

      constructor() {
        this.content = new SinglyLinkedList<string>();
        this.cursorIndex = 0; // Cursor starts at the beginning
        this.undoStack = new Stack<{ operation: string; data?: any }>(); // Stack to keep track of operations for undo
      }

      insert(char: string) {
        this.content.addAt(this.cursorIndex, char);
        this.cursorIndex++;
        this.undoStack.push({ operation: 'insert', data: { index: this.cursorIndex - 1 } });
      }

      delete() {
        if (this.cursorIndex === 0) return; // Nothing to delete
        const deleted = this.content.deleteAt(this.cursorIndex - 1);
        this.cursorIndex--;
        this.undoStack.push({ operation: 'delete', data: { index: this.cursorIndex, char: deleted } });
      }

      moveCursor(index: number) {
        this.cursorIndex = Math.max(0, Math.min(index, this.content.length));
      }

      undo() {
        if (this.undoStack.size === 0) return; // No operations to undo
        const lastAction = this.undoStack.pop();

        if (lastAction!.operation === 'insert') {
          this.content.deleteAt(lastAction!.data.index);
          this.cursorIndex = lastAction!.data.index;
        } else if (lastAction!.operation === 'delete') {
          this.content.addAt(lastAction!.data.index, lastAction!.data.char);
          this.cursorIndex = lastAction!.data.index + 1;
        }
      }

      getText(): string {
        return [...this.content].join('');
      }
    }

    // Example Usage
    const editor = new TextEditor();
    editor.insert('H');
    editor.insert('e');
    editor.insert('l');
    editor.insert('l');
    editor.insert('o');
    console.log(editor.getText()); // 'Hello' // Output: "Hello"

    editor.delete();
    console.log(editor.getText()); // 'Hell' // Output: "Hell"

    editor.undo();
    console.log(editor.getText()); // 'Hello' // Output: "Hello"

    editor.moveCursor(1);
    editor.insert('a');
    console.log(editor.getText()); // 'Haello'
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
<td>Singly Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SinglyLinkedList.html"><span>SinglyLinkedList</span></a></td>
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
    <td>SinglyLinkedList&lt;E&gt;</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)
<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>singly-linked-list</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>10,000 push & pop</td><td>212.98</td><td>4.70</td><td>0.01</td></tr><tr><td>10,000 insertBefore</td><td>250.68</td><td>3.99</td><td>0.01</td></tr></table></div>
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



