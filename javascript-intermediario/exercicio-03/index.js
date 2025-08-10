let container = document.getElementsByClassName('container')[0]

container.addEventListener('click', function () {
    if (!(container.classList.contains('blue'))) {
        container.classList.add('blue')
    } else {
        container.classList.remove('blue')
    }
});