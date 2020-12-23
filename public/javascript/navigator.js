const vibrate = document.querySelector('button')

vibrate.addEventListener('click', () => {
  let stat = window.navigator.vibrate([
    100,
    30,
    100,
    30,
    100,
    30,
    200,
    30,
    200,
    30,
    200,
    30,
    100,
    30,
    100,
    30,
    100,
  ]);

  alert(stat);
});
