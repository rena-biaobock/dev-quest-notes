let btnTrocarCor = document.getElementById('btn-change-color');
let blueDiv = document.querySelector('.bg-blue');

btnTrocarCor.addEventListener('click', changeColor);

function changeColor () {
    blueDiv.classList.remove('bg-blue')
    blueDiv.classList.add('bg-yellow')
};