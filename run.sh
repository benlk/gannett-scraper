#!/bin/sh

if [ -f site-list.txt ] && [ `stat --format=%Y nokogiri.rb` -le `stat --format=%Y site-list.txt` ]
then
	echo "continuing"
    continue
else
    ruby nokogiri.rb > site-list.txt
fi

for URL in $(cut -d, -f2 < site-list.txt)
do
    phantomjs screenshot.js $URL
done
