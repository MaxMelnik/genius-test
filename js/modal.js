const modal = document.querySelector('.backdrop');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnsClose = document.querySelectorAll('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnsOpen.forEach(btn => btn.addEventListener('click', toggleModal));
modalBtnsClose.forEach(btn => btn.addEventListener('click', toggleModal));
