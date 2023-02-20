const btn = document.querySelector('button');
const container = document.getElementById('con');
const disColor = document.querySelectorAll('#displayColor');
const label = document.querySelectorAll('#colorNum');


btn.addEventListener('click', () => {

    disColor.forEach(disColor => {
        disColor.style.backgroundColor = randomC();
    });
    label.forEach(label => {
        label.innerText = randomC();
    });
})

function randomC() {
    let r = Math.floor(Math.random(1) * 255)
    let g = Math.floor(Math.random(1) * 255)
    let b = Math.floor(Math.random(1) * 255)
    return `rgb(${r},${g},${b})`;
}


