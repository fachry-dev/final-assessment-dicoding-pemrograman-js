import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// test('Fungsi sum harus menjumlahkan dua angka dengan benar', () => {
//   // Arrange
//   const operandA = 5;
//   const operandB = 10;
//   const expectedValue = 15;

//   // Act
//   const actualValue = sum(operandA, operandB);

//   // Assert
//   assert.strictEqual(actualValue, expectedValue);
// });

// test('Fungsi sum harus bisa menangani angka negatif', () => {
//   // Arrange
//   const operandA = -5;
//   const operandB = 2;
//   const expectedValue = -3;

//   // Act
//   const actualValue = sum(operandA, operandB);

//   // Assert
//   assert.strictEqual(actualValue, expectedValue);
// });

describe('Menguji Fungsi SUM', () => {
    test('Tes penambahan', () => {
        const result = sum(1, 2);
        assert.strictEqual(result, 3);
    });

    test('Tes menangani kasus negative/minus)', () => {
        assert.strictEqual(sum(-1, 1), 0);
    });
});