var fs = require('fs');
var system = require('system');
var args = system.args;
var webpage = require('webpage')

function rendermax(site) {
  var slug = site.split('/')[2];
  var page = webpage.create();
  page.viewportSize= {
    width: 1080,
    height: 1080
  };
  // http://newspaint.wordpress.com/2013/04/25/getting-to-the-bottom-of-why-a-phantomjs-page-load-fails/
//  page.onResourceRequested = function (request) {
//      system.stderr.writeLine('= onResourceRequested()');
//      system.stderr.writeLine('  request: ' + JSON.stringify(request, undefined, 4));
//  };
//
//  page.onResourceReceived = function(response) {
//      system.stderr.writeLine('= onResourceReceived()' );
//      system.stderr.writeLine('  id: ' + response.id + ', stage: "' + response.stage + '", response: ' + JSON.stringify(response));
//  };
//
//  page.onLoadStarted = function() {
//      system.stderr.writeLine('= onLoadStarted()');
//      var currentUrl = page.evaluate(function() {
//          return window.location.href;
//      });
//      system.stderr.writeLine('  leaving url: ' + currentUrl);
//  };
//
//  page.onLoadFinished = function(status) {
//      system.stderr.writeLine('= onLoadFinished()');
//      system.stderr.writeLine('  status: ' + status);
//  };
//
//  page.onNavigationRequested = function(url, type, willNavigate, main) {
//      system.stderr.writeLine('= onNavigationRequested');
//      system.stderr.writeLine('  destination_url: ' + url);
//      system.stderr.writeLine('  type (cause): ' + type);
//      system.stderr.writeLine('  will navigate: ' + willNavigate);
//      system.stderr.writeLine('  from page\'s main frame: ' + main);
//  };
//
//  page.onResourceError = function(resourceError) {
//      system.stderr.writeLine('= onResourceError()');
//      system.stderr.writeLine('  - unable to load url: "' + resourceError.url + '"');
//      system.stderr.writeLine('  - error code: ' + resourceError.errorCode + ', description: ' + resourceError.errorString );
//  };
//
//  page.onError = function(msg, trace) {
//      system.stderr.writeLine('= onError()');
//      var msgStack = ['  ERROR: ' + msg];
//      if (trace) {
//          msgStack.push('  TRACE:');
//          trace.forEach(function(t) {
//              msgStack.push('    -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
//          });
//      }
//      system.stderr.writeLine(msgStack.join('\n'));
//  };
  console.log(site);
  page.open(site, function(status) {
    console.log('\topened ' + slug);
    console.log('\t' + status);
    if (status !== 'success') {
      console.log('Unable to load '+slug+'!');
      page.close();
      phantom.exit();
    } else {
      console.log('attempting to render ' + slug);
      window.setTimeout(function () {
        page.render('img/'+slug+'.png', {format: 'png'});
        console.log('rendering ' + slug );
        page.close();
        phantom.exit();
      }, 1000); // Change timeout as required to allow sufficient time
    }
  });
}
list = fs.read('site-list.txt');

//var sites = list.split('\n');
//// console.log(sites);
//
//for (var i=0; i < sites.length;  i++) {
//  site = sites[i];
//  rendermax(site);
//}

if (args.length === 1) {
  console.log('Try to pass some arguments when invoking this script!');
} else {
  var site = args[1];
  rendermax(site);
}


//fs.readFile('site-list.txt', "utf8", function (err, data) {
//  if (err) {
//    console.log (err);
//  }
//  arrayify(data);
//});

