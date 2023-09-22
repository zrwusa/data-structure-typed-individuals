#!/bin/bash

# List of directories
directories=(
    "avl-tree-typed"
    "binary-tree-typed"
    "bst-typed"
    "deque-typed"
    "directed-graph-typed"
    "doubly-linked-list-typed"
    "graph-typed"
    "heap-typed"
    "linked-list-typed"
    "max-heap-typed"
    "max-priority-queue-typed"
    "min-heap-typed"
    "min-priority-queue-typed"
    "priority-queue-typed"
    "singly-linked-list-typed"
    "queue-typed"
    "stack-typed"
    "tree-multiset-typed"
    "trie-typed"
    "undirected-graph-typed"
)

# Loop through each directory
for dir in "${directories[@]}"; do
    cd "$dir" || exit

    # install packages
    npm install

    cd ..
done

echo "npm install in all libs execute success."