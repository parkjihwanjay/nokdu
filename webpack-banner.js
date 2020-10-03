const childProcess = require('child_process');

module.exports = function banner() {
  const commit = childProcess.execSync('git rev-parse --short HEAD');
  const user = 'parkjihwan';
  const date = new Date().toLocaleString();

  return (
    `commitVersion: ${commit}` + `Build Date: ${date}\n` + `Author: ${user}`
  );
};
