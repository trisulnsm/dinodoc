#!/bin/bash

for f in $(find . -maxdepth 1 -type f);
do
	file_name=$(echo $f | cut -c 6-)
	actual_filename=$(basename $f)
	git mv $actual_filename $file_name
done
