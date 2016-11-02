var asar = require('asar');

var src = 'app';
var dest = 'powermeter.asar';

asar.createPackage(src, dest, function() {
  console.log('done.');
})
