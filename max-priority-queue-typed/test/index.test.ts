import {MaxPriorityQueue} from '../src';

describe('MaxPriorityQueue Operation Test', () => {
    it('should add elements and maintain heap property', () => {
        const priorityQueue = new MaxPriorityQueue<number>();

        priorityQueue.add(5);
        priorityQueue.add(3);
        priorityQueue.add(7);
        priorityQueue.add(1);

        expect(priorityQueue.poll()).toBe(7);
        expect(priorityQueue.poll()).toBe(5);
        expect(priorityQueue.poll()).toBe(3);
        expect(priorityQueue.poll()).toBe(1);
    });

    it('should add elements and maintain heap property in a object MaxPriorityQueue', () => {
        const priorityQueue = new MaxPriorityQueue<{ keyA: number }>({
            nodes: [{keyA: 5}, {keyA: 3}, {keyA: 1}],
            comparator: (a, b) => b.keyA - a.keyA
        });

        priorityQueue.add({keyA: 7});

        expect(priorityQueue.poll()?.keyA).toBe(7);
        expect(priorityQueue.poll()?.keyA).toBe(5);
        expect(priorityQueue.poll()?.keyA).toBe(3);
        expect(priorityQueue.poll()?.keyA).toBe(1);
    });

    it('should return and remove the smallest element', () => {
        const priorityQueue = new MaxPriorityQueue<number>();
        priorityQueue.add(5);
        priorityQueue.add(3);
        priorityQueue.add(7);

        expect(priorityQueue.poll()).toBe(7);
        expect(priorityQueue.poll()).toBe(5);
        expect(priorityQueue.size).toBe(1);
    });

    it('should create a clone of the priority queue', () => {
        const priorityQueue = new MaxPriorityQueue<number>();
        priorityQueue.add(5);
        priorityQueue.add(3);
        priorityQueue.add(7);

        const clone = priorityQueue.clone();
        expect(clone.poll()).toBe(7);
        expect(clone.poll()).toBe(5);
        expect(clone.poll()).toBe(3);
        expect(clone.isEmpty()).toBe(true);
    });

    it('should correctly heapify an array', () => {
        const array = [5, 3, 7, 1];
        const heap = MaxPriorityQueue.heapify<number>({nodes: array});

        expect(heap.poll()).toBe(7);
        expect(heap.poll()).toBe(5);
        expect(heap.poll()).toBe(3);
        expect(heap.poll()).toBe(1);
    });

    it('should correctly heapify an object array', () => {
        const nodes = [{keyA: 5}, {keyA: 3}, {keyA: 7}, {keyA: 1}];
        const maxPQ = MaxPriorityQueue.heapify<{ keyA: number }>({nodes, comparator: (a, b) => b.keyA - a.keyA});

        expect(maxPQ.poll()?.keyA).toBe(7);
        expect(maxPQ.poll()?.keyA).toBe(5);
        expect(maxPQ.poll()?.keyA).toBe(3);
        expect(maxPQ.poll()?.keyA).toBe(1);
    });
});