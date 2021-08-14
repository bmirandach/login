const cardSignIn = document.querySelector('.card-sign-in');
const cardSignUp = document.querySelector('.card-sign-up');
const lnkSignIn = document.querySelector('.to-sign-in');
const lnkSignUp = document.querySelector('.to-sign-up');

const hide = () => {
  cardSignIn.classList.toggle('invisible');
  cardSignUp.classList.toggle('invisible');
};

lnkSignIn.addEventListener('click', hide);
lnkSignUp.addEventListener('click', hide);