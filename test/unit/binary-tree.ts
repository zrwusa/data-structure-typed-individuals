import {BinaryTree} from "../../bst-typed/src";

describe('BinaryTree', () => {
    it('operations', () => {
        const biTree = new BinaryTree<number>([1,3,42]);
        expect(biTree.dfs()).toEqual([1,3,42])

    })
})