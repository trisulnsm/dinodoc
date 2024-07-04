#!/bin/bash

pandoc --version

for i
do
  echo "$i"
  markdown_filename="${i%.html.textile}.md"
  echo "$markdown_filename"
	printf "Converting %s to %s\n" $i $markdown_filename
  pandoc --version
	pandoc --from textile --to gfm  $i -o $markdown_filename
done
