# Gannett site comparisons

![Screenshot example, using US websites](https://farm6.staticflickr.com/5613/15554519706_fbcdc6ee9a_n.jpg)

## Setup

1. [Install Nokogiri](http://www.nokogiri.org/tutorials/installing_nokogiri.html)
2. [Install PhantomJS](http://phantomjs.org/download.html)
3. [Install ImageMagick](http://imagemagick.org/script/binary-releases.php)
4. `chmod u+x run.sh`

## Usage

To get all the screenshots:

```
./run.sh
```

This downloads the list of Gannett websites by parsing two Gannett lists, and excludes some non-news sites. It then pipes that list of websites into PhantomJS' screenshot tool. 

If you want to exclude certain sites, add them to the array in nokigiri.rb.

To find the average:

```
convert -background transparent -gravity North -resize "1600x6000>" -extent 1600x6000 img/*.png -evaluate-sequence mean average-gannett-site.png
```

This averages the screenshots using ImageMagick. A more detailed eplanation of what's going on can be found [here](http://blog.patdavid.net/2012/08/imagemagick-average-blending-files.html). 

The resulting image will be mostly-transparent and very washed-out, so you'll want to open it up in an image editor such as The Gimp or Photoshop and perform the following:

1. Flatten the imate to remove transparency
2. Auto Equalize the image to bring up the contrast
3. (optional) Adjust the saturation of colors

## License

MIT License, because this code isn't really that important. 

Copyright &copy; 2014 Benjamin Keith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

