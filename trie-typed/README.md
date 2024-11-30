![NPM](https://img.shields.io/npm/l/trie-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/trie-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/trie-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/trie-typed)
![npm](https://img.shields.io/npm/v/trie-typed)

# What

## Brief

This is a standalone Trie data structure from the data-structure-typed collection. If you wish to access more data
structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i trie-typed --save
```

### yarn

```bash
yarn add trie-typed
```

### snippet


[//]: # (No deletion!!! Start of Example Replace Section)

### Autocomplete: Prefix validation and checking
```typescript
    const autocomplete = new Trie<string>(['gmail.com', 'gmail.co.nz', 'gmail.co.jp', 'yahoo.com', 'outlook.com']);

    // Get all completions for a prefix
    const gmailCompletions = autocomplete.getWords('gmail');
    console.log(gmailCompletions); // ['gmail.com', 'gmail.co.nz', 'gmail.co.jp']
```

### File System Path Operations
```typescript
    const fileSystem = new Trie<string>([
      '/home/user/documents/file1.txt',
      '/home/user/documents/file2.txt',
      '/home/user/pictures/photo.jpg',
      '/home/user/pictures/vacation/',
      '/home/user/downloads'
    ]);

    // Find common directory prefix
    console.log(fileSystem.getLongestCommonPrefix()); // '/home/user/'

    // List all files in a directory
    const documentsFiles = fileSystem.getWords('/home/user/documents/');
    console.log(documentsFiles); // ['/home/user/documents/file1.txt', '/home/user/documents/file2.txt']
```

### Autocomplete: Basic word suggestions
```typescript
    // Create a trie for autocomplete
    const autocomplete = new Trie<string>([
      'function',
      'functional',
      'functions',
      'class',
      'classes',
      'classical',
      'closure',
      'const',
      'constructor'
    ]);

    // Test autocomplete with different prefixes
    console.log(autocomplete.getWords('fun')); // ['functional', 'functions', 'function']
    console.log(autocomplete.getWords('cla')); // ['classes', 'classical', 'class']
    console.log(autocomplete.getWords('con')); // ['constructor', 'const']

    // Test with non-matching prefix
    console.log(autocomplete.getWords('xyz')); // []
```

### Dictionary: Case-insensitive word lookup
```typescript
    // Create a case-insensitive dictionary
    const dictionary = new Trie<string>([], { caseSensitive: false });

    // Add words with mixed casing
    dictionary.add('Hello');
    dictionary.add('WORLD');
    dictionary.add('JavaScript');

    // Test lookups with different casings
    console.log(dictionary.has('hello')); // true
    console.log(dictionary.has('HELLO')); // true
    console.log(dictionary.has('Hello')); // true
    console.log(dictionary.has('javascript')); // true
    console.log(dictionary.has('JAVASCRIPT')); // true
```

### IP Address Routing Table
```typescript
    // Add IP address prefixes and their corresponding routes
    const routes = {
      '192.168.1': 'LAN_SUBNET_1',
      '192.168.2': 'LAN_SUBNET_2',
      '10.0.0': 'PRIVATE_NETWORK_1',
      '10.0.1': 'PRIVATE_NETWORK_2'
    };

    const ipRoutingTable = new Trie<string>(Object.keys(routes));

    // Check IP address prefix matching
    console.log(ipRoutingTable.hasPrefix('192.168.1')); // true
    console.log(ipRoutingTable.hasPrefix('192.168.2')); // true

    // Validate IP address belongs to subnet
    const ip = '192.168.1.100';
    const subnet = ip.split('.').slice(0, 3).join('.');
    console.log(ipRoutingTable.hasPrefix(subnet)); // true
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
<td>Trie</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/Trie.html"><span>Trie</span></a></td>
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
    <td>Trie</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  
  </tbody>
</table>

## Benchmark

[//]: # (No deletion!!! Start of Replace Section)

<div class="json-to-html-collapse clearfix 0">
      <div class='collapsible level0' ><span class='json-to-html-label'>trie</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>100,000 push</td><td>45.97</td><td>21.76</td><td>0.00</td></tr><tr><td>100,000 getWords</td><td>66.20</td><td>15.11</td><td>0.00</td></tr></table></div>
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



