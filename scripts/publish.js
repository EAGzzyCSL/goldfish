const { runCommand } = require('./utils');

const packages = lerna.list();

packages.forEach((pkg) => {
  // Do not release the private packages.
  if (pkg.private) {
    return;
  }
  runCommand(`cd ${pkg.location} && yarn publish`);
});
