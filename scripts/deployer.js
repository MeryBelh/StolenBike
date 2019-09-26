const deployer = require('nexus-deployer');
const path = require('path');

const baseDir = path.resolve(__dirname, '../');

const projectVersion = process.env.npm_package_version.trim();
const classifier = process.env.REPO_TYPE === 'snapshots' ? '-SNAPSHOT' : '';
console.log('version: ', projectVersion);
console.log('repo_type: ', process.env.REPO_TYPE);
let release = {
  groupId: 'ma.wafaassurance.face.dimapp',
  artifactId: 'face-dimapp',
  version: projectVersion + classifier,
  packaging: 'zip',
  auth: {
    username: 'deployment',
    password: 'deploy?*16',
  },
  pomDir: 'dist',
  url: `192.168.0.41:8081/nexus/content/repositories/${process.env.REPO_TYPE}`,
  artifact: `${baseDir}/dimapp.zip`,
};

console.log('Deploying to nexus... version:', projectVersion + classifier);

deployer.deploy(release, function() {
  console.log('Deploy to nexus finished');
});
