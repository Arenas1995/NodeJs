const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

const wordCount = data.split(' ');
// const reactWordCount = wordCount.filter(word => word.toLowerCase() === 'react');
const reactWordCount = data.match(/react/gi);

console.log('Palabras: ', wordCount.length);
console.log('Palabras React: ', reactWordCount.length);
