const xyz = require('./people');
// require쓰면 노드가 자동으로 인식하고 import 한다.
console.log(xyz.people, xyz.ages);

const os = require('os');

console.log(os);

console.log(os.platform(), os.homedir());
