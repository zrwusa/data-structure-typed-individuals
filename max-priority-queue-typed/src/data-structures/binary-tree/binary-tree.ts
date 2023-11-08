/**
 * data-structure-typed
 *
 * @author Tyler Zeng
 * @copyright Copyright (c) 2022 Tyler Zeng <zrwusa@gmail.com>
 * @license MIT License
 */

import type {BinaryTreeNodeNested, BinaryTreeOptions, BTNCallback, BTNKey} from '../../types';
import {BinaryTreeDeletedResult, DFSOrderPattern, FamilyPosition, IterationType} from '../../types';
import {IBinaryTree} from '../../interfaces';
import {trampoline} from '../../utils';
import {Queue} from '../queue';

/**
 * Represents a node in a binary tree.
 * @template V - The type of data stored in the node.
 * @template N - The type of the family relationship in the binary tree.
 */
export class BinaryTreeNode<V = any, N extends BinaryTreeNode<V, N> = BinaryTreeNode<V, BinaryTreeNodeNested<V>>> {
  /**
   * The key associated with the node.
   */
  key: BTNKey;

  /**
   * The value stored in the node.
   */
  value: V | undefined;

  /**
   * The parent node of the current node.
   */
  parent: N | null | undefined;

  /**
   * Creates a new instance of BinaryTreeNode.
   * @param {BTNKey} key - The key associated with the node.
   * @param {V} value - The value stored in the node.
   */
  constructor(key: BTNKey, value?: V) {
    this.key = key;
    this.value = value;
  }

  protected _left: N | null | undefined;

  /**
   * Get the left child node.
   */
  get left(): N | null | undefined {
    return this._left;
  }

  /**
   * Set the left child node.
   * @param {N | null | undefined} v - The left child node.
   */
  set left(v: N | null | undefined) {
    if (v) {
      v.parent = this as unknown as N;
    }
    this._left = v;
  }

  protected _right: N | null | undefined;

  /**
   * Get the right child node.
   */
  get right(): N | null | undefined {
    return this._right;
  }

  /**
   * Set the right child node.
   * @param {N | null | undefined} v - The right child node.
   */
  set right(v: N | null | undefined) {
    if (v) {
      v.parent = this as unknown as N;
    }
    this._right = v;
  }

  /**
   * Get the position of the node within its family.
   * @returns {FamilyPosition} - The family position of the node.
   */
  get familyPosition(): FamilyPosition {
    const that = this as unknown as N;
    if (!this.parent) {
      return this.left || this.right ? FamilyPosition.ROOT : FamilyPosition.ISOLATED;
    }

    if (this.parent.left === that) {
      return this.left || this.right ? FamilyPosition.ROOT_LEFT : FamilyPosition.LEFT;
    } else if (this.parent.right === that) {
      return this.left || this.right ? FamilyPosition.ROOT_RIGHT : FamilyPosition.RIGHT;
    }

    return FamilyPosition.MAL_NODE;
  }
}

/**
 * Represents a binary tree data structure.
 * @template N - The type of the binary tree's nodes.
 */
