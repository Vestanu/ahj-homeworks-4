/* eslint-disable no-param-reassign */
import getPaySystem from './paySystem';
import luhnAlgorithm from './luhnAlgorithm';

document.addEventListener('DOMContentLoaded', () => {
  const paySystems = Array.from(document.getElementsByClassName('img-card'));
  const input = document.getElementById('input');
  const button = document.getElementById('validation-button');
  const valid = document.getElementById('valid');

  input.addEventListener('input', (event) => {
    paySystems.forEach((element) => {
      if (element.id === getPaySystem(event.target.value)) {
        element.style.opacity = '1';
      } else {
        element.style.opacity = '0.3';
      }
    });
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (luhnAlgorithm(input.value)) {
      valid.textContent = 'Number car is valid';
      valid.style.color = '#5eb95e';
    } else {
      valid.textContent = 'Number car is not valid';
      valid.style.color = '#f81111';
    }
  });
});
