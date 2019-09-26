// require modules
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const baseDir = path.resolve(__dirname, '../');
const output = fs.createWriteStream(`${baseDir}/dimapp.zip`);
const archive = archiver('zip');

output.on('close', () => {
  console.log(`${archive.pointer()} total bytes`);
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', err => {
  throw err;
});

archive.pipe(output);

archive.directory('dist/', false, { date: new Date() });

archive.finalize();
