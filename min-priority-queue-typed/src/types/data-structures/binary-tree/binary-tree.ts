import { BinaryTree, BinaryTreeNode } from '../../../data-structures';
import { IterationType } from "../../common";

export type BinaryTreeNodeNested<K, V> = BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, BinaryTreeNode<K, V, any>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export type BinaryTreeNested<K, V, NODE extends BinaryTreeNode<K, V, NODE>> = BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, BinaryTree<K, V, NODE, any>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export type BinaryTreeOptions<K> = {
  iterationType?: IterationType,
  extractor?: (key: K) => number
}
