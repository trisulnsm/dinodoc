#!/bin/bash

for f in $(ls);
do
	file_name=$(echo $f | cut -c 4-)
	echo "$f $file_name"
	git mv $f $file_name
done
