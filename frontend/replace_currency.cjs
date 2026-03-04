const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // We want to replace $ followed by a digit, OR $ not preceded by \ and not followed by { or string boundaries where it's not currency.
            // Actually, simplest is to replace `\$` with `₹` but explicitly avoiding `${`.
            // Let's use negative lookahead for `{`
            // Wait, also what about `price.toFixed(2)}`? In `${product.price.toFixed(2)}`, the $ is outside the {}. So like `$${product.price...}`.
            // Notice this line: <span className="text-xl font-bold text-slate-900 dark:text-white">${product.price.toFixed(2)}</span>
            // Here there's a literal `$` then `${...}`. We want to replace the first `$`.
            // What if we just do: content.replace(/\$(?!\s*\{)(?!\w)(?=\d)/g, '₹') // $ followed by digit
            // And also `\$(?=\$\{)` (e.g. `$${` -> `₹${`)

            // Replaces $ followed by digit
            content = content.replace(/\$(\d(?:[\d\.,]*))/g, '₹$1');

            // Replaces $ followed by ${
            content = content.replace(/\$(?=\$\{)/g, '₹');

            fs.writeFileSync(fullPath, content, 'utf8');
        }
    }
}

processDir(path.join(__dirname, 'src'));
console.log('Currency replacement done');
