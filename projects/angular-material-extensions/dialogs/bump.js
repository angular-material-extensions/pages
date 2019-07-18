const fs = require('fs');
const packageJSON = require('./package.json');
const distPackageJSON = require('../../../dist/angular-material-extensions/dialogs/package');

console.log(`dist version -> ${distPackageJSON.version} | version: ${packageJSON.version}`);

if (distPackageJSON.version !== packageJSON.version) {
  packageJSON.version = distPackageJSON.version;
  fs.writeFileSync('./package.json', JSON.stringify(packageJSON, null, '  '));
}
