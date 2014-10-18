#!/bin/sh

if [ -f site-list.txt ]
then
    continue
else
    ruby nokogiri.rb > site-list.txt
fi

for URL in $(cut -d, -f2 < site-list.txt)
do
    phantomjs screenshot.js $URL
done