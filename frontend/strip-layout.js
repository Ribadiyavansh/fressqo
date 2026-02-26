import fs from 'fs';
import path from 'path';

const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove dark mode toggle imports and functions
    content = content.replace(/import React, { useState, useEffect } from 'react';\n/g, "import React, { useEffect } from 'react';\n");
    content = content.replace(/const \[isDarkTheme, setIsDarkTheme\] = useState\(false\);\n\n  const toggleDarkTheme = \(\) => {\n    const newTheme = !isDarkTheme;\n    setIsDarkTheme\(newTheme\);\n    if \(newTheme\) {\n      document.documentElement.classList.add\('dark'\);\n    } else {\n      document.documentElement.classList.remove\('dark'\);\n    }\n  };\n\n/g, '');
    content = content.replace(/const toggleDarkTheme = \(\) => {\n    document.documentElement.classList.toggle\('dark'\);\n  };\n\n/g, '');

    // Clean up component wrappers
    content = content.replace(/<div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 font-display antialiased transition-colors duration-300">/g, '<div className="flex-1 w-full">');
    content = content.replace(/<div className="flex h-full grow flex-col min-h-screen">/g, '<div className="flex-1 w-full">');
    content = content.replace(/<div className="flex h-full grow flex-col">/g, '<div className="flex-1 w-full">');

    // Strip Navigation/Header
    content = content.replace(/<nav className="sticky top-0 z-50 glass-nav border-b border-gray-100 dark:border-gray-800 transition-colors">[\s\S]*?<\/nav>/, '');
    content = content.replace(/<nav className="sticky top-0 z-50 glass-nav border-b border-gray-100 dark:border-gray-800">[\s\S]*?<\/nav>/, '');
    content = content.replace(/<nav className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-100 dark:border-gray-800 px-6 md:px-20 lg:px-40 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">[\s\S]*?<\/nav>/, '');
    content = content.replace(/<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary\/10 px-6 md:px-20 py-4 bg-background-light\/80 backdrop-blur-md sticky top-0 z-50">[\s\S]*?<\/header>/, '');
    content = content.replace(/<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light px-6 md:px-20 lg:px-40 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">[\s\S]*?<\/header>/, '');
    content = content.replace(/<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary\/10 px-6 md:px-20 py-4 bg-background-light\/80 dark:bg-background-dark\/80 backdrop-blur-md sticky top-0 z-50">[\s\S]*?<\/header>/, '');

    // Strip Footer
    content = content.replace(/<footer className="bg-charcoal text-white pt-20 pb-10 mt-auto">[\s\S]*?<\/footer>/, '');
    content = content.replace(/<footer className="px-6 md:px-20 lg:px-40 py-10 border-t border-border-light bg-white dark:bg-slate-900 text-center">[\s\S]*?<\/footer>/, '');
    content = content.replace(/<footer className="bg-charcoal text-white px-6 md:px-20 py-16">[\s\S]*?<\/footer>/, '');
    content = content.replace(/<footer className="px-6 md:px-20 lg:px-40 py-10 border-t border-border-light bg-white dark:bg-background-dark text-center">[\s\S]*?<\/footer>/, '');

    fs.writeFileSync(filePath, content);
    console.log(`Cleaned layout wrappers from ${file}`);
});
console.log('Finished removing headers and footers.');
