var mkdirp = require('mkdirp');
var path = process.argv[2];
var num = parseInt(process.argv[3]);


function createNumDirPathArray(path, num){
var arrDir = [];
for(var i = 1; i <= num; i++)
arrDir.push(path + '/' + i);
return arrDir;
}

function alerting (x){
  console.dir(x);
  console.log(x);
}

// var dirList = createNumDirPathArray("stream-adventure-examples", 13);
var dirList = createNumDirPathArray(path, num);
 require('async').map(dirList, mkdirp, function (err) { if (err) { console.error(err); } else { console.log('bling!'); }});
// require('async').map(dirList, alerting, function(err){ console.error(err);})
