#!/bin/bash

# target directory
target_dir="/Users/revone/projects/data-structure-typed-individuals/heap-typed/src"

# Source directory
source_dir="/Users/revone/projects/."


# Delete all files except index.ts
find "$target_dir" -type f ! -name 'index.ts' -delete

#Copy the file to the target directory, excluding index.ts
shopt -s extglob # Enable extended wildcards
cp -R "$source_dir"/!(index.ts) "$target_dir"/
