//popup

const close = document.querySelector('.close');
const popup = document.querySelector('.popup');

close.addEventListener('click', removePopup);

function removePopup(){
popup.classList.add('hide');
}
