var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function (err, data) {
    if (err) throw err;
    console.log('Spis plików w katalogu:'.blue);
    console.log(data);
    fs.writeFile('./spis.txt', data, function (err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    })
});