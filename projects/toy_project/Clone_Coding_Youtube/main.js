const moreBtn = document.querySelector('.info .titleAndBtn .moreBtn');
const title = document.querySelector('.info .titleAndBtn .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})