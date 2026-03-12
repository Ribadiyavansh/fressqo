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
             const content = fs.readFileSync(file, 'utf8');
             // match $ not followed by {
             if (/\$(?!\{)/.test(content)) {
                results.push(file);
             }
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
}
walk('d:/work/fressqo/frontend/src', function(err, results) {
    if (err) throw err;
    console.log("FRONTEND:", results);
});
walk('d:/work/fressqo/backend', function(err, results) {
    if (err) throw err;
    console.log("BACKEND:", results);
});
