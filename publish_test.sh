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

#    jq ".dependencies[\"data-structure-typed\"] = \"$version_prompted\"" package.json > temp.json
#    mv temp.json package.json

    # Install data-structure-typed package and build
    npm i data-structure-typed@"$version_prompted"
    npm run build:publish

    cd ..
done

echo "All packages updated and built."
