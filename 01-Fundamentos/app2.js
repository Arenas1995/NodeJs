const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

const newData = data.replace(/React/ig, 'Angular');
fs.writeFileSync('readme-angular.md', newData)
// console.log(data);