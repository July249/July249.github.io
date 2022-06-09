const input = document.querySelector('.code__input');
const btn = document.querySelector('.click-me');

function changeColor() {
  const code = input.value;
  if (code === '') {
    input.focus();
    return;
  }

  document.body.style.backgroundColor = `${code}`;
  btn.style.backgroundColor = `${code}`;

  input.focus();
}

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    changeColor();
  }
});

btn.addEventListener('click', (event) => {
  changeColor();
});
