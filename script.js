const box = 
document.getElementById('box');
const colours = ['#ffffff', 'hwb(120 10% 21%)', 'rgb(0,0,0)', 'rgb(255,255,2550)', 'hwb(204 10% 21%)', 'hwb(0 5% 14%)','hwb(73 5% 14%)', 'hwb(295 5% 33%)']; 

let count = 0;
box.addEventListener('click',() => {
    count++;
    box.textContent = count;
    const randomColor =
    colours[Math.floor(Math.random() * colours.length)];
    box.style.backgroundColor = randomColor;
})