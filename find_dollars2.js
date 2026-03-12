const fs = require('fs');
const path = require('path');
function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory() && !file.includes('node_modules')) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.js') || file.endsWith('.jsx')) {
             const lines = fs.readFileSync(file, 'utf8').split('\n');
             lines.forEach((line, i) => {
                 // Try to find $ which indicates currency.
                 // We look for $ next to a number, or $ before {
                 // Ignore `Bearer ${token}` and console.log(`${...}`) which use backticks before ${
                 if (line.includes('$') && !line.includes('`') && !line.match(/\/[@$!%*?&]\//)) {
                     console.log(file.replace(/\\/g, '/') + ':' + (i+1) + ' ' + line.trim());
                 }
             });
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
}
walk('d:/work/fressqo/frontend/src', function(err) {});
