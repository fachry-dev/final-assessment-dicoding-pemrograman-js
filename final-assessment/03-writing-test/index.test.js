import { test } from "node:test";
import assert from "node:assert";
import { add } from "./calculator.mjs";

test("should add two numbers correctly", () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = add(a, b);

  // Assert
  assert.strictEqual(result, 5);
});