export class BinaryTree<V = any, N extends BinaryTreeNode<V, N> = BinaryTreeNode<V, BinaryTreeNodeNested<V>>>
  implements IBinaryTree<V, N>
{
  iterationType: IterationType = IterationType.ITERATIVE;

  /**
   * Creates a new instance of BinaryTree.
   * @param {BinaryTreeOptions} [options] - The options for the binary tree.
   */
  constructor(options?: BinaryTreeOptions) {
    if (options !== undefined) {
      const {iterationType = IterationType.ITERATIVE} = options;
      this.iterationType = iterationType;
    }
  }

  protected _root: N | null | undefined = undefined;

  /**
   * Get the root node of the binary tree.
   */
  get root(): N | null | undefined {
    return this._root;
  }

  protected _size = 0;

  /**
   * Get the number of nodes in the binary tree.
   */
  get size(): number {
    return this._size;
  }

  /**
   * Creates a new instance of BinaryTreeNode with the given key and value.
   * @param {BTNKey} key - The key for the new node.
   * @param {V} value - The value for the new node.
   * @returns {N} - The newly created BinaryTreeNode.
   */
  createNode(key: BTNKey, value?: V): N {
    return new BinaryTreeNode<V, N>(key, value) as N;
  }

  /**
   * Clear the binary tree, removing all nodes.
   */
  clear() {
    this._setRoot(undefined);
    this._size = 0;
  }

  /**
   * Check if the binary tree is empty.
   * @returns {boolean} - True if the binary tree is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Add a node with the given key and value to the binary tree.
   * @param {BTNKey | N | null} keyOrNode - The key or node to add to the binary tree.
   * @param {V} value - The value for the new node (optional).
   * @returns {N | null | undefined} - The inserted node, or null if nothing was inserted, or undefined if the operation failed.
   */
  add(keyOrNode: BTNKey | N | null | undefined, value?: V): N | null | undefined {
    const _bfs = (root: N, newNode: N | null): N | undefined | null => {
      const queue = new Queue<N | null>([root]);
      while (queue.size > 0) {
        const cur = queue.shift();
        if (cur) {
          if (newNode && cur.key === newNode.key) {
            cur.value = newNode.value;
            return;
          }
          const inserted = this._addTo(newNode, cur);
          if (inserted !== undefined) return inserted;
          if (cur.left) queue.push(cur.left);
          if (cur.right) queue.push(cur.right);
        } else return;
      }
      return;
    };

    let inserted: N | null | undefined, needInsert: N | null;

    if (keyOrNode === null) {
      needInsert = null;
    } else if (typeof keyOrNode === 'number') {
      needInsert = this.createNode(keyOrNode, value);
    } else if (keyOrNode instanceof BinaryTreeNode) {
      needInsert = keyOrNode;
    } else {
      return;
    }

    // const key = typeof keyOrNode === 'number' ? keyOrNode : keyOrNode ? keyOrNode.key : undefined;
    // const existNode = key !== undefined ? this.getNode(key, (node: N) => node.key) : undefined;

    if (this.root) {
      // if (existNode) {
      //   existNode.value = value;
      //   inserted = existNode;
      // } else {
      inserted = _bfs(this.root, needInsert);
      // }
    } else {
      this._setRoot(needInsert);
      if (needInsert !== null) {
        this._size = 1;
      } else {
        this._size = 0;
      }
      inserted = this.root;
    }
    return inserted;
  }

  /**
   * The `addMany` function takes an array of binary tree node IDs or nodes, and optionally an array of corresponding data
   * values, and adds them to the binary tree.
   * @param {(BTNKey | null)[] | (N | null)[]} keysOrNodes - An array of BTNKey or BinaryTreeNode
   * objects, or null values.
   * @param {V[]} [values] - The `values` parameter is an optional array of values (`V[]`) that corresponds to
   * the nodes or node IDs being added. It is used to set the value of each node being added. If `values` is not provided,
   * the value of the nodes will be `undefined`.
   * @returns The function `addMany` returns an array of `N`, `null`, or `undefined` values.
   */
  addMany(keysOrNodes: (BTNKey | null | undefined)[] | (N | null | undefined)[], values?: V[]): (N | null | undefined)[] {
    // TODO not sure addMany not be run multi times
    return keysOrNodes.map((keyOrNode, i) => {
      if (keyOrNode instanceof BinaryTreeNode) {
        return this.add(keyOrNode.key, keyOrNode.value);
      }

      if (keyOrNode === null) {
        return this.add(null);
      }

      const value = values?.[i];
      return this.add(keyOrNode, value);
    });
  }

  /**
   * The `refill` function clears the binary tree and adds multiple nodes with the given IDs or nodes and optional data.
   * @param {(BTNKey | N)[]} keysOrNodes - The `keysOrNodes` parameter is an array that can contain either
   * `BTNKey` or `N` values.
   * @param {N[] | Array<V>} [data] - The `data` parameter is an optional array of values that will be assigned to
   * the nodes being added. If provided, the length of the `data` array should be equal to the length of the `keysOrNodes`
   * array. Each value in the `data` array will be assigned to the
   * @returns The method is returning a boolean value.
   */
  refill(keysOrNodes: (BTNKey | null | undefined)[] | (N | null | undefined)[], data?: Array<V>): boolean {
    this.clear();
    return keysOrNodes.length === this.addMany(keysOrNodes, data).length;
  }

  delete<C extends BTNCallback<N, BTNKey>>(identifier: BTNKey, callback?: C): BinaryTreeDeletedResult<N>[];

  delete<C extends BTNCallback<N, N>>(identifier: N | null | undefined, callback?: C): BinaryTreeDeletedResult<N>[];

  delete<C extends BTNCallback<N>>(identifier: ReturnType<C>, callback: C): BinaryTreeDeletedResult<N>[];

  /**
   * The `delete` function removes a node from a binary search tree and returns the deleted node along
   * with the parent node that needs to be balanced.
   * a key (`BTNKey`). If it is a key, the function will find the corresponding node in the
   * binary tree.
   * @returns an array of `BinaryTreeDeletedResult<N>` objects.
   * @param {ReturnType<C>} identifier - The `identifier` parameter is either a
   * `BTNKey` or a generic type `N`. It represents the property of the node that we are
   * searching for. It can be a specific key value or any other property of the node.
   * @param callback - The `callback` parameter is a function that takes a node as input and returns a
   * value. This value is compared with the `identifier` parameter to determine if the node should be
   * included in the result. The `callback` parameter has a default value of
   * `this.defaultOneParamCallback`, which
   */
  delete<C extends BTNCallback<N>>(
    identifier: ReturnType<C> | null | undefined,
    callback: C = this.defaultOneParamCallback as C
  ): BinaryTreeDeletedResult<N>[] {
    const bstDeletedResult: BinaryTreeDeletedResult<N>[] = [];
    if (!this.root) return bstDeletedResult;
    if ((identifier as any) instanceof BinaryTreeNode) callback = (node => node) as C;

    const curr = this.getNode(identifier, callback);
    if (!curr) return bstDeletedResult;

    const parent: N | null | undefined = curr?.parent ? curr.parent : null;
    let needBalanced: N | null | undefined = null,
      orgCurrent = curr;

    if (!curr.left) {
      if (!parent) {
        // Handle the case when there's only one root node
        this._setRoot(null);
      } else {
        const {familyPosition: fp} = curr;
        if (fp === FamilyPosition.LEFT || fp === FamilyPosition.ROOT_LEFT) {
          parent.left = curr.right;
        } else if (fp === FamilyPosition.RIGHT || fp === FamilyPosition.ROOT_RIGHT) {
          parent.right = curr.right;
        }
        needBalanced = parent;
      }
    } else {
      const leftSubTreeRightMost = curr.left ? this.getRightMost(curr.left) : null;
      if (leftSubTreeRightMost) {
        const parentOfLeftSubTreeMax = leftSubTreeRightMost.parent;
        orgCurrent = this._swap(curr, leftSubTreeRightMost);
        if (parentOfLeftSubTreeMax) {
          if (parentOfLeftSubTreeMax.right === leftSubTreeRightMost)
            parentOfLeftSubTreeMax.right = leftSubTreeRightMost.left;
          else parentOfLeftSubTreeMax.left = leftSubTreeRightMost.left;
          needBalanced = parentOfLeftSubTreeMax;
        }
      }
    }
    this._size = this.size - 1;

    bstDeletedResult.push({deleted: orgCurrent, needBalanced});
    return bstDeletedResult;
  }

  /**
   * The function `getDepth` calculates the depth of a given node in a binary tree relative to a
   * specified root node.
   * @param {BTNKey | N | null | undefined} distNode - The `distNode` parameter represents the node
   * whose depth we want to find in the binary tree. It can be either a node object (`N`), a key value
   * of the node (`BTNKey`), or `null`.
   * @param {BTNKey | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
   * starting node from which we want to calculate the depth. It can be either a node object or the key
   * of a node in the binary tree. If no value is provided for `beginRoot`, it defaults to the root
   * node of the binary tree.
   * @returns the depth of the `distNode` relative to the `beginRoot`.
   */
  getDepth(distNode: BTNKey | N | null | undefined, beginRoot: BTNKey | N | null | undefined = this.root): number {
    if (typeof distNode === 'number') distNode = this.getNode(distNode);
    if (typeof beginRoot === 'number') beginRoot = this.getNode(beginRoot);
    let depth = 0;
    while (distNode?.parent) {
      if (distNode === beginRoot) {
        return depth;
      }
      depth++;
      distNode = distNode.parent;
    }
    return depth;
  }

  /**
   * The `getHeight` function calculates the maximum height of a binary tree using either recursive or
   * iterative approach.
   * @param {BTNKey | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
   * starting node from which the height of the binary tree is calculated. It can be either a node
   * object (`N`), a key value of a node in the tree (`BTNKey`), or `null` if no starting
   * node is specified. If `
   * @param iterationType - The `iterationType` parameter is used to determine whether to calculate the
   * height of the binary tree using a recursive approach or an iterative approach. It can have two
   * possible values:
   * @returns the height of the binary tree.
   */
  getHeight(beginRoot: BTNKey | N | null | undefined = this.root, iterationType = this.iterationType): number {
    if (typeof beginRoot === 'number') beginRoot = this.getNode(beginRoot);
    if (!beginRoot) return -1;

    if (iterationType === IterationType.RECURSIVE) {
      const _getMaxHeight = (cur: N | null | undefined): number => {
        if (!cur) return -1;
        const leftHeight = _getMaxHeight(cur.left);
        const rightHeight = _getMaxHeight(cur.right);
        return Math.max(leftHeight, rightHeight) + 1;
      };

      return _getMaxHeight(beginRoot);
    } else {
      if (!beginRoot) {
        return -1;
      }

      const stack: {node: N; depth: number}[] = [{node: beginRoot, depth: 0}];
      let maxHeight = 0;

      while (stack.length > 0) {
        const {node, depth} = stack.pop()!;

        if (node.left) {
          stack.push({node: node.left, depth: depth + 1});
        }

        if (node.right) {
          stack.push({node: node.right, depth: depth + 1});
        }

        maxHeight = Math.max(maxHeight, depth);
      }

      return maxHeight;
    }
  }

  /**
   * The `getMinHeight` function calculates the minimum height of a binary tree using either a
   * recursive or iterative approach.
   * @param {N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node from which we want to
   * calculate the minimum height of the tree. It is optional and defaults to the root of the tree if
   * not provided.
   * @param iterationType - The `iterationType` parameter is used to determine the method of iteration
   * to calculate the minimum height of a binary tree. It can have two possible values:
   * @returns The function `getMinHeight` returns the minimum height of a binary tree.
   */
  getMinHeight(beginRoot: N | null | undefined = this.root, iterationType = this.iterationType): number {
    if (!beginRoot) return -1;

    if (iterationType === IterationType.RECURSIVE) {
      const _getMinHeight = (cur: N | null | undefined): number => {
        if (!cur) return 0;
        if (!cur.left && !cur.right) return 0;
        const leftMinHeight = _getMinHeight(cur.left);
        const rightMinHeight = _getMinHeight(cur.right);
        return Math.min(leftMinHeight, rightMinHeight) + 1;
      };

      return _getMinHeight(beginRoot);
    } else {
      const stack: N[] = [];
      let node: N | null | undefined = beginRoot,
        last: N | null | undefined = null;
      const depths: Map<N, number> = new Map();

      while (stack.length > 0 || node) {
        if (node) {
          stack.push(node);
          node = node.left;
        } else {
          node = stack[stack.length - 1];
          if (!node.right || last === node.right) {
            node = stack.pop();
            if (node) {
              const leftMinHeight = node.left ? depths.get(node.left) ?? -1 : -1;
              const rightMinHeight = node.right ? depths.get(node.right) ?? -1 : -1;
              depths.set(node, 1 + Math.min(leftMinHeight, rightMinHeight));
              last = node;
              node = null;
            }
          } else node = node.right;
        }
      }

      return depths.get(beginRoot) ?? -1;
    }
  }

  /**
   * The function checks if a binary tree is perfectly balanced by comparing the minimum height and the
   * height of the tree.
   * @param {N | null | undefined} beginRoot - The parameter `beginRoot` is of type `N | null | undefined`, which means it can
   * either be of type `N` (representing a node in a tree) or `null` (representing an empty tree).
   * @returns The method is returning a boolean value.
   */
  isPerfectlyBalanced(beginRoot: N | null | undefined = this.root): boolean {
    return this.getMinHeight(beginRoot) + 1 >= this.getHeight(beginRoot);
  }

  getNodes<C extends BTNCallback<N, BTNKey>>(
    identifier: BTNKey,
    callback?: C,
    onlyOne?: boolean,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): N[];

  getNodes<C extends BTNCallback<N, N>>(
    identifier: N | null | undefined,
    callback?: C,
    onlyOne?: boolean,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): N[];

  getNodes<C extends BTNCallback<N>>(
    identifier: ReturnType<C>,
    callback: C,
    onlyOne?: boolean,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): N[];

  /**
   * The function `getNodes` returns an array of nodes that match a given node property, using either
   * recursive or iterative traversal.
   * @param {ReturnType<C>} identifier - The `identifier` parameter is either a
   * `BTNKey` or a generic type `N`. It represents the property of the node that we are
   * searching for. It can be a specific key value or any other property of the node.
   * @param callback - The `callback` parameter is a function that takes a node as input and returns a
   * value. This value is compared with the `identifier` parameter to determine if the node should be
   * included in the result. The `callback` parameter has a default value of
   * `this.defaultOneParamCallback`, which
   * @param [onlyOne=false] - A boolean value indicating whether to stop searching after finding the
   * first node that matches the identifier. If set to true, the function will return an array with
   * only one element (or an empty array if no matching node is found). If set to false (default), the
   * function will continue searching for all
   * @param {N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node from which the
   * traversal of the binary tree will begin. It is optional and defaults to the root of the binary
   * tree.
   * @param iterationType - The `iterationType` parameter determines the type of iteration used to
   * traverse the binary tree. It can have two possible values:
   * @returns The function `getNodes` returns an array of nodes (`N[]`).
   */
  getNodes<C extends BTNCallback<N>>(
    identifier: ReturnType<C> | null | undefined,
    callback: C = this.defaultOneParamCallback as C,
    onlyOne = false,
    beginRoot: N | null | undefined = this.root,
    iterationType = this.iterationType
  ): N[] {
    if (!beginRoot) return [];
    if ((identifier as any) instanceof BinaryTreeNode) callback = (node => node) as C;
    const ans: N[] = [];

    if (iterationType === IterationType.RECURSIVE) {
      const _traverse = (cur: N) => {
        if (callback(cur) === identifier) {
          ans.push(cur);
          if (onlyOne) return;
        }
        if (!cur.left && !cur.right) return;
        cur.left && _traverse(cur.left);
        cur.right && _traverse(cur.right);
      };

      _traverse(beginRoot);
    } else {
      const queue = new Queue<N>([beginRoot]);
      while (queue.size > 0) {
        const cur = queue.shift();
        if (cur) {
          if (callback(cur) === identifier) {
            ans.push(cur);
            if (onlyOne) return ans;
          }
          cur.left && queue.push(cur.left);
          cur.right && queue.push(cur.right);
        }
      }
    }

    return ans;
  }

  has<C extends BTNCallback<N, BTNKey>>(
    identifier: BTNKey,
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): boolean;

  has<C extends BTNCallback<N, N>>(
    identifier: N | null | undefined,
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): boolean;

  has<C extends BTNCallback<N>>(
    identifier: ReturnType<C> | null | undefined,
    callback: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): boolean;

  /**
   * The function checks if a binary tree has a node with a given property or key.
   * @param {BTNKey | N} identifier - The `identifier` parameter is the key or value of
   * the node that you want to find in the binary tree. It can be either a `BTNKey` or a
   * generic type `N`.
   * @param callback - The `callback` parameter is a function that is used to determine whether a node
   * matches the desired criteria. It takes a node as input and returns a boolean value indicating
   * whether the node matches the criteria or not. The default callback function
   * `this.defaultOneParamCallback` is used if no callback function is
   * @param beginRoot - The `beginRoot` parameter is the starting point for the search. It specifies
   * the node from which the search should begin. By default, it is set to `this.root`, which means the
   * search will start from the root node of the binary tree. However, you can provide a different node
   * as
   * @param iterationType - The `iterationType` parameter specifies the type of iteration to be
   * performed when searching for nodes in the binary tree. It can have one of the following values:
   * @returns a boolean value.
   */
  has<C extends BTNCallback<N>>(
    identifier: ReturnType<C> | null | undefined,
    callback: C = this.defaultOneParamCallback as C,
    beginRoot = this.root,
    iterationType = this.iterationType
  ): boolean {
    if ((identifier as any) instanceof BinaryTreeNode) callback = (node => node) as C;

    return this.getNodes(identifier, callback, true, beginRoot, iterationType).length > 0;
  }

  getNode<C extends BTNCallback<N, BTNKey>>(
    identifier: BTNKey,
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): N | null | undefined;

  getNode<C extends BTNCallback<N, N>>(
    identifier: N | null | undefined,
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): N | null | undefined;

  getNode<C extends BTNCallback<N>>(
    identifier: ReturnType<C>,
    callback: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): N | null | undefined;

  /**
   * The function `get` returns the first node in a binary tree that matches the given property or key.
   * @param {BTNKey | N} identifier - The `identifier` parameter is the key or value of
   * the node that you want to find in the binary tree. It can be either a `BTNKey` or `N`
   * type.
   * @param callback - The `callback` parameter is a function that is used to determine whether a node
   * matches the desired criteria. It takes a node as input and returns a boolean value indicating
   * whether the node matches the criteria or not. The default callback function
   * (`this.defaultOneParamCallback`) is used if no callback function is
   * @param beginRoot - The `beginRoot` parameter is the starting point for the search. It specifies
   * the root node from which the search should begin.
   * @param iterationType - The `iterationType` parameter specifies the type of iteration to be
   * performed when searching for a node in the binary tree. It can have one of the following values:
   * @returns either the found node (of type N) or null if no node is found.
   */
  getNode<C extends BTNCallback<N>>(
    identifier: ReturnType<C> | null | undefined,
    callback: C = this.defaultOneParamCallback as C,
    beginRoot = this.root,
    iterationType = this.iterationType
  ): N | null | undefined {
    if ((identifier as any) instanceof BinaryTreeNode) callback = (node => node) as C;

    return this.getNodes(identifier, callback, true, beginRoot, iterationType)[0] ?? null;
  }

  get<C extends BTNCallback<N, BTNKey>>(
    identifier: BTNKey,
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): V | undefined;

  get<C extends BTNCallback<N, N>>(
    identifier: N | null | undefined,
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): V | undefined;

  get<C extends BTNCallback<N>>(
    identifier: ReturnType<C>,
    callback: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType
  ): V | undefined;

  /**
   * The function `get` returns the first node value in a binary tree that matches the given property or key.
   * @param {BTNKey | N} identifier - The `identifier` parameter is the key or value of
   * the node that you want to find in the binary tree. It can be either a `BTNKey` or `N`
   * type.
   * @param callback - The `callback` parameter is a function that is used to determine whether a node
   * matches the desired criteria. It takes a node as input and returns a boolean value indicating
   * whether the node matches the criteria or not. The default callback function
   * (`this.defaultOneParamCallback`) is used if no callback function is
   * @param beginRoot - The `beginRoot` parameter is the starting point for the search. It specifies
   * the root node from which the search should begin.
   * @param iterationType - The `iterationType` parameter specifies the type of iteration to be
   * performed when searching for a node in the binary tree. It can have one of the following values:
   * @returns either the found value (of type V) or undefined if no node value is found.
   */
  get<C extends BTNCallback<N>>(
    identifier: ReturnType<C> | null | undefined,
    callback: C = this.defaultOneParamCallback as C,
    beginRoot = this.root,
    iterationType = this.iterationType
  ): V | undefined {
    if ((identifier as any) instanceof BinaryTreeNode) callback = (node => node) as C;

    return this.getNode(identifier, callback, beginRoot, iterationType)?.value ?? undefined;
  }

  /**
   * The function `getPathToRoot` returns an array of nodes starting from a given node and traversing
   * up to the root node, with the option to reverse the order of the nodes.
   * @param {N} beginRoot - The `beginRoot` parameter represents the starting node from which you want
   * to find the path to the root node.
   * @param [isReverse=true] - The `isReverse` parameter is a boolean flag that determines whether the
   * resulting path should be reversed or not. If `isReverse` is set to `true`, the path will be
   * reversed before returning it. If `isReverse` is set to `false` or not provided, the path will
   * @returns The function `getPathToRoot` returns an array of type `N[]`.
   */
  getPathToRoot(beginRoot: N, isReverse = true): N[] {
    // TODO to support get path through passing key
    const result: N[] = [];
    while (beginRoot.parent) {
      // Array.push + Array.reverse is more efficient than Array.unshift
      // TODO may consider using Deque, so far this is not the performance bottleneck
      result.push(beginRoot);
      beginRoot = beginRoot.parent;
    }
    result.push(beginRoot);
    return isReverse ? result.reverse() : result;
  }

  /**
   * The function `getLeftMost` returns the leftmost node in a binary tree, either using recursive or
   * iterative traversal.
   * @param {BTNKey | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting point
   * for finding the leftmost node in a binary tree. It can be either a node object (`N`), a key value
   * of a node (`BTNKey`), or `null` if the tree is empty.
   * @param iterationType - The `iterationType` parameter is used to determine the type of iteration to
   * be performed when finding the leftmost node in a binary tree. It can have two possible values:
   * @returns The function `getLeftMost` returns the leftmost node (`N`) in a binary tree. If there is
   * no leftmost node, it returns `null`.
   */
  getLeftMost(beginRoot: BTNKey | N | null | undefined = this.root, iterationType = this.iterationType): N | null | undefined {
    if (typeof beginRoot === 'number') beginRoot = this.getNode(beginRoot);

    if (!beginRoot) return beginRoot;

    if (iterationType === IterationType.RECURSIVE) {
      const _traverse = (cur: N): N => {
        if (!cur.left) return cur;
        return _traverse(cur.left);
      };

      return _traverse(beginRoot);
    } else {
      // Indirect implementation of iteration using tail recursion optimization
      const _traverse = trampoline((cur: N) => {
        if (!cur.left) return cur;
        return _traverse.cont(cur.left);
      });

      return _traverse(beginRoot);
    }
  }

  /**
   * The function `getRightMost` returns the rightmost node in a binary tree, either recursively or
   * iteratively.
   * @param {N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node from which we want to
   * find the rightmost node. It is of type `N | null | undefined`, which means it can either be a node of type `N`
   * or `null`. If it is `null`, it means there is no starting node
   * @param iterationType - The `iterationType` parameter is used to determine the type of iteration to
   * be performed when finding the rightmost node in a binary tree. It can have two possible values:
   * @returns The function `getRightMost` returns the rightmost node (`N`) in a binary tree. If the
   * `beginRoot` parameter is `null`, it returns `null`.
   */
  getRightMost(beginRoot: N | null | undefined = this.root, iterationType = this.iterationType): N | null | undefined {
    // TODO support get right most by passing key in
    if (!beginRoot) return beginRoot;

    if (iterationType === IterationType.RECURSIVE) {
      const _traverse = (cur: N): N => {
        if (!cur.right) return cur;
        return _traverse(cur.right);
      };

      return _traverse(beginRoot);
    } else {
      // Indirect implementation of iteration using tail recursion optimization
      const _traverse = trampoline((cur: N) => {
        if (!cur.right) return cur;
        return _traverse.cont(cur.right);
      });

      return _traverse(beginRoot);
    }
  }

  /**
   * The function `isSubtreeBST` checks if a given binary tree is a valid binary search tree.
   * @param {N} beginRoot - The `beginRoot` parameter is the root node of the binary tree that you want
   * to check if it is a binary search tree (BST) subtree.
   * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
   * type of iteration to use when checking if a subtree is a binary search tree (BST). It can have two
   * possible values:
   * @returns The function `isSubtreeBST` returns a boolean value.
   */
  isSubtreeBST(beginRoot: N | null | undefined, iterationType = this.iterationType): boolean {
    // TODO there is a bug
    if (!beginRoot) return true;

    if (iterationType === IterationType.RECURSIVE) {
      const dfs = (cur: N | null | undefined, min: BTNKey, max: BTNKey): boolean => {
        if (!cur) return true;
        if (cur.key <= min || cur.key >= max) return false;
        return dfs(cur.left, min, cur.key) && dfs(cur.right, cur.key, max);
      };

      return dfs(beginRoot, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    } else {
      const stack = [];
      let prev = Number.MIN_SAFE_INTEGER,
        curr: N | null | undefined = beginRoot;
      while (curr || stack.length > 0) {
        while (curr) {
          stack.push(curr);
          curr = curr.left;
        }
        curr = stack.pop()!;
        if (!curr || prev >= curr.key) return false;
        prev = curr.key;
        curr = curr.right;
      }
      return true;
    }
  }

  /**
   * The function checks if a binary tree is a binary search tree.
   * @param iterationType - The parameter "iterationType" is used to specify the type of iteration to
   * be used when checking if the binary tree is a binary search tree (BST). It is an optional
   * parameter with a default value of "this.iterationType". The value of "this.iterationType" is not
   * provided in
   * @returns a boolean value.
   */
  isBST(iterationType = this.iterationType): boolean {
    if (this.root === null) return true;
    return this.isSubtreeBST(this.root, iterationType);
  }

  subTreeTraverse<C extends BTNCallback<N>>(
    callback?: C,
    beginRoot?: BTNKey | N | null | undefined,
    iterationType?: IterationType,
    includeNull?: false
  ): ReturnType<C>[];

  subTreeTraverse<C extends BTNCallback<N>>(
    callback?: C,
    beginRoot?: BTNKey | N | null | undefined,
    iterationType?: IterationType,
    includeNull?: undefined
  ): ReturnType<C>[];

  subTreeTraverse<C extends BTNCallback<N | null | undefined>>(
    callback?: C,
    beginRoot?: BTNKey | N | null | undefined,
    iterationType?: IterationType,
    includeNull?: true
  ): ReturnType<C>[];

  /**
   * The function `subTreeTraverse` traverses a binary tree and applies a callback function to each
   * node, either recursively or iteratively.
   * @param callback - The `callback` parameter is a function that will be called on each node in the
   * subtree traversal. It takes a single argument, which is the current node being traversed, and
   * returns a value. The return values from each callback invocation will be collected and returned as
   * an array.
   * @param {BTNKey | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting point
   * for traversing the subtree. It can be either a node object, a key value of a node, or `null` to
   * start from the root of the tree.
   * @param iterationType - The `iterationType` parameter determines the type of traversal to be
   * performed on the binary tree. It can have two possible values:
   * @param includeNull - The choice to output null values during binary tree traversal should be provided.
   * @returns The function `subTreeTraverse` returns an array of `ReturnType<BTNCallback<N>>`.
   */
  subTreeTraverse<C extends BTNCallback<N | null | undefined>>(
    callback: C = this.defaultOneParamCallback as C,
    beginRoot: BTNKey | N | null | undefined = this.root,
    iterationType = this.iterationType,
    includeNull = false
  ): ReturnType<C>[] {
    if (typeof beginRoot === 'number') beginRoot = this.getNode(beginRoot);

    const ans: (ReturnType<BTNCallback<N>> | null | undefined)[] = [];
    if (!beginRoot) return ans;

    if (iterationType === IterationType.RECURSIVE) {
      const _traverse = (cur: N | null | undefined) => {
        if (cur !== undefined) {
          ans.push(callback(cur));
          if (includeNull) {
            cur && this.isNodeOrNull(cur.left) && _traverse(cur.left);
            cur && this.isNodeOrNull(cur.right) && _traverse(cur.right);
          } else {
            cur && cur.left && _traverse(cur.left);
            cur && cur.right && _traverse(cur.right);
          }
        }
      };

      _traverse(beginRoot);
    } else {
      const stack: (N | null | undefined)[] = [beginRoot];

      while (stack.length > 0) {
        const cur = stack.pop();
        if (cur !== undefined) {
          ans.push(callback(cur));
          if (includeNull) {
            cur && this.isNodeOrNull(cur.right) && stack.push(cur.right);
            cur && this.isNodeOrNull(cur.left) && stack.push(cur.left);
          } else {
            cur && cur.right && stack.push(cur.right);
            cur && cur.left && stack.push(cur.left);
          }
        }
      }
    }
    return ans;
  }
  
  isNode(node: any): node is N {
    return node instanceof BinaryTreeNode && node.key.toString() !== 'NaN';
  }

  isNIL(node: any) {
    return node instanceof BinaryTreeNode && node.key.toString() === 'NaN';
  }

  isNodeOrNull(node: any): node is (N | null){
    return this.isNode(node) || node === null;
  }

  dfs<C extends BTNCallback<N>>(
    callback?: C,
    pattern?: DFSOrderPattern,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: false
  ): ReturnType<C>[];

  dfs<C extends BTNCallback<N>>(
    callback?: C,
    pattern?: DFSOrderPattern,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: undefined
  ): ReturnType<C>[];

  dfs<C extends BTNCallback<N | null | undefined>>(
    callback?: C,
    pattern?: DFSOrderPattern,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: true
  ): ReturnType<C>[];

  /**
   * The `dfs` function performs a depth-first search traversal on a binary tree, executing a callback
   * function on each node according to a specified order pattern.
   * @param callback - The `callback` parameter is a function that will be called on each node during
   * the depth-first search traversal. It takes a node as input and returns a value. The default value
   * is `this.defaultOneParamCallback`, which is a callback function defined elsewhere in the code.
   * @param {DFSOrderPattern} [pattern=in] - The `pattern` parameter determines the order in which the
   * nodes are visited during the depth-first search. There are three possible values for `pattern`:
   * @param {N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node for the depth-first
   * search. It determines where the search will begin in the tree or graph structure. If `beginRoot`
   * is `null`, an empty array will be returned.
   * @param {IterationType} iterationType - The `iterationType` parameter determines the type of
   * iteration used in the depth-first search algorithm. It can have two possible values:
   * @param includeNull - The choice to output null values during binary tree traversal should be provided.
   * @returns The function `dfs` returns an array of `ReturnType<BTNCallback<N>>` values.
   */
  dfs<C extends BTNCallback<N | null | undefined>>(
    callback: C = this.defaultOneParamCallback as C,
    pattern: DFSOrderPattern = 'in',
    beginRoot: N | null | undefined = this.root,
    iterationType: IterationType = IterationType.ITERATIVE,
    includeNull = false
  ): ReturnType<C>[] {
    if (!beginRoot) return [];
    const ans: ReturnType<C>[] = [];
    if (iterationType === IterationType.RECURSIVE) {
      const _traverse = (node: N | null | undefined) => {
        switch (pattern) {
          case 'in':
            if (includeNull) {
              if (node && this.isNodeOrNull(node.left)) _traverse(node.left);
              this.isNodeOrNull(node) && ans.push(callback(node));
              if (node && this.isNodeOrNull(node.right)) _traverse(node.right);
            } else {
              if (node && node.left) _traverse(node.left);
              this.isNode(node) && ans.push(callback(node));
              if (node && node.right) _traverse(node.right);
            }
            break;
          case 'pre':
            if (includeNull) {
              this.isNodeOrNull(node) && ans.push(callback(node));
              if (node && this.isNodeOrNull(node.left)) _traverse(node.left);
              if (node && this.isNodeOrNull(node.right)) _traverse(node.right);
            } else {
              this.isNode(node) && ans.push(callback(node));
              if (node && node.left) _traverse(node.left);
              if (node && node.right) _traverse(node.right);
            }
            break;
          case 'post':
            if (includeNull) {
              if (node && this.isNodeOrNull(node.left)) _traverse(node.left);
              if (node && this.isNodeOrNull(node.right)) _traverse(node.right);
              this.isNodeOrNull(node) && ans.push(callback(node));
            } else {
              if (node && node.left) _traverse(node.left);
              if (node && node.right) _traverse(node.right);
              this.isNode(node) && ans.push(callback(node));
            }

            break;
        }
      };

      _traverse(beginRoot);
    } else {
      // 0: visit, 1: print
      const stack: {opt: 0 | 1; node: N | null | undefined}[] = [{opt: 0, node: beginRoot}];

      while (stack.length > 0) {
        const cur = stack.pop();
        if (cur === undefined || this.isNIL(cur.node)) continue;
        if (includeNull) {
          if (cur.node === undefined) continue;
        } else {
          if (cur.node === null || cur.node === undefined) continue;
        }
        if (cur.opt === 1) {
          ans.push(callback(cur.node));
        } else {
          switch (pattern) {
            case 'in':
              cur.node && stack.push({opt: 0, node: cur.node.right});
              stack.push({opt: 1, node: cur.node});
              cur.node && stack.push({opt: 0, node: cur.node.left});
              break;
            case 'pre':
              cur.node && stack.push({opt: 0, node: cur.node.right});
              cur.node && stack.push({opt: 0, node: cur.node.left});
              stack.push({opt: 1, node: cur.node});
              break;
            case 'post':
              stack.push({opt: 1, node: cur.node});
              cur.node && stack.push({opt: 0, node: cur.node.right});
              cur.node && stack.push({opt: 0, node: cur.node.left});
              break;
            default:
              cur.node && stack.push({opt: 0, node: cur.node.right});
              stack.push({opt: 1, node: cur.node});
              cur.node && stack.push({opt: 0, node: cur.node.left});
              break;
          }
        }
      }
    }

    return ans;
  }

  bfs<C extends BTNCallback<N>>(
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: false
  ): ReturnType<C>[];

  bfs<C extends BTNCallback<N>>(
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: undefined
  ): ReturnType<C>[];

  bfs<C extends BTNCallback<N | null | undefined>>(
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: true
  ): ReturnType<C>[];

  /**
   * The bfs function performs a breadth-first search traversal on a binary tree, executing a callback
   * function on each node.
   * @param callback - The `callback` parameter is a function that will be called for each node in the
   * breadth-first search. It takes a node of type `N` as its argument and returns a value of type
   * `ReturnType<BTNCallback<N>>`. The default value for this parameter is `this.defaultOneParamCallback
   * @param {N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node for the breadth-first
   * search. It determines from which node the search will begin. If `beginRoot` is `null`, the search
   * will not be performed and an empty array will be returned.
   * @param iterationType - The `iterationType` parameter determines the type of iteration to be used
   * in the breadth-first search (BFS) algorithm. It can have two possible values:
   * @param includeNull - The choice to output null values during binary tree traversal should be provided.
   * @returns The function `bfs` returns an array of `ReturnType<BTNCallback<N>>[]`.
   */
  bfs<C extends BTNCallback<N | null | undefined>>(
    callback: C = this.defaultOneParamCallback as C,
    beginRoot: N | null | undefined = this.root,
    iterationType = this.iterationType,
    includeNull = false
  ): ReturnType<C>[] {
    if (!beginRoot) return [];

    const ans: ReturnType<BTNCallback<N>>[] = [];

    if (iterationType === IterationType.RECURSIVE) {
      const queue: Queue<N | null | undefined> = new Queue<N | null | undefined>([beginRoot]);

      const traverse = (level: number) => {
        if (queue.size === 0) return;

        const current = queue.shift()!;
        ans.push(callback(current));

        if (includeNull) {
          if (current && this.isNodeOrNull(current.left)) queue.push(current.left);
          if (current && this.isNodeOrNull(current.right)) queue.push(current.right);
        } else {
          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
        }

        traverse(level + 1);
      };

      traverse(0);
    } else {
      const queue = new Queue<N | null | undefined>([beginRoot]);
      while (queue.size > 0) {
        const levelSize = queue.size;

        for (let i = 0; i < levelSize; i++) {
          const current = queue.shift()!;
          ans.push(callback(current));

          if (includeNull) {
            if (current && this.isNodeOrNull(current.left)) queue.push(current.left);
            if (current && this.isNodeOrNull(current.right)) queue.push(current.right);
          } else {
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
          }
        }
      }
    }
    return ans;
  }

  listLevels<C extends BTNCallback<N>>(
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: false
  ): ReturnType<C>[][];

  listLevels<C extends BTNCallback<N>>(
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: undefined
  ): ReturnType<C>[][];

  listLevels<C extends BTNCallback<N | null | undefined>>(
    callback?: C,
    beginRoot?: N | null | undefined,
    iterationType?: IterationType,
    includeNull?: true
  ): ReturnType<C>[][];

  /**
   * The `listLevels` function takes a binary tree node and a callback function, and returns an array
   * of arrays representing the levels of the tree.
   * @param {C} callback - The `callback` parameter is a function that will be called on each node in
   * the tree. It takes a node as input and returns a value. The return type of the callback function
   * is determined by the generic type `C`.
   * @param {N | null | undefined} beginRoot - The `beginRoot` parameter represents the starting node of the binary tree
   * traversal. It can be any node in the binary tree. If no node is provided, the traversal will start
   * from the root node of the binary tree.
   * @param iterationType - The `iterationType` parameter determines whether the tree traversal is done
   * recursively or iteratively. It can have two possible values:
   * @param includeNull - The choice to output null values during binary tree traversal should be provided.
   * @returns The function `listLevels` returns an array of arrays, where each inner array represents a
   * level in a binary tree. Each inner array contains the return type of the provided callback
   * function `C` applied to the nodes at that level.
   */
  listLevels<C extends BTNCallback<N | null | undefined>>(
    callback: C = this.defaultOneParamCallback as C,
    beginRoot: N | null | undefined = this.root,
    iterationType = this.iterationType,
    includeNull = false
  ): ReturnType<C>[][] {
    if (!beginRoot) return [];
    const levelsNodes: ReturnType<C>[][] = [];

    if (iterationType === IterationType.RECURSIVE) {
      const _recursive = (node: N | null | undefined, level: number) => {
        if (!levelsNodes[level]) levelsNodes[level] = [];
        levelsNodes[level].push(callback(node));
        if (includeNull) {
          if (node && this.isNodeOrNull(node.left)) _recursive(node.left, level + 1);
          if (node && this.isNodeOrNull(node.right)) _recursive(node.right, level + 1);
        } else {
          if (node && node.left) _recursive(node.left, level + 1);
          if (node && node.right) _recursive(node.right, level + 1);
        }
      };

      _recursive(beginRoot, 0);
    } else {
      const stack: [N | null | undefined, number][] = [[beginRoot, 0]];

      while (stack.length > 0) {
        const head = stack.pop()!;
        const [node, level] = head;

        if (!levelsNodes[level]) levelsNodes[level] = [];
        levelsNodes[level].push(callback(node));

        if (includeNull) {
          if (node && this.isNodeOrNull(node.right)) stack.push([node.right, level + 1]);
          if (node && this.isNodeOrNull(node.left)) stack.push([node.left, level + 1]);
        } else {
          if (node && node.right) stack.push([node.right, level + 1]);
          if (node && node.left) stack.push([node.left, level + 1]);
        }
      }
    }

    return levelsNodes;
  }

  /**
   * The function returns the predecessor node of a given node in a binary tree.
   * @param {N} node - The parameter "node" represents a node in a binary tree.
   * @returns The function `getPredecessor` returns the predecessor node of the given node `node`.
   */
  getPredecessor(node: N): N {
    if (node.left) {
      let predecessor: N | null | undefined = node.left;
      while (!predecessor || (predecessor.right && predecessor.right !== node)) {
        if (predecessor) {
          predecessor = predecessor.right;
        }
      }
      return predecessor;
    } else {
      return node;
    }
  }

  /**
   * The function `getSuccessor` returns the next node in a binary tree given a node `x`, or `null` if
   * `x` is the last node.
   * @param {N} x - N - a node in a binary tree
   * @returns The function `getSuccessor` returns a value of type `N` (the successor node), or `null`
   * if there is no successor, or `undefined` if the input `x` is `undefined`.
   */
  getSuccessor(x: N): N | null | undefined {
    if (x.right) {
      return this.getLeftMost(x.right);
    }

    let y: N | null | undefined = x.parent;
    while (y && y && x === y.right) {
      x = y;
      y = y.parent;
    }
    return y;
  }

  /**
   * The `morris` function performs a depth-first traversal of a binary tree using the Morris traversal
   * algorithm and returns an array of values obtained by applying a callback function to each node.
   * @param callback - The `callback` parameter is a function that will be called on each node in the
   * tree. It takes a node of type `N` as input and returns a value of type `ReturnType<BTNCallback<N>>`. The
   * default value for this parameter is `this.defaultOneParamCallback`.
   * @param {DFSOrderPattern} [pattern=in] - The `pattern` parameter in the `morris` function
   * determines the order in which the nodes of a binary tree are traversed. It can have one of the
   * following values:
   * @param {N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node for the Morris
   * traversal. It specifies the root node of the tree from which the traversal should begin. If
   * `beginRoot` is `null`, an empty array will be returned.
   * @returns The `morris` function returns an array of `ReturnType<BTNCallback<N>>` values.
   */
  morris<C extends BTNCallback<N>>(
    callback: C = this.defaultOneParamCallback as C,
    pattern: DFSOrderPattern = 'in',
    beginRoot: N | null | undefined = this.root
  ): ReturnType<C>[] {
    if (beginRoot === null) return [];
    const ans: ReturnType<BTNCallback<N>>[] = [];

    let cur: N | null | undefined = beginRoot;
    const _reverseEdge = (node: N | null | undefined) => {
      let pre: N | null | undefined = null;
      let next: N | null | undefined = null;
      while (node) {
        next = node.right;
        node.right = pre;
        pre = node;
        node = next;
      }
      return pre;
    };
    const _printEdge = (node: N | null | undefined) => {
      const tail: N | null | undefined = _reverseEdge(node);
      let cur: N | null | undefined = tail;
      while (cur) {
        ans.push(callback(cur));
        cur = cur.right;
      }
      _reverseEdge(tail);
    };
    switch (pattern) {
      case 'in':
        while (cur) {
          if (cur.left) {
            const predecessor = this.getPredecessor(cur);
            if (!predecessor.right) {
              predecessor.right = cur;
              cur = cur.left;
              continue;
            } else {
              predecessor.right = null;
            }
          }
          ans.push(callback(cur));
          cur = cur.right;
        }
        break;
      case 'pre':
        while (cur) {
          if (cur.left) {
            const predecessor = this.getPredecessor(cur);
            if (!predecessor.right) {
              predecessor.right = cur;
              ans.push(callback(cur));
              cur = cur.left;
              continue;
            } else {
              predecessor.right = null;
            }
          } else {
            ans.push(callback(cur));
          }
          cur = cur.right;
        }
        break;
      case 'post':
        while (cur) {
          if (cur.left) {
            const predecessor = this.getPredecessor(cur);
            if (predecessor.right === null) {
              predecessor.right = cur;
              cur = cur.left;
              continue;
            } else {
              predecessor.right = null;
              _printEdge(cur.left);
            }
          }
          cur = cur.right;
        }
        _printEdge(beginRoot);
        break;
    }
    return ans;
  }

  // --- start additional methods ---

  /**
   * The above function is an iterator for a binary tree that can be used to traverse the tree in
   * either an iterative or recursive manner.
   * @param node - The `node` parameter represents the current node in the binary tree from which the
   * iteration starts. It is an optional parameter with a default value of `this.root`, which means
   * that if no node is provided, the iteration will start from the root of the binary tree.
   * @returns The `*[Symbol.iterator]` method returns a generator object that yields the keys of the
   * binary tree nodes in a specific order.
   */
  *[Symbol.iterator](node = this.root): Generator<BTNKey, void, undefined> {
    if (!node) {
      return;
    }

    if (this.iterationType === IterationType.ITERATIVE) {
      const stack: (N | null | undefined)[] = [];
      let current: N | null | undefined = node;

      while (current || stack.length > 0) {
        while (current) {
          stack.push(current);
          current = current.left;
        }

        current = stack.pop();

        if (current) yield current.key;
        if (current) current = current.right;
      }
    } else {
      if (node.left) {
        // @ts-ignore
        yield* this[Symbol.iterator](node.left);
      }
      yield node.key;
      if (node.right) {
        // @ts-ignore
        yield* this[Symbol.iterator](node.right);
      }
    }
  }

  protected defaultOneParamCallback = (node: N) => node.key;

  /**
   * Swap the data of two nodes in the binary tree.
   * @param {N} srcNode - The source node to swap.
   * @param {N} destNode - The destination node to swap.
   * @returns {N} - The destination node after the swap.
   */
  protected _swap(srcNode: N, destNode: N): N {
    const {key, value} = destNode;
    const tempNode = this.createNode(key, value);

    if (tempNode) {
      destNode.key = srcNode.key;
      destNode.value = srcNode.value;

      srcNode.key = tempNode.key;
      srcNode.value = tempNode.value;
    }

    return destNode;
  }

  /**
   * The function `_addTo` adds a new node to a binary tree if there is an available position.
   * @param {N | null | undefined} newNode - The `newNode` parameter represents the node that you want to add to
   * the binary tree. It can be either a node object or `null`.
   * @param {N} parent - The `parent` parameter represents the parent node to which the new node will
   * be added as a child.
   * @returns either the left or right child node of the parent node, depending on which child is
   * available for adding the new node. If a new node is added, the function also updates the size of
   * the binary tree. If neither the left nor right child is available, the function returns undefined.
   * If the parent node is null, the function also returns undefined.
   */
  protected _addTo(newNode: N | null | undefined, parent: N): N | null | undefined {
    if (parent) {
      // When all leaf nodes are null, it will no longer be possible to add new entity nodes to this binary tree.
      // In this scenario, null nodes serve as "sentinel nodes," "virtual nodes," or "placeholder nodes."
      if (parent.left === undefined) {
        parent.left = newNode;
        if (newNode) {
          this._size = this.size + 1;
        }
        return parent.left;
      } else if (parent.right === undefined) {
        parent.right = newNode;
        if (newNode) {
          this._size = this.size + 1;
        }
        return parent.right;
      } else {
        return;
      }
    } else {
      return;
    }
  }

  /**
   * The function sets the root property of an object to a given value, and if the value is not null,
   * it also sets the parent property of the value to undefined.
   * @param {N | null | undefined} v - The parameter `v` is of type `N | null | undefined`, which means it can either be of
   * type `N` or `null`.
   */
  protected _setRoot(v: N | null | undefined) {
    if (v) {
      v.parent = undefined;
    }
    this._root = v;
  }

  print(beginRoot: N | null | undefined = this.root) {
    const display = (root: N | null | undefined): void => {
      const [lines, , ,] = _displayAux(root);
      for (const line of lines) {
        console.log(line);
      }
    };

    const _displayAux = (node: N | null  | undefined): [string[], number, number, number] => {
      if (node === undefined || node === null) {
        return [[], 0, 0, 0];
      }

      if (node && node.right === undefined && node.left === undefined) {
        const line = `${node.key}`;
        const width = line.length;
        const height = 1;
        const middle = Math.floor(width / 2);
        return [[line], width, height, middle];
      }

      if (node && node.right === undefined) {
        const [lines, n, p, x] = _displayAux(node.left);
        const s = `${node.key}`;
        const u = s.length;
        const first_line = ' '.repeat(x + 1) + '_'.repeat(n - x - 1) + s;
        const second_line = ' '.repeat(x) + '/' + ' '.repeat(n - x - 1 + u);
        const shifted_lines = lines.map(line => line + ' '.repeat(u));
        return [[first_line, second_line, ...shifted_lines], n + u, p + 2, n + Math.floor(u / 2)];
      }

      if (node && node.left === undefined) {
        const [lines, n, p, u] = _displayAux(node.right);
        const s = `${node.key}`;
        const x = s.length;
        const first_line = s + '_'.repeat(x) + ' '.repeat(n - x);
        const second_line = ' '.repeat(u + x) + '\\' + ' '.repeat(n - x - 1);
        const shifted_lines = lines.map(line => ' '.repeat(u) + line);
        return [[first_line, second_line, ...shifted_lines], n + x, p + 2, Math.floor(u / 2)];
      }

      const [left, n, p, x] = _displayAux(node.left);
      const [right, m, q, y] = _displayAux(node.right);
      const s = `${node.key}`;
      const u = s.length;
      const first_line = ' '.repeat(x + 1) + '_'.repeat(n - x - 1) + s + '_'.repeat(y) + ' '.repeat(m - y);
      const second_line = ' '.repeat(x) + '/' + ' '.repeat(n - x - 1 + u + y) + '\\' + ' '.repeat(m - y - 1);
      if (p < q) {
        left.push(...new Array(q - p).fill(' '.repeat(n)));
      } else if (q < p) {
        right.push(...new Array(p - q).fill(' '.repeat(m)));
      }
      const zipped_lines = left.map((a, i) => a + ' '.repeat(u) + right[i]);
      return [[first_line, second_line, ...zipped_lines], n + m + u, Math.max(p, q) + 2, n + Math.floor(u / 2)];
    };

    display(beginRoot);
  }
  // --- end additional methods ---
}
