var fs = require('fs');
var system = require('system');
var args = system.args;
var webpage = require('webpage')

function rendermax(site) {
  var slug = site.split('/')[2];
  var page = webpage.create();
  page.viewportSize= {
    width: 1600,
    height: 1900
  };

  console.log(site);
  page.open(site, function(status) {
    console.log('\topened ' + slug);
    console.log('\t' + status);
    if (status !== 'success') {
      console.error('Unable to load '+slug+'!');
      page.close();
      phantom.exit();
    } else {
      console.log('\tattempting to render ' + slug);
      window.setTimeout(function () {
        page.render('img/'+slug+'.png', {format: 'png'});
        console.log('\trendered img/' + slug + '.png');
        page.close();
        phantom.exit();
      }, 1000); // Change timeout as required to allow sufficient time
    }
  });
}

if (args.length === 1) {
  console.log('You need to pass a URL as an argument for this script.');
} else {
  var site = args[1];
  rendermax(site);
}

