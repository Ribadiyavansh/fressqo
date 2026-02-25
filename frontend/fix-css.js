import fs from 'fs';
import path from 'path';

const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\[var\(--primary-color\)\]/g, 'primary');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
console.log('Replaced all [var(--primary-color)] with primary.');
