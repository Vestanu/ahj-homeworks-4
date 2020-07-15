import getPaySystem from '../js/paySystem';

test('Will return Americam Express', () => {
  const expected = 'american';
  const cardNumber = '3400123456789012';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});

test('Will return Americam Express', () => {
  const expected = 'american';
  const cardNumber = '3700123456789012';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});

test('Will return MasterCard', () => {
  const expected = 'mastercard';
  const cardNumber = '51001234567891234';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('Will return Maestro', () => {
  const expected = 'maestro';
  const cardNumber = '5600567845321023';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});

test('Will return MIR', () => {
  const expected = 'mir';
  const cardNumber = '222222222222222';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('Will return Visa', () => {
  const expected = 'visa';
  const cardNumber = '400000000000000';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('Will return false', () => {
  const cardNumber = '7874568396210273';
  const received = getPaySystem(cardNumber);
  expect(received).toBeFalsy();
});
