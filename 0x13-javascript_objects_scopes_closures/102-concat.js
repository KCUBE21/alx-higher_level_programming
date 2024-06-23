#!/usr/bin/node
const fs = require('fs');
const path = require('path');

if (process.argv.length !== 5) {
  console.error('Usage: node concatFiles.js <file1> <file2> <destination>');
  process.exit(1);
}

const file1Path = path.resolve(process.argv[2]);
const file2Path = path.resolve(process.argv[3]);
const destinationPath = path.resolve(process.argv[4]);
const file1Content = fs.readFileSync(file1Path, 'utf8');
const file2Content = fs.readFileSync(file2Path, 'utf8');
const concatenatedContent = file1Content + file2Content;
fs.writeFileSync(destinationPath, concatenatedContent);
