import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('menjumlahkan dua angka',() => {
    const result = sum(2, 8);
    assert.strictEqual(result, 10);
});