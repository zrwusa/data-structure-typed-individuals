import {TreeMultimap, TreeMultimapNode} from '../src';

describe('TreeMultimap operations test', () => {
    it('should perform various operations on a Binary Search Tree with numeric values', () => {
        const treeMultiset = new TreeMultimap();

        expect(treeMultiset instanceof TreeMultimap);
        treeMultiset.add(11, 11);
        treeMultiset.add(3, 3);
        const idAndValues = [11, 3, 15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5];
        treeMultiset.addMany(idAndValues, idAndValues);
        expect(treeMultiset.root instanceof TreeMultimapNode);

        if (treeMultiset.root) expect(treeMultiset.root.id == 11);

        expect(treeMultiset.size).toBe(16);
        expect(treeMultiset.count).toBe(18);
        expect(treeMultiset.BFS('id'));

        expect(treeMultiset.has(6));

        expect(treeMultiset.getHeight(6)).toBe(3);
        expect(treeMultiset.getDepth(6)).toBe(1);
        const nodeId10 = treeMultiset.get(10);
        expect(nodeId10?.id).toBe(10);

        const nodeVal9 = treeMultiset.get(9, 'val');
        expect(nodeVal9?.id).toBe(9);

        const nodesByCount1 = treeMultiset.getNodesByCount(1);
        expect(nodesByCount1.length).toBe(14);

        const nodesByCount2 = treeMultiset.getNodesByCount(2);
        expect(nodesByCount2.length).toBe(2);
        const leftMost = treeMultiset.getLeftMost();
        expect(leftMost?.id).toBe(1);

        const node15 = treeMultiset.get(15);
        const minNodeBySpecificNode = node15 && treeMultiset.getLeftMost(node15);
        expect(minNodeBySpecificNode?.id).toBe(12);

        const subTreeSum = node15 && treeMultiset.subTreeSum(15);
        expect(subTreeSum).toBe(70);
        const lesserSum = treeMultiset.lesserSum(10);
        expect(lesserSum).toBe(45);

        expect(node15 instanceof TreeMultimapNode);
        if (node15 instanceof TreeMultimapNode) {
            const subTreeAdd = treeMultiset.subTreeAddCount(15, 1);
            expect(subTreeAdd);
        }
        const node11 = treeMultiset.get(11);
        expect(node11 instanceof TreeMultimapNode);
        if (node11 instanceof TreeMultimapNode) {
            const allGreaterNodesAdded = treeMultiset.allGreaterNodesAddCount(11, 2);
            expect(allGreaterNodesAdded);
        }

        const dfsInorderNodes = treeMultiset.DFS('in', 'node');
        expect(dfsInorderNodes[0].id).toBe(1);
        expect(dfsInorderNodes[dfsInorderNodes.length - 1].id).toBe(16);
        expect(treeMultiset.isPerfectlyBalanced()).toBe(false);

        treeMultiset.perfectlyBalance();

        expect(treeMultiset.isPerfectlyBalanced()).toBe(true);
        expect(treeMultiset.isAVLBalanced()).toBe(true);

        const bfsNodesAfterBalanced = treeMultiset.BFS('node');
        expect(bfsNodesAfterBalanced[0].id).toBe(8);
        expect(bfsNodesAfterBalanced[bfsNodesAfterBalanced.length - 1].id).toBe(16);

        const removed11 = treeMultiset.remove(11, true);
        expect(removed11 instanceof Array);
        expect(removed11[0]);
        expect(removed11[0].deleted);

        if (removed11[0].deleted) expect(removed11[0].deleted.id).toBe(11);

        expect(treeMultiset.isAVLBalanced()).toBe(true);

        expect(treeMultiset.getHeight(15)).toBe(1);

        const removed1 = treeMultiset.remove(1, true);
        expect(removed1 instanceof Array);
        expect(removed1[0]);
        expect(removed1[0].deleted);
        if (removed1[0].deleted) expect(removed1[0].deleted.id).toBe(1);

        expect(treeMultiset.isAVLBalanced()).toBe(true);

        expect(treeMultiset.getHeight()).toBe(4);

        const removed4 = treeMultiset.remove(4, true);
        expect(removed4 instanceof Array);
        expect(removed4[0]);
        expect(removed4[0].deleted);
        if (removed4[0].deleted) expect(removed4[0].deleted.id).toBe(4);

        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(4);

        const removed10 = treeMultiset.remove(10, true);
        expect(removed10 instanceof Array);
        expect(removed10[0]);
        expect(removed10[0].deleted);
        if (removed10[0].deleted) expect(removed10[0].deleted.id).toBe(10);
        expect(treeMultiset.isAVLBalanced()).toBe(true);

        expect(treeMultiset.getHeight()).toBe(3);

        const removed15 = treeMultiset.remove(15, true);
        expect(removed15 instanceof Array);
        expect(removed15[0]);
        expect(removed15[0].deleted);
        if (removed15[0].deleted) expect(removed15[0].deleted.id).toBe(15);

        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(3);

        const removed5 = treeMultiset.remove(5, true);
        expect(removed5 instanceof Array);
        expect(removed5[0]);
        expect(removed5[0].deleted);
        if (removed5[0].deleted) expect(removed5[0].deleted.id).toBe(5);

        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(3);

        const removed13 = treeMultiset.remove(13, true);
        expect(removed13 instanceof Array);
        expect(removed13[0]);
        expect(removed13[0].deleted);
        if (removed13[0].deleted) expect(removed13[0].deleted.id).toBe(13);
        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(3);

        const removed3 = treeMultiset.remove(3, true);
        expect(removed3 instanceof Array);
        expect(removed3[0]);
        expect(removed3[0].deleted);
        if (removed3[0].deleted) expect(removed3[0].deleted.id).toBe(3);
        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(3);

        const removed8 = treeMultiset.remove(8, true);
        expect(removed8 instanceof Array);
        expect(removed8[0]);
        expect(removed8[0].deleted);
        if (removed8[0].deleted) expect(removed8[0].deleted.id).toBe(8);
        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(3);

        const removed6 = treeMultiset.remove(6, true);
        expect(removed6 instanceof Array);
        expect(removed6[0]);
        expect(removed6[0].deleted);
        if (removed6[0].deleted) expect(removed6[0].deleted.id).toBe(6);
        expect(treeMultiset.remove(6, true).length).toBe(0);
        expect(treeMultiset.isAVLBalanced()).toBe(true);

        expect(treeMultiset.getHeight()).toBe(2);

        const removed7 = treeMultiset.remove(7, true);
        expect(removed7 instanceof Array);
        expect(removed7[0]);
        expect(removed7[0].deleted);
        if (removed7[0].deleted) expect(removed7[0].deleted.id).toBe(7);
        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(2);

        const removed9 = treeMultiset.remove(9, true);
        expect(removed9 instanceof Array);
        expect(removed9[0]);
        expect(removed9[0].deleted);
        if (removed9[0].deleted) expect(removed9[0].deleted.id).toBe(9);
        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(2);

        const removed14 = treeMultiset.remove(14, true);
        expect(removed14 instanceof Array);
        expect(removed14[0]);
        expect(removed14[0].deleted);
        if (removed14[0].deleted) expect(removed14[0].deleted.id).toBe(14);
        expect(treeMultiset.isAVLBalanced()).toBe(true);
        expect(treeMultiset.getHeight()).toBe(1);

        expect(treeMultiset.isAVLBalanced()).toBe(true);

        const bfsIDs = treeMultiset.BFS();

        expect(bfsIDs[0]).toBe(12);
        expect(bfsIDs[1]).toBe(2);
        expect(bfsIDs[2]).toBe(16);

        const bfsNodes = treeMultiset.BFS('node');

        expect(bfsNodes[0].id).toBe(12);
        expect(bfsNodes[1].id).toBe(2);
        expect(bfsNodes[2].id).toBe(16);

        expect(treeMultiset.count).toBe(9);
    });

    it('should perform various operations on a Binary Search Tree with object values', () => {
        const objTreeMultimap = new TreeMultimap<TreeMultimapNode<{ id: number; keyA: number }>>();
        expect(objTreeMultimap).toBeInstanceOf(TreeMultimap);
        objTreeMultimap.add(11, {id: 11, keyA: 11});
        objTreeMultimap.add(3, {id: 3, keyA: 3});
        const values = [
            {id: 15, keyA: 15},
            {id: 1, keyA: 1},
            {id: 8, keyA: 8},
            {id: 13, keyA: 13},
            {id: 16, keyA: 16},
            {id: 2, keyA: 2},
            {id: 6, keyA: 6},
            {id: 9, keyA: 9},
            {id: 12, keyA: 12},
            {id: 14, keyA: 14},
            {id: 4, keyA: 4},
            {id: 7, keyA: 7},
            {id: 10, keyA: 10},
            {id: 5, keyA: 5}
        ];

        objTreeMultimap.addMany(
            values.map(item => item.id),
            values
        );

        expect(objTreeMultimap.root).toBeInstanceOf(TreeMultimapNode);

        if (objTreeMultimap.root) expect(objTreeMultimap.root.id).toBe(11);

        expect(objTreeMultimap.count).toBe(16);

        expect(objTreeMultimap.has(6)).toBe(true);

        // const node6 = objTreeMultimap.get(6);
        // expect(node6 && objTreeMultimap.getHeight(node6)).toBe(2);
        // expect(node6 && objTreeMultimap.getDepth(node6)).toBe(3);
        //
        // const nodeId10 = objTreeMultimap.get(10, 'id');
        // expect(nodeId10?.id).toBe(10);
        //
        // const nodeVal9 = objTreeMultimap.get(9, 'id');
        // expect(nodeVal9?.id).toBe(9);
        //
        // const nodesByCount1 = objTreeMultimap.getNodesByCount(1);
        // expect(nodesByCount1.length).toBe(16);
        //
        // const leftMost = objTreeMultimap.getLeftMost();
        // expect(leftMost?.id).toBe(1);
        //
        // const node15 = objTreeMultimap.get(15);
        // expect(node15?.val).toEqual({id: 15, keyA: 15});
        // const minNodeBySpecificNode = node15 && objTreeMultimap.getLeftMost(node15);
        // expect(minNodeBySpecificNode?.id).toBe(12);
        //
        // const subTreeSum = node15 && objTreeMultimap.subTreeSum(node15);
        // expect(subTreeSum).toBe(70);
        //
        // const lesserSum = objTreeMultimap.lesserSum(10);
        // expect(lesserSum).toBe(45);
        //
        // expect(node15).toBeInstanceOf(TreeMultimapNode);
        // if (node15 instanceof TreeMultimapNode) {
        //     const subTreeAdd = objTreeMultimap.subTreeAddCount(node15, 1);
        //     expect(subTreeAdd).toBeDefined();
        // }
        //
        // const node11 = objTreeMultimap.get(11);
        // expect(node11).toBeInstanceOf(TreeMultimapNode);
        // if (node11 instanceof TreeMultimapNode) {
        //     const allGreaterNodesAdded = objTreeMultimap.allGreaterNodesAddCount(node11, 2);
        //     expect(allGreaterNodesAdded).toBeDefined();
        // }
        //
        // const dfsInorderNodes = objTreeMultimap.DFS('in', 'node');
        // expect(dfsInorderNodes[0].id).toBe(1);
        // expect(dfsInorderNodes[dfsInorderNodes.length - 1].id).toBe(16);
        //
        // objTreeMultimap.perfectlyBalance();
        // expect(objTreeMultimap.isPerfectlyBalanced()).toBe(true);
        //
        // const bfsNodesAfterBalanced = objTreeMultimap.BFS('node');
        // expect(bfsNodesAfterBalanced[0].id).toBe(8);
        // expect(bfsNodesAfterBalanced[bfsNodesAfterBalanced.length - 1].id).toBe(16);
        //
        // const removed11 = objTreeMultimap.remove(11, true);
        // expect(removed11).toBeInstanceOf(Array);
        // expect(removed11[0]).toBeDefined();
        // expect(removed11[0].deleted).toBeDefined();
        //
        // if (removed11[0].deleted) expect(removed11[0].deleted.id).toBe(11);
        //
        // expect(objTreeMultimap.isAVLBalanced()).toBe(true);
        //
        // expect(node15 && objTreeMultimap.getHeight(node15)).toBe(2);
        //
        // const removed1 = objTreeMultimap.remove(1, true);
        // expect(removed1).toBeInstanceOf(Array);
        // expect(removed1[0]).toBeDefined();
        // expect(removed1[0].deleted).toBeDefined();
        // if (removed1[0].deleted) expect(removed1[0].deleted.id).toBe(1);
        //
        // expect(objTreeMultimap.isAVLBalanced()).toBe(true);
        //
        // expect(objTreeMultimap.getHeight()).toBe(4);
        //
        // const removed4 = objTreeMultimap.remove(4, true);
        // expect(removed4).toBeInstanceOf(Array);
        // expect(removed4[0]).toBeDefined();
        // expect(removed4[0].deleted).toBeDefined();
        // if (removed4[0].deleted) expect(removed4[0].deleted.id).toBe(4);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(true);
        // expect(objTreeMultimap.getHeight()).toBe(4);
        //
        // const removed10 = objTreeMultimap.remove(10, true);
        // expect(removed10).toBeInstanceOf(Array);
        // expect(removed10[0]).toBeDefined();
        // expect(removed10[0].deleted).toBeDefined();
        // if (removed10[0].deleted) expect(removed10[0].deleted.id).toBe(10);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(false);
        // expect(objTreeMultimap.getHeight()).toBe(4);
        //
        // const removed15 = objTreeMultimap.remove(15, true);
        // expect(removed15).toBeInstanceOf(Array);
        // expect(removed15[0]).toBeDefined();
        // expect(removed15[0].deleted).toBeDefined();
        // if (removed15[0].deleted) expect(removed15[0].deleted.id).toBe(15);
        //
        // expect(objTreeMultimap.isAVLBalanced()).toBe(true);
        // expect(objTreeMultimap.getHeight()).toBe(3);
        //
        // const removed5 = objTreeMultimap.remove(5, true);
        // expect(removed5).toBeInstanceOf(Array);
        // expect(removed5[0]).toBeDefined();
        // expect(removed5[0].deleted).toBeDefined();
        // if (removed5[0].deleted) expect(removed5[0].deleted.id).toBe(5);
        //
        // expect(objTreeMultimap.isAVLBalanced()).toBe(true);
        // expect(objTreeMultimap.getHeight()).toBe(3);
        //
        // const removed13 = objTreeMultimap.remove(13, true);
        // expect(removed13).toBeInstanceOf(Array);
        // expect(removed13[0]).toBeDefined();
        // expect(removed13[0].deleted).toBeDefined();
        // if (removed13[0].deleted) expect(removed13[0].deleted.id).toBe(13);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(true);
        // expect(objTreeMultimap.getHeight()).toBe(3);
        //
        // const removed3 = objTreeMultimap.remove(3, true);
        // expect(removed3).toBeInstanceOf(Array);
        // expect(removed3[0]).toBeDefined();
        // expect(removed3[0].deleted).toBeDefined();
        // if (removed3[0].deleted) expect(removed3[0].deleted.id).toBe(3);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(false);
        // expect(objTreeMultimap.getHeight()).toBe(3);
        //
        // const removed8 = objTreeMultimap.remove(8, true);
        // expect(removed8).toBeInstanceOf(Array);
        // expect(removed8[0]).toBeDefined();
        // expect(removed8[0].deleted).toBeDefined();
        // if (removed8[0].deleted) expect(removed8[0].deleted.id).toBe(8);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(true);
        // expect(objTreeMultimap.getHeight()).toBe(3);
        //
        // const removed6 = objTreeMultimap.remove(6, true);
        // expect(removed6).toBeInstanceOf(Array);
        // expect(removed6[0]).toBeDefined();
        // expect(removed6[0].deleted).toBeDefined();
        // if (removed6[0].deleted) expect(removed6[0].deleted.id).toBe(6);
        // expect(objTreeMultimap.remove(6, true).length).toBe(0);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(false);
        // expect(objTreeMultimap.getHeight()).toBe(3);
        //
        // const removed7 = objTreeMultimap.remove(7, true);
        // expect(removed7).toBeInstanceOf(Array);
        // expect(removed7[0]).toBeDefined();
        // expect(removed7[0].deleted).toBeDefined();
        // if (removed7[0].deleted) expect(removed7[0].deleted.id).toBe(7);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(false);
        // expect(objTreeMultimap.getHeight()).toBe(3);
        //
        // const removed9 = objTreeMultimap.remove(9, true);
        // expect(removed9).toBeInstanceOf(Array);
        // expect(removed9[0]).toBeDefined();
        // expect(removed9[0].deleted).toBeDefined();
        // if (removed9[0].deleted) expect(removed9[0].deleted.id).toBe(9);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(false);
        // expect(objTreeMultimap.getHeight()).toBe(3);
        //
        // const removed14 = objTreeMultimap.remove(14, true);
        // expect(removed14).toBeInstanceOf(Array);
        // expect(removed14[0]).toBeDefined();
        // expect(removed14[0].deleted).toBeDefined();
        // if (removed14[0].deleted) expect(removed14[0].deleted.id).toBe(14);
        // expect(objTreeMultimap.isAVLBalanced()).toBe(false);
        // expect(objTreeMultimap.getHeight()).toBe(2);
        //
        //
        // expect(objTreeMultimap.isAVLBalanced()).toBe(false);
        //
        // const bfsIDs = objTreeMultimap.BFS();
        // expect(bfsIDs[0]).toBe(2);
        // expect(bfsIDs[1]).toBe(12);
        // expect(bfsIDs[2]).toBe(16);
        //
        // const bfsNodes = objTreeMultimap.BFS('node');
        // expect(bfsNodes[0].id).toBe(2);
        // expect(bfsNodes[1].id).toBe(12);
        // expect(bfsNodes[2].id).toBe(16);
        //
        // expect(objTreeMultimap.count).toBe(5);
    });
});

