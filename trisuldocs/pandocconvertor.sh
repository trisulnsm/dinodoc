PATH=$PATH:~/Downloads/pandoc-3.2/bin
for textile_filename in *.textile; do
    markdown_filename="${textile_filename%.html.textile}.md"
	printf "Converting %s to %s\n" $textile_filename $markdown_filename
	pandoc --from textile --to markdown $textile_filename -o $markdown_filename
done
