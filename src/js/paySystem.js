export default function getPaySystem(number) {
  if (/^4/.test(number)) return 'visa';
  if (/^5[1-5]/.test(number)) return 'mastercard';
  if (/^5[6-8]/.test(number)) return 'maestro';
  if (/^2/.test(number)) return 'mir';
  if (/^3[47]/.test(number)) return 'american';
  return false;
}
