let listItem = document.querySelectorAll('.nav li');

function ativo() {
  listItem.forEach((index) => index.classList.remove('ativo'));
  this.classList.add('ativo');
} 

listItem.forEach((event) => event.addEventListener('click', ativo))

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('.header');

menuToggle.onclick = function(){
  header.classList.toggle('ativo')
}