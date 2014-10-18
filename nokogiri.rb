require 'rubygems'
require 'nokogiri'
require 'open-uri'

doc = Nokogiri::HTML(open("http://www.gannett.com/section/WHOWEARE11"))

doc.css(".submenu li a").each do |node|
  puts node['href']
end

uk = Nokogiri::HTML(open("http://www.newsquest.co.uk/portfolio/our-titles/"))

uk.css(".sitesList li a").each do |node|
  puts node['href']
end

