const vibrate = document.querySelector('button')

vibrate.addEventListener('click', () => {
  let stat = window.navigator.vibrate(50000);

  alert(stat);
});
