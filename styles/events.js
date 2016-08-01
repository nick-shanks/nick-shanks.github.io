var input = document.getElementsByTagName('li')[0];

input.addEventListener('mouseenter', incoming);
input.addEventListener('mouseleave', exit);

function incoming (evt) {
  evt.target.style.backgroundColor = 'white';
  evt.target.style.color = 'black';
}

function exit (evt) {
  evt.target.style.backgroundColor = 'black';
  evt.target.style.color = 'white';
}
