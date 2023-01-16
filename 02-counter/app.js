let counter = 0;

const valueDiv = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const classes = e.currentTarget.classList;
    if (classes.contains('decrease')) {
      counter--;
    } else if (classes.contains('increase')) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter < 0) {
      valueDiv.style.color = 'red';
    } else if (counter > 0) {
      valueDiv.style.color = 'green';
    } else {
      valueDiv.style.color = '#333';
    }

    valueDiv.textContent = counter;
  })
})


