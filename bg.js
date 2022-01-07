//generating random no for selecting temporary background
const n = (Math.floor(Math.random() * 31));

document.getElementById("bg").style.backgroundImage = `url('background/bg${n}.jpg')`