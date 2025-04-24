const propContainer = document.querySelector('.card');
const upDownButton = document.querySelector('#close');
const upDownIcon = document.querySelector('#upDownIcon')

upDownButton.addEventListener('click', () => {
  if (upDownIcon.src.includes('down')) {
    upDownIcon.src = './icons/up.svg';
    propContainer.style.top = '0px';

  }
  else if (upDownIcon.src.includes('up')) {
    upDownIcon.src = './icons/down.svg';
    propContainer.style.top = '-90px';
  }
})