#!/bin/bash

# Read the version number from the user
read -p "Enter the version number: " version_prompted

# List of directories
directories=(
    "avl-tree-typed"
)

# Loop through each directory
for dir in "${directories[@]}"; do
    cd "$dir" || exit

    # Update package.json version
    npm version "$version_prompted"

    # Install data-structure-typed package and build
    npm i data-structure-typed
    npm run build:publish

    cd ..
done

echo "All packages updated and built."
