const vibrate = document.querySelector('button')

const vib = () => {
    window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
}

vibrate.addEventListener('click', () => {
    setInterval(vib, 100);
});
