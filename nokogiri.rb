require 'rubygems'
require 'nokogiri'
require 'open-uri'

# leaving these out because they're not good.
exclude = [
  'http://www.gannettdigital.com',
  'http://godigitalmarketing.com/',
  'http://www.godigitalmarketing.com/local-businesses/',
  'http://blinqmedia.com',
  'http://www.dealchicken.com/',
  'http://www.keyringapp.com/',
  'http://www.shoplocal.com/',
  'http://www.apartments.com',
  'http://www.cars.com',
  'http://www.homefinder.com',
  'http://www.homegain.com',
  'http://www.livestream.com/',
  'http://www.newsquest.co.uk',
  'http://www.mustdotravel.co.uk',
  'http://www.captivate.com',
  'http://www.imaginova.com',
  'http://www.shermanstravel.com/',
  'http://www.topix.net/',
  'http://www.gannettgovernmentmedia.com',
  'http://gannettgovernmentmedia.com/',
  'http://www.gannettpublishingservices.com',
  'http://www.gannetthg.com',
  'http://www.gannett.com',
  'http://actionprinting.com/',
  'http://www.s1cars.com',
  'http://s1community.com',
  'http://www.s1date.com',
  'http://www.s1homes.com/',
  'http://www.s1jobs.com',
  'http://www.s1play.com',
  'http://www.s1rental.com',
  'http://www.globalreinsurance.com/'
  ]

# Different sites require different selectors for the links. 
doc = Nokogiri::HTML(open("http://www.gannett.com/section/WHOWEARE11"))

doc.css(".submenu li a").each do |node|
  if exclude.include? node['href']
    next
  else
    puts node['href']
  end
end

uk = Nokogiri::HTML(open("http://www.newsquest.co.uk/portfolio/our-titles/"))

uk.css(".sitesList li a").each do |node|
  if exclude.include? node['href']
    next
  else
    puts node['href']
  end
end