describe('TreeMultimap Performance test', function () {
    // const treeMS = new TreeMultimap<TreeMultimapNode<number>>();
    // const inputSizes = [100]; // Adjust input sizes as needed
    //
    // // Define a function to calculate the expected O(n log n) time
    // function expectedTime(n: number): number {
    //   return n * Math.log(n);
    // }

    it(`Observe the time consumption of TreeMultimap.add fitting O(n log n)`, function () {
        // // Create a benchmark suite
        // const suite = new Benchmark.Suite();
        // // Define a function to generate a random array of a given size
        // function generateRandomArray(size: number): number[] {
        //   const arr: number[] = [];
        //   for (let i = 0; i < size; i++) {
        //     arr.push(Math.floor(Math.random() * size));
        //   }
        //   return arr;
        // }
        // const inputArray = generateRandomArray(inputSizes[0]);
        //
        // suite.add(`TreeMultimap addMany (n=${inputSizes[0]})`, () => {
        //   treeMS.addMany([...inputArray]);
        // });
        //
        // // Run the benchmarks
        // suite
        //   .on('cycle', (event: any) => {
        //     const benchmark = event.target;
        //     const n = parseInt(benchmark.name.split('=')[1]);
        //     const observedTime = benchmark.times.elapsed;
        //     const expected = expectedTime(n);
        //     console.log(`Input size (n): ${n}, Observed time: ${observedTime.toFixed(2)}ms, Expected time: ${expected.toFixed(2)}ms`);
        //   })
        //   .on('complete', () => {
        //     console.log(`Benchmark (n=${inputSizes[0]}) completed.`);
        //     done(); // Call done to indicate the test is complete
        //   })
        //   .run({async: true});
    });
});
