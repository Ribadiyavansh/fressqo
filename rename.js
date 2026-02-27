const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'frontend');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('dist') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.match(/\.(js|jsx|ts|tsx|css|html|json)$/)) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(directory);
let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.match(/freshqo/i)) {
        content = content.replace(/Freshqo/g, 'Fresqo');
        content = content.replace(/freshqo/g, 'fresqo');
        content = content.replace(/FRESHQO/g, 'FRESQO');
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
        changedCount++;
    }
});

console.log(`Done. Changed ${changedCount} files.`);
