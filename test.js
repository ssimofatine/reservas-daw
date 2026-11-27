const assert = require('node:assert');
const { total } = require('./src/reservas');

assert.strictEqual(total(3, 10), 30);
console.log('Test OK');
