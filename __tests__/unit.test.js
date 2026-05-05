// unit.test.js

// import {
//   isPhoneNumber,
//   isEmail,
//   isStrongPassword,
//   isDate,
//   isHexColor,
// } from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
import * as functions from '../code-to-unit-test/unit-test-me.js';

test('phone number with dashes should work', () => {
  expect(functions.isPhoneNumber('858-123-4567')).toBe(true);
});
test('phone number with parens should work', () => {
  expect(functions.isPhoneNumber('(858) 123-4567')).toBe(true);
});
test('just random letters is not a phone number', () => {
  expect(functions.isPhoneNumber('hello')).toBe(false);
});
test('too short to be a phone number', () => {
  expect(functions.isPhoneNumber('123-456')).toBe(false);
});

test('basic email should pass', () => {
  expect(functions.isEmail('mlee@ucsd.edu')).toBe(true);
});
test('gmail address should pass', () => {
  expect(functions.isEmail('matthewlee@gmail.com')).toBe(true);
});
test('no @ sign means invalid', () => {
  expect(functions.isEmail('mleeatucsd.edu')).toBe(false);
});
test('no dot at the end should fail', () => {
  expect(functions.isEmail('mlee@ucsd')).toBe(false);
});

test('normal password with capital and number', () => {
  expect(functions.isStrongPassword('Matthew1')).toBe(true);
});
test('underscore should be allowed in password', () => {
  expect(functions.isStrongPassword('Hello_123')).toBe(true);
});
test('starting with number should fail', () => {
  expect(functions.isStrongPassword('1abcdefg')).toBe(false);
});
test('way too short', () => {
  expect(functions.isStrongPassword('Hi1')).toBe(false);
});

test('normal date format works', () => {
  expect(functions.isDate('4/20/2026')).toBe(true);
});
test('double digit month and day works', () => {
  expect(functions.isDate('11/25/2024')).toBe(true);
});
test('dashes instead of slashes should not work', () => {
  expect(functions.isDate('4-20-2026')).toBe(false);
});
test('two digit year should fail', () => {
  expect(functions.isDate('4/20/26')).toBe(false);
});

test('valid 6 digit hex', () => {
  expect(functions.isHexColor('#ff5733')).toBe(true);
});
test('shorthand 3 digit hex works', () => {
  expect(functions.isHexColor('#abc')).toBe(true);
});
test('g is not a valid hex character', () => {
  expect(functions.isHexColor('#gggggg')).toBe(false);
});
test('5 digits is wrong length for hex', () => {
  expect(functions.isHexColor('#12345')).toBe(false);
});