![NPM](https://img.shields.io/npm/l/linked-list-typed)
![GitHub top language](https://img.shields.io/github/languages/top/zrwusa/data-structure-typed)
![npm](https://img.shields.io/npm/dw/linked-list-typed)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/linked-list-typed)
![npm bundle size](https://img.shields.io/bundlephobia/min/linked-list-typed)
![npm](https://img.shields.io/npm/v/linked-list-typed)

# What

## Brief

This is a standalone Linked List data structure from the data-structure-typed collection. If you wish to access more
data structures or advanced features, you can transition to directly installing the
complete [data-structure-typed](https://www.npmjs.com/package/data-structure-typed) package

# How

## install

### npm

```bash
npm i linked-list-typed --save
```

### yarn

```bash
yarn add linked-list-typed
```

### snippet

[//]: # (No deletion!!! Start of Example Replace Section)

### text editor operation history
```typescript
    const actions = [
      { type: 'insert', content: 'first line of text' },
      { type: 'insert', content: 'second line of text' },
      { type: 'delete', content: 'delete the first line' }
    ];
    const editorHistory = new DoublyLinkedList<{ type: string; content: string }>(actions);

    console.log(editorHistory.last?.type); // 'delete'
    console.log(editorHistory.pop()?.content); // 'delete the first line'
    console.log(editorHistory.last?.type); // 'insert'
```

### Browser history
```typescript
    const browserHistory = new DoublyLinkedList<string>();

    browserHistory.push('home page');
    browserHistory.push('search page');
    browserHistory.push('details page');

    console.log(browserHistory.last); // 'details page'
    console.log(browserHistory.pop()); // 'details page'
    console.log(browserHistory.last); // 'search page'
```

### Use DoublyLinkedList to implement music player
```typescript
    // Define the Song interface
    interface Song {
      title: string;
      artist: string;
      duration: number; // duration in seconds
    }

    class Player {
      private playlist: DoublyLinkedList<Song>;
      private currentSong: ReturnType<typeof this.playlist.getNodeAt> | undefined;

      constructor(songs: Song[]) {
        this.playlist = new DoublyLinkedList<Song>();
        songs.forEach(song => this.playlist.push(song));
        this.currentSong = this.playlist.head;
      }

      // Play the next song in the playlist
      playNext(): Song | undefined {
        if (!this.currentSong?.next) {
          this.currentSong = this.playlist.head; // Loop to the first song
        } else {
          this.currentSong = this.currentSong.next;
        }
        return this.currentSong?.value;
      }

      // Play the previous song in the playlist
      playPrevious(): Song | undefined {
        if (!this.currentSong?.prev) {
          this.currentSong = this.playlist.tail; // Loop to the last song
        } else {
          this.currentSong = this.currentSong.prev;
        }
        return this.currentSong?.value;
      }

      // Get the current song
      getCurrentSong(): Song | undefined {
        return this.currentSong?.value;
      }

      // Loop through the playlist twice
      loopThroughPlaylist(): Song[] {
        const playedSongs: Song[] = [];
        const initialNode = this.currentSong;

        // Loop through the playlist twice
        for (let i = 0; i < this.playlist.size * 2; i++) {
          playedSongs.push(this.currentSong!.value);
          this.currentSong = this.currentSong!.next || this.playlist.head; // Loop back to the start if needed
        }

        // Reset the current song to the initial song
        this.currentSong = initialNode;
        return playedSongs;
      }
    }

    const songs = [
      { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 },
      { title: 'Hotel California', artist: 'Eagles', duration: 391 },
      { title: 'Shape of You', artist: 'Ed Sheeran', duration: 233 },
      { title: 'Billie Jean', artist: 'Michael Jackson', duration: 294 }
    ];
    let player = new Player(songs);
    // should play the next song
    player = new Player(songs);
    const firstSong = player.getCurrentSong();
    const nextSong = player.playNext();

    // Expect the next song to be "Hotel California by Eagles"
    console.log(nextSong); // { title: 'Hotel California', artist: 'Eagles', duration: 391 }
    console.log(firstSong); // { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 }

    // should play the previous song
    player = new Player(songs);
    player.playNext(); // Move to the second song
    const currentSong = player.getCurrentSong();
    const previousSong = player.playPrevious();

    // Expect the previous song to be "Bohemian Rhapsody by Queen"
    console.log(previousSong); // { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 }
    console.log(currentSong); // { title: 'Hotel California', artist: 'Eagles', duration: 391 }

    // should loop to the first song when playing next from the last song
    player = new Player(songs);
    player.playNext(); // Move to the second song
    player.playNext(); // Move to the third song
    player.playNext(); // Move to the fourth song

    const nextSongToFirst = player.playNext(); // Should loop to the first song

    // Expect the next song to be "Bohemian Rhapsody by Queen"
    console.log(nextSongToFirst); // { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 }

    // should loop to the last song when playing previous from the first song
    player = new Player(songs);
    player.playNext(); // Move to the first song
    player.playNext(); // Move to the second song
    player.playNext(); // Move to the third song
    player.playNext(); // Move to the fourth song

    const previousToLast = player.playPrevious(); // Should loop to the last song

    // Expect the previous song to be "Billie Jean by Michael Jackson"
    console.log(previousToLast); // { title: 'Billie Jean', artist: 'Michael Jackson', duration: 294 }

    // should loop through the entire playlist
    player = new Player(songs);
    const playedSongs = player.loopThroughPlaylist();

    // The expected order of songs for two loops
    console.log(playedSongs); // [
 //      { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 },
 //      { title: 'Hotel California', artist: 'Eagles', duration: 391 },
 //      { title: 'Shape of You', artist: 'Ed Sheeran', duration: 233 },
 //      { title: 'Billie Jean', artist: 'Michael Jackson', duration: 294 },
 //      { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 },
 //      { title: 'Hotel California', artist: 'Eagles', duration: 391 },
 //      { title: 'Shape of You', artist: 'Ed Sheeran', duration: 233 },
 //      { title: 'Billie Jean', artist: 'Michael Jackson', duration: 294 }
 //    ]
```

### Use DoublyLinkedList to implement LRU cache
```typescript
    interface CacheEntry<K, V> {
      key: K;
      value: V;
    }

    class LRUCache<K = string, V = any> {
      private readonly capacity: number;
      private list: DoublyLinkedList<CacheEntry<K, V>>;
      private map: Map<K, DoublyLinkedListNode<CacheEntry<K, V>>>;

      constructor(capacity: number) {
        if (capacity <= 0) {
          throw new Error('lru cache capacity must be greater than 0');
        }
        this.capacity = capacity;
        this.list = new DoublyLinkedList<CacheEntry<K, V>>();
        this.map = new Map<K, DoublyLinkedListNode<CacheEntry<K, V>>>();
      }

      // Get cached value
      get(key: K): V | undefined {
        const node = this.map.get(key);

        if (!node) return undefined;

        // Move the visited node to the head of the linked list (most recently used)
        this.moveToFront(node);

        return node.value.value;
      }

      // Set cache value
      set(key: K, value: V): void {
        // Check if it already exists
        const node = this.map.get(key);

        if (node) {
          // Update value and move to head
          node.value.value = value;
          this.moveToFront(node);
          return;
        }

        // Check capacity
        if (this.list.size >= this.capacity) {
          // Delete the least recently used element (the tail of the linked list)
          const removedNode = this.list.tail;
          if (removedNode) {
            this.map.delete(removedNode.value.key);
            this.list.pop();
          }
        }

        // Create new node and add to head
        const newEntry: CacheEntry<K, V> = { key, value };
        this.list.unshift(newEntry);

        // Save node reference in map
        const newNode = this.list.head;
        if (newNode) {
          this.map.set(key, newNode);
        }
      }

      // Move the node to the head of the linked list
      private moveToFront(node: DoublyLinkedListNode<CacheEntry<K, V>>): void {
        this.list.delete(node);
        this.list.unshift(node.value);
      }

      // Delete specific key
      delete(key: K): boolean {
        const node = this.map.get(key);
        if (!node) return false;

        // Remove from linked list
        this.list.delete(node);
        // Remove from map
        this.map.delete(key);

        return true;
      }

      // Clear cache
      clear(): void {
        this.list.clear();
        this.map.clear();
      }

      // Get the current cache size
      get size(): number {
        return this.list.size;
      }

      // Check if it is empty
      get isEmpty(): boolean {
        return this.list.isEmpty();
      }
    }

    // should set and get values correctly
    const cache = new LRUCache<string, number>(3);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);

    console.log(cache.get('a')); // 1
    console.log(cache.get('b')); // 2
    console.log(cache.get('c')); // 3

    // The least recently used element should be evicted when capacity is exceeded
    cache.clear();
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);
    cache.set('d', 4); // This will eliminate 'a'

    console.log(cache.get('a')); // undefined
    console.log(cache.get('b')); // 2
    console.log(cache.get('c')); // 3
    console.log(cache.get('d')); // 4

    // The priority of an element should be updated when it is accessed
    cache.clear();
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);

    cache.get('a'); // access 'a'
    cache.set('d', 4); // This will eliminate 'b'

    console.log(cache.get('a')); // 1
    console.log(cache.get('b')); // undefined
    console.log(cache.get('c')); // 3
    console.log(cache.get('d')); // 4

    // Should support updating existing keys
    cache.clear();
    cache.set('a', 1);
    cache.set('a', 10);

    console.log(cache.get('a')); // 10

    // Should support deleting specified keys
    cache.clear();
    cache.set('a', 1);
    cache.set('b', 2);

    console.log(cache.delete('a')); // true
    console.log(cache.get('a')); // undefined
    console.log(cache.size); // 1

    // Should support clearing cache
    cache.clear();
    cache.set('a', 1);
    cache.set('b', 2);
    cache.clear();

    console.log(cache.size); // 0
    console.log(cache.isEmpty); // true
```

### finding lyrics by timestamp in Coldplay's "Fix You"
```typescript
    // Create a DoublyLinkedList to store song lyrics with timestamps
    const lyricsList = new DoublyLinkedList<{ time: number; text: string }>();

    // Detailed lyrics with precise timestamps (in milliseconds)
    const lyrics = [
      { time: 0, text: "When you try your best, but you don't succeed" },
      { time: 4000, text: 'When you get what you want, but not what you need' },
      { time: 8000, text: "When you feel so tired, but you can't sleep" },
      { time: 12000, text: 'Stuck in reverse' },
      { time: 16000, text: 'And the tears come streaming down your face' },
      { time: 20000, text: "When you lose something you can't replace" },
      { time: 24000, text: 'When you love someone, but it goes to waste' },
      { time: 28000, text: 'Could it be worse?' },
      { time: 32000, text: 'Lights will guide you home' },
      { time: 36000, text: 'And ignite your bones' },
      { time: 40000, text: 'And I will try to fix you' }
    ];

    // Populate the DoublyLinkedList with lyrics
    lyrics.forEach(lyric => lyricsList.push(lyric));

    // Test different scenarios of lyric synchronization

    // 1. Find lyric at exact timestamp
    const exactTimeLyric = lyricsList.getBackward(lyric => lyric.value.time <= 36000);
    console.log(exactTimeLyric?.text); // 'And ignite your bones'

    // 2. Find lyric between timestamps
    const betweenTimeLyric = lyricsList.getBackward(lyric => lyric.value.time <= 22000);
    console.log(betweenTimeLyric?.text); // "When you lose something you can't replace"

    // 3. Find first lyric when timestamp is less than first entry
    const earlyTimeLyric = lyricsList.getBackward(lyric => lyric.value.time <= -1000);
    console.log(earlyTimeLyric); // undefined

    // 4. Find last lyric when timestamp is after last entry
    const lateTimeLyric = lyricsList.getBackward(lyric => lyric.value.time <= 50000);
    console.log(lateTimeLyric?.text); // 'And I will try to fix you'
```

### cpu process schedules
```typescript
    class Process {
      constructor(
        public id: number,
        public priority: number
      ) {}

      execute(): string {
        return `Process ${this.id} executed.`;
      }
    }

    class Scheduler {
      private queue: DoublyLinkedList<Process>;

      constructor() {
        this.queue = new DoublyLinkedList<Process>();
      }

      addProcess(process: Process): void {
        // Insert processes into a queue based on priority, keeping priority in descending order
        let current = this.queue.head;
        while (current && current.value.priority >= process.priority) {
          current = current.next;
        }

        if (!current) {
          this.queue.push(process);
        } else {
          this.queue.addBefore(current, process);
        }
      }

      executeNext(): string | undefined {
        // Execute tasks at the head of the queue in order
        const process = this.queue.shift();
        return process ? process.execute() : undefined;
      }

      listProcesses(): string[] {
        return this.queue.toArray().map(process => `Process ${process.id} (Priority: ${process.priority})`);
      }

      clear(): void {
        this.queue.clear();
      }
    }

    // should add processes based on priority
    let scheduler = new Scheduler();
    scheduler.addProcess(new Process(1, 10));
    scheduler.addProcess(new Process(2, 20));
    scheduler.addProcess(new Process(3, 15));

    console.log(scheduler.listProcesses()); // [
 //      'Process 2 (Priority: 20)',
 //      'Process 3 (Priority: 15)',
 //      'Process 1 (Priority: 10)'
 //    ]

    // should execute the highest priority process
    scheduler = new Scheduler();
    scheduler.addProcess(new Process(1, 10));
    scheduler.addProcess(new Process(2, 20));

    console.log(scheduler.executeNext()); // 'Process 2 executed.'
    console.log(scheduler.listProcesses()); // ['Process 1 (Priority: 10)']

    // should clear all processes
    scheduler = new Scheduler();
    scheduler.addProcess(new Process(1, 10));
    scheduler.addProcess(new Process(2, 20));

    scheduler.clear();
    console.log(scheduler.listProcesses()); // []
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
<td>Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SinglyLinkedList.html"><span>SinglyLinkedList</span></a></td>
</tr>
<tr>
<td>Singly Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/SinglyLinkedList.html"><span>SinglyLinkedList</span></a></td>
</tr>
<tr>
<td>Doubly Linked List</td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><img src="https://raw.githubusercontent.com/zrwusa/assets/master/images/data-structure-typed/assets/tick.svg" alt=""></td>
<td><a href="https://data-structure-typed-docs.vercel.app/classes/DoublyLinkedList.html"><span>DoublyLinkedList</span></a></td>
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
    <td>DoublyLinkedList&lt;E&gt;</td>
    <td>list&lt;T&gt;</td>
    <td>LinkedList&lt;E&gt;</td>
    <td>-</td>
  </tr>
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
      <div class='collapsible level0' ><span class='json-to-html-label'>doubly-linked-list</span></div>
      <div class="content"><table style="display: table; width:100%; table-layout: fixed;"><tr><th>test name</th><th>time taken (ms)</th><th>executions per sec</th><th>sample deviation</th></tr><tr><td>1,000,000 push</td><td>221.57</td><td>4.51</td><td>0.03</td></tr><tr><td>1,000,000 unshift</td><td>229.02</td><td>4.37</td><td>0.07</td></tr><tr><td>1,000,000 unshift & shift</td><td>169.21</td><td>5.91</td><td>0.02</td></tr><tr><td>1,000,000 insertBefore</td><td>314.48</td><td>3.18</td><td>0.07</td></tr></table></div>
    </div>
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




