const btn = document.querySelector('button');
const container = document.getElementById('con');
const disColor = document.querySelectorAll('#displayColor');
const label = document.querySelectorAll('#colorNum');
const box = document.querySelector('#box');

function randomC() {
    let r = Math.floor(Math.random(1) * 255)
    let g = Math.floor(Math.random(1) * 255)
    let b = Math.floor(Math.random(1) * 255)
    return `rgb(${r},${g},${b})`
}

// box.addEventListener('mouseenter',  )




btn.addEventListener('click', () => {
    
    for (let i = 0; i < disColor.length; i++) {
        const C = randomC();
        disColor[i].style.backgroundColor = C;
        label[i].innerText = C;
    }
})







