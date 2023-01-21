import capitalize from '../src/capitalize.js';

import { strict as assert } from 'assert';

assert.equal(capitalize('hello'),'Hello'); 

assert.equal(capitalize(''), ''); 

assert.equal(capitalize(undefined), null);

console.log('Все тесты пройдены!');
