require('./shim');
require('./src/core.dict');
require('./src/core.$for');
require('./src/core.delay');
require('./src/core.binding');
require('./src/core.object');
require('./src/core.array');
require('./src/core.number');
require('./src/core.string');
require('./src/core.date');
require('./src/core.global');
require('./src/core.log');
module.exports = require('./src/$').core;