import luhnAlgorithm from '../js/luhnAlgorithm';

test('luhnAlgorithm reports true', () => {
  const cardNumber = '245434564356745';
  const received = luhnAlgorithm(cardNumber);
  expect(received).toBeTruthy();
});
test('luhnAlgorithm reports false', () => {
  const cardNumber = '44456756';
  const received = luhnAlgorithm(cardNumber);
  expect(received).toBeFalsy();
});
